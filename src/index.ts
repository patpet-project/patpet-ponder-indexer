import { ponder } from "ponder:registry";
import { goals, milestones, pets, userStats } from "ponder:schema";
import { validationRequests, validators, validationSubmissions } from "ponder:schema";


// ============ MVP CORE EVENTS ============

// 1. Goal Creation (Primary MVP Flow)
ponder.on("PatGoalManager:GoalCreated", async ({ event, context }) => {
  const { 
    goalId, 
    owner, 
    petTokenId, 
    title, 
    stakeAmount, 
    petName, 
    petType, 
    petMetadataIPFS, 
    totalMilestones, 
    endTime, 
    timestamp 
  } = event.args;

  // Insert goal
  await context.db.insert(goals).values({
    id: goalId.toString(),
    owner: owner,
    petTokenId: petTokenId,
    title: title,
    stakeAmount: stakeAmount,
    totalMilestones: Number(totalMilestones),
    milestonesCompleted: 0,
    petName: petName,
    petType: getPetTypeName(Number(petType)),
    status: "ACTIVE",
    endTime: endTime,
    createdAt: timestamp,
  });

  // Insert pet
  await context.db.insert(pets).values({
    id: petTokenId.toString(),
    goalId: goalId.toString(),
    owner: owner,
    name: petName,
    petType: getPetTypeName(Number(petType)),
    evolutionStage: "EGG",
    experience: 0n,
    milestonesCompleted: 0,
    metadataIPFS: petMetadataIPFS,
  });

  // Update user stats
  await updateUserStats(context, owner, "GOAL_CREATED");
});

// 2. Milestone Creation
ponder.on("PatGoalManager:MilestoneCreated", async ({ event, context }) => {
  const { milestoneId, goalId, description, timestamp } = event.args;

  await context.db.insert(milestones).values({
    id: milestoneId.toString(),
    goalId: goalId.toString(),
    description: description,
    isCompleted: false,
    createdAt: timestamp,
  });
});

// 3. Milestone Submission
ponder.on("PatGoalManager:MilestoneSubmitted", async ({ event, context }) => {
  const { milestoneId, evidenceIPFS } = event.args;

  await context.db
    .update(milestones, { id: milestoneId.toString() })
    .set({
      evidenceIPFS: evidenceIPFS,
    });
});

// 4. Milestone Completion (Key MVP Event)
ponder.on("PatGoalManager:MilestoneCompleted", async ({ event, context }) => {
  const { 
    milestoneId, 
    goalId, 
    xpAwarded, 
    milestonesCompleted, 
    petMetadataIPFS 
  } = event.args;

  // Update milestone
  await context.db
    .update(milestones, { id: milestoneId.toString() })
    .set({
      isCompleted: true,
    });

  // Update goal progress
  await context.db
    .update(goals, { id: goalId.toString() })
    .set({
      milestonesCompleted: Number(milestonesCompleted),
    });

  // Update pet evolution
  const goal = await context.db.find(goals, { id: goalId.toString() });
  if (goal) {
    const newStage = getEvolutionStage(Number(milestonesCompleted));
    
    await context.db
      .update(pets, { id: goal.petTokenId.toString() })
      .set({
        experience: xpAwarded, // Simplified: just use latest XP
        milestonesCompleted: Number(milestonesCompleted),
        evolutionStage: newStage,
        metadataIPFS: petMetadataIPFS,
      });
  }
});

// 5. Goal Completion
ponder.on("PatGoalManager:GoalCompleted", async ({ event, context }) => {
  const { goalId, owner, stakeReward } = event.args;

  // Update goal status
  await context.db
    .update(goals, { id: goalId.toString() })
    .set({
      status: "COMPLETED",
    });

  // Update user stats
  await updateUserStats(context, owner, "GOAL_COMPLETED", stakeReward);
});

// 6. Goal Failed
ponder.on("PatGoalManager:GoalFailed", async ({ event, context }) => {
  const { goalId, owner } = event.args;

  // Update goal status
  await context.db
    .update(goals, { id: goalId.toString() })
    .set({
      status: "FAILED",
    });

  // Update user stats
  await updateUserStats(context, owner, "GOAL_FAILED");
});

// ============ HELPER FUNCTIONS ============

function getPetTypeName(petType: number): "DRAGON" | "CAT" | "PLANT" {
  const types = ["DRAGON", "CAT", "PLANT"];
  return types[petType] as "DRAGON" | "CAT" | "PLANT";
}

function getEvolutionStage(milestonesCompleted: number): "EGG" | "BABY" | "ADULT" {
  if (milestonesCompleted >= 4) return "ADULT";
  if (milestonesCompleted >= 2) return "BABY";
  return "EGG";
}

