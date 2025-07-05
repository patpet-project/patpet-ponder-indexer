import { onchainTable, onchainEnum, index } from "ponder";

// Define essential enums for MVP
export const goalStatus = onchainEnum("goal_status", ["ACTIVE", "COMPLETED", "FAILED"]);
export const petType = onchainEnum("pet_type", ["DRAGON", "CAT", "PLANT"]);
export const evolutionStage = onchainEnum("evolution_stage", ["EGG", "BABY", "ADULT"]);

export const validationStatus = onchainEnum("validation_status", [
  "PENDING", 
  "APPROVED", 
  "REJECTED", 
  "DISPUTED"
]);

// ============ MVP CORE TABLES ============

// Goals - main entity for dashboard
export const goals = onchainTable(
  "goals",
  (t) => ({
    id: t.text().primaryKey(), // goalId
    owner: t.hex().notNull(),
    petTokenId: t.bigint().notNull(),
    title: t.text().notNull(),
    stakeAmount: t.bigint().notNull(),
    totalMilestones: t.integer().notNull(),
    milestonesCompleted: t.integer().notNull().default(0),
    petName: t.text().notNull(),
    petType: petType("petType").notNull(),
    status: goalStatus("status").notNull().default("ACTIVE"),
    endTime: t.bigint().notNull(),
    createdAt: t.bigint().notNull(),
  }),
  (table) => ({
    ownerIdx: index().on(table.owner),
    statusIdx: index().on(table.status),
  })
);

// Milestones - track progress
export const milestones = onchainTable(
  "milestones",
  (t) => ({
    id: t.text().primaryKey(), // milestoneId
    goalId: t.text().notNull(),
    description: t.text().notNull(),
    isCompleted: t.boolean().notNull().default(false),
    evidenceIPFS: t.text(),
    createdAt: t.bigint().notNull(),
  }),
  (table) => ({
    goalIdx: index().on(table.goalId),
  })
);

// Pets - evolution tracking
export const pets = onchainTable(
  "pets",
  (t) => ({
    id: t.text().primaryKey(), // tokenId
    goalId: t.text().notNull(),
    owner: t.hex().notNull(),
    name: t.text().notNull(),
    petType: petType("petType").notNull(),
    evolutionStage: evolutionStage("evolutionStage").notNull().default("EGG"),
    experience: t.bigint().notNull().default(0n),
    milestonesCompleted: t.integer().notNull().default(0),
    metadataIPFS: t.text().notNull(),
  }),
  (table) => ({
    ownerIdx: index().on(table.owner),
    goalIdx: index().on(table.goalId),
  })
);

// User stats for dashboard summary
export const userStats = onchainTable(
  "user_stats",
  (t) => ({
    id: t.hex().primaryKey(), // user address
    totalGoals: t.integer().notNull().default(0),
    completedGoals: t.integer().notNull().default(0),
    activeGoals: t.integer().notNull().default(0),
    totalRewardsEarned: t.bigint().notNull().default(0n),
  }),
  (table) => ({
    // No additional indexes needed for MVP
  })
);

export const validationRequests = onchainTable(
  "validation_requests",
  (t) => ({
    id: t.text().primaryKey(), // milestoneId (validation request per milestone)
    submitter: t.hex().notNull(),
    goalId: t.text().notNull(),
    evidenceIPFS: t.text().notNull(),
    goalStakeAmount: t.bigint().notNull(),
    requiredValidators: t.integer().notNull(),
    currentApprovals: t.integer().notNull().default(0),
    currentRejections: t.integer().notNull().default(0),
    status: validationStatus("status").notNull().default("PENDING"),
    deadline: t.bigint().notNull(),
    isResolved: t.boolean().notNull().default(false),
    createdAt: t.bigint().notNull(),
  }),
  (table) => ({
    submitterIdx: index().on(table.submitter),
    statusIdx: index().on(table.status),
    goalIdx: index().on(table.goalId),
  })
);

// Validators table
export const validators = onchainTable(
  "validators",
  (t) => ({
    id: t.hex().primaryKey(), // validator address
    stakedAmount: t.bigint().notNull(),
    reputationScore: t.integer().notNull().default(1000),
    totalValidations: t.integer().notNull().default(0),
    accurateValidations: t.integer().notNull().default(0),
    isActive: t.boolean().notNull().default(true),
    registeredAt: t.bigint().notNull(),
  }),
  (table) => ({
    activeIdx: index().on(table.isActive),
    reputationIdx: index().on(table.reputationScore),
  })
);

// Validation Submissions table (individual validator votes)
export const validationSubmissions = onchainTable(
  "validation_submissions",
  (t) => ({
    id: t.text().primaryKey(), // milestoneId_validatorAddress
    milestoneId: t.text().notNull(),
    validator: t.hex().notNull(),
    approved: t.boolean().notNull(),
    comment: t.text(),
    submittedAt: t.bigint().notNull(),
  }),
  (table) => ({
    milestoneIdx: index().on(table.milestoneId),
    validatorIdx: index().on(table.validator),
  })
);