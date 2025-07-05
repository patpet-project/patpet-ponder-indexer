export const PatValidationSystemAbi = [
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "owner", "type": "address" },
      { "indexed": true, "internalType": "address", "name": "patToken", "type": "address" },
      { "indexed": true, "internalType": "address", "name": "treasuryManager", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "minValidatorStake", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "validationRewardBase", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "validationDeadline", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }
    ],
    "name": "ValidationSystemInitialized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "validator", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "stakedAmount", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "initialReputationScore", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "totalActiveValidators", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }
    ],
    "name": "ValidatorRegistered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "validator", "type": "address" },
      { "indexed": false, "internalType": "string", "name": "reason", "type": "string" },
      { "indexed": false, "internalType": "uint256", "name": "stakedAmountReturned", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "finalReputationScore", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "totalValidationsCompleted", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "accuracyRate", "type": "uint256" },
      { "indexed": true, "internalType": "address", "name": "deactivatedBy", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }
    ],
    "name": "ValidatorDeactivated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "uint256", "name": "milestoneId", "type": "uint256" },
      { "indexed": true, "internalType": "address", "name": "submitter", "type": "address" },
      { "indexed": false, "internalType": "string", "name": "evidenceIPFS", "type": "string" },
      { "indexed": false, "internalType": "uint256", "name": "goalStakeAmount", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "requiredValidators", "type": "uint256" },
      { "indexed": false, "internalType": "address[]", "name": "assignedValidators", "type": "address[]" },
      { "indexed": false, "internalType": "uint256", "name": "deadline", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }
    ],
    "name": "ValidationRequested",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "uint256", "name": "milestoneId", "type": "uint256" },
      { "indexed": true, "internalType": "address", "name": "validator", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "validatorReputationScore", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "validatorTotalValidations", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "assignmentIndex", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }
    ],
    "name": "ValidatorAssigned",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "uint256", "name": "milestoneId", "type": "uint256" },
      { "indexed": true, "internalType": "address", "name": "validator", "type": "address" },
      { "indexed": false, "internalType": "bool", "name": "approved", "type": "bool" },
      { "indexed": false, "internalType": "string", "name": "comment", "type": "string" },
      { "indexed": false, "internalType": "uint256", "name": "currentApprovals", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "currentRejections", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "requiredValidators", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }
    ],
    "name": "ValidationSubmitted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "uint256", "name": "milestoneId", "type": "uint256" },
      { "indexed": false, "internalType": "uint8", "name": "status", "type": "uint8" },
      { "indexed": false, "internalType": "uint256", "name": "totalApprovals", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "totalRejections", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "totalValidators", "type": "uint256" },
      { "indexed": false, "internalType": "address[]", "name": "validators", "type": "address[]" },
      { "indexed": false, "internalType": "bool[]", "name": "votes", "type": "bool[]" },
      { "indexed": false, "internalType": "uint256", "name": "resolutionTime", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }
    ],
    "name": "ValidationResolved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "validator", "type": "address" },
      { "indexed": true, "internalType": "uint256", "name": "milestoneId", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" },
      { "indexed": false, "internalType": "bool", "name": "wasAccurate", "type": "bool" },
      { "indexed": false, "internalType": "uint256", "name": "bonusPercentage", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "newReputationScore", "type": "uint256" },
      { "indexed": false, "internalType": "string", "name": "reason", "type": "string" },
      { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }
    ],
    "name": "ValidatorRewarded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "validator", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "oldReputationScore", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "newReputationScore", "type": "uint256" },
      { "indexed": false, "internalType": "bool", "name": "wasAccurate", "type": "bool" },
      { "indexed": false, "internalType": "uint256", "name": "totalValidations", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "accurateValidations", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "accuracyRate", "type": "uint256" },
      { "indexed": false, "internalType": "string", "name": "reason", "type": "string" },
      { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }
    ],
    "name": "ReputationUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "contractAddress", "type": "address" },
      { "indexed": false, "internalType": "bool", "name": "authorized", "type": "bool" },
      { "indexed": true, "internalType": "address", "name": "changedBy", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }
    ],
    "name": "AuthorizationChanged",
    "type": "event"
  }
 ] as const;
