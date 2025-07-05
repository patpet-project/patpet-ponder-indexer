import { onchainTable, onchainEnum, index } from "ponder";

// Define essential enums for MVP
export const goalStatus = onchainEnum("goal_status", ["ACTIVE", "COMPLETED", "FAILED"]);
export const petType = onchainEnum("pet_type", ["DRAGON", "CAT", "PLANT"]);
export const evolutionStage = onchainEnum("evolution_stage", ["EGG", "BABY", "ADULT"]);

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