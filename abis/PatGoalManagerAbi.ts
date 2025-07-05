export const PatGoalManagerAbi = [
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "uint256", "name": "goalId", "type": "uint256" },
      { "indexed": true, "internalType": "address", "name": "owner", "type": "address" },
      { "indexed": true, "internalType": "uint256", "name": "petTokenId", "type": "uint256" },
      { "indexed": false, "internalType": "string", "name": "title", "type": "string" },
      { "indexed": false, "internalType": "uint256", "name": "stakeAmount", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "durationDays", "type": "uint256" },
      { "indexed": false, "internalType": "string", "name": "petName", "type": "string" },
      { "indexed": false, "internalType": "uint8", "name": "petType", "type": "uint8" },
      { "indexed": false, "internalType": "string", "name": "petMetadataIPFS", "type": "string" },
      { "indexed": false, "internalType": "uint8", "name": "totalMilestones", "type": "uint8" },
      { "indexed": false, "internalType": "uint256", "name": "endTime", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }
    ],
    "name": "GoalCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "uint256", "name": "milestoneId", "type": "uint256" },
      { "indexed": true, "internalType": "uint256", "name": "goalId", "type": "uint256" },
      { "indexed": true, "internalType": "address", "name": "goalOwner", "type": "address" },
      { "indexed": false, "internalType": "string", "name": "description", "type": "string" },
      { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }
    ],
    "name": "MilestoneCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "uint256", "name": "milestoneId", "type": "uint256" },
      { "indexed": true, "internalType": "uint256", "name": "goalId", "type": "uint256" },
      { "indexed": true, "internalType": "address", "name": "submitter", "type": "address" },
      { "indexed": false, "internalType": "string", "name": "evidenceIPFS", "type": "string" },
      { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }
    ],
    "name": "MilestoneSubmitted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "uint256", "name": "milestoneId", "type": "uint256" },
      { "indexed": true, "internalType": "uint256", "name": "goalId", "type": "uint256" },
      { "indexed": true, "internalType": "address", "name": "goalOwner", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "xpAwarded", "type": "uint256" },
      { "indexed": false, "internalType": "uint8", "name": "milestonesCompleted", "type": "uint8" },
      { "indexed": false, "internalType": "uint8", "name": "totalMilestones", "type": "uint8" },
      { "indexed": false, "internalType": "uint256", "name": "progressPercentage", "type": "uint256" },
      { "indexed": false, "internalType": "string", "name": "petMetadataIPFS", "type": "string" },
      { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }
    ],
    "name": "MilestoneCompleted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "uint256", "name": "goalId", "type": "uint256" },
      { "indexed": true, "internalType": "address", "name": "owner", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "bonusXP", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "stakeReward", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "completionTime", "type": "uint256" },
      { "indexed": false, "internalType": "bool", "name": "wasEarlyCompletion", "type": "bool" },
      { "indexed": false, "internalType": "bool", "name": "allMilestonesCompleted", "type": "bool" },
      { "indexed": false, "internalType": "string", "name": "finalPetMetadataIPFS", "type": "string" },
      { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }
    ],
    "name": "GoalCompleted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "uint256", "name": "goalId", "type": "uint256" },
      { "indexed": true, "internalType": "address", "name": "owner", "type": "address" },
      { "indexed": false, "internalType": "uint8", "name": "milestonesCompleted", "type": "uint8" },
      { "indexed": false, "internalType": "uint8", "name": "totalMilestones", "type": "uint8" },
      { "indexed": false, "internalType": "uint256", "name": "stakeLost", "type": "uint256" },
      { "indexed": false, "internalType": "string", "name": "failureReason", "type": "string" },
      { "indexed": false, "internalType": "string", "name": "sadPetMetadataIPFS", "type": "string" },
      { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }
    ],
    "name": "GoalFailed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "uint256", "name": "goalId", "type": "uint256" },
      { "indexed": true, "internalType": "address", "name": "owner", "type": "address" },
      { "indexed": true, "internalType": "uint256", "name": "petTokenId", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "xpAmount", "type": "uint256" },
      { "indexed": false, "internalType": "string", "name": "reason", "type": "string" },
      { "indexed": false, "internalType": "address", "name": "awardedBy", "type": "address" },
      { "indexed": false, "internalType": "string", "name": "petMetadataIPFS", "type": "string" },
      { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }
    ],
    "name": "BonusXPAwarded",
    "type": "event"
  }
] as const;