async function updateUserStats(
  context: any,
  userAddress: `0x${string}`,
  action: "GOAL_CREATED" | "GOAL_COMPLETED" | "GOAL_FAILED",
  rewardAmount?: bigint
) {
  try {
    const existing = await context.db.find(userStats, { id: userAddress });

    if (existing) {
      const updates: any = {};

      switch (action) {
        case "GOAL_CREATED":
          updates.totalGoals = existing.totalGoals + 1;
          updates.activeGoals = existing.activeGoals + 1;
          break;
        case "GOAL_COMPLETED":
          updates.completedGoals = existing.completedGoals + 1;
          updates.activeGoals = Math.max(0, existing.activeGoals - 1);
          updates.totalRewardsEarned = existing.totalRewardsEarned + (rewardAmount || 0n);
          break;
        case "GOAL_FAILED":
          updates.activeGoals = Math.max(0, existing.activeGoals - 1);
          break;
      }

      await context.db.update(userStats, { id: userAddress }).set(updates);
    } else {
      // Create new user stats
      await context.db.insert(userStats).values({
        id: userAddress,
        totalGoals: action === "GOAL_CREATED" ? 1 : 0,
        completedGoals: action === "GOAL_COMPLETED" ? 1 : 0,
        activeGoals: action === "GOAL_CREATED" ? 1 : 0,
        totalRewardsEarned: rewardAmount || 0n,
      });
    }
  } catch (error) {
    console.error("Error updating user stats:", error);
  }
}


// ============ VALIDATION SYSTEM EVENTS ============

// Validator Registration
ponder.on("PatValidationSystem:ValidatorRegistered", async ({ event, context }) => {
  const { validator, stakedAmount, initialReputationScore, timestamp } = event.args;

  await context.db.insert(validators).values({
    id: validator,
    stakedAmount: stakedAmount,
    reputationScore: Number(initialReputationScore),
    totalValidations: 0,
    accurateValidations: 0,
    isActive: true,
    registeredAt: timestamp,
  });
});

// Validation Request Created
ponder.on("PatValidationSystem:ValidationRequested", async ({ event, context }) => {
  const { 
    milestoneId, 
    submitter, 
    evidenceIPFS, 
    goalStakeAmount, 
    requiredValidators,
    deadline,
    timestamp 
  } = event.args;

  // Get the goal ID from the milestone
  const milestone = await context.db.find(milestones, { id: milestoneId.toString() });
  const goalId = milestone?.goalId || "0";

  await context.db.insert(validationRequests).values({
    id: milestoneId.toString(),
    submitter: submitter,
    goalId: goalId,
    evidenceIPFS: evidenceIPFS,
    goalStakeAmount: goalStakeAmount,
    requiredValidators: Number(requiredValidators),
    currentApprovals: 0,
    currentRejections: 0,
    status: "PENDING",
    deadline: deadline,
    isResolved: false,
    createdAt: timestamp,
  });
});

// Validation Submitted (individual validator vote)
ponder.on("PatValidationSystem:ValidationSubmitted", async ({ event, context }) => {
  const { 
    milestoneId, 
    validator, 
    approved, 
    comment, 
    currentApprovals, 
    currentRejections,
    timestamp 
  } = event.args;

  // Record the individual validation submission
  await context.db.insert(validationSubmissions).values({
    id: `${milestoneId.toString()}_${validator}`,
    milestoneId: milestoneId.toString(),
    validator: validator,
    approved: approved,
    comment: comment || "",
    submittedAt: timestamp,
  });

  // Update the validation request with current vote counts
  await context.db
    .update(validationRequests, { id: milestoneId.toString() })
    .set({
      currentApprovals: Number(currentApprovals),
      currentRejections: Number(currentRejections),
    });

  // Update validator stats
  const validatorRecord = await context.db.find(validators, { id: validator });
  if (validatorRecord) {
    await context.db
      .update(validators, { id: validator })
      .set({
        totalValidations: validatorRecord.totalValidations + 1,
      });
  }
});

// Validation Resolved (final decision made)
ponder.on("PatValidationSystem:ValidationResolved", async ({ event, context }) => {
  const { milestoneId, status, totalApprovals, totalRejections } = event.args;

  const finalStatus = status === 1 ? "APPROVED" : "REJECTED"; // Assuming 1 = approved, 0 = rejected

  await context.db
    .update(validationRequests, { id: milestoneId.toString() })
    .set({
      status: finalStatus,
      currentApprovals: Number(totalApprovals),
      currentRejections: Number(totalRejections),
      isResolved: true,
    });
});

// Validator Deactivated (reputation too low)
ponder.on("PatValidationSystem:ValidatorDeactivated", async ({ event, context }) => {
  const { validator, finalReputationScore } = event.args;

  await context.db
    .update(validators, { id: validator })
    .set({
      isActive: false,
      reputationScore: Number(finalReputationScore),
    });
});

// Validator Rewarded (for accurate validation)
ponder.on("PatValidationSystem:ValidatorRewarded", async ({ event, context }) => {
  const { validator, amount, wasAccurate, newReputationScore } = event.args;

  const validatorRecord = await context.db.find(validators, { id: validator });
  if (validatorRecord) {
    await context.db
      .update(validators, { id: validator })
      .set({
        reputationScore: Number(newReputationScore),
        accurateValidations: wasAccurate 
          ? validatorRecord.accurateValidations + 1 
          : validatorRecord.accurateValidations,
      });
  }
});