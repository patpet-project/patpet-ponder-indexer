export const PatTreasuryManagerAbi = [
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "owner", "type": "address" },
      { "indexed": true, "internalType": "address", "name": "patToken", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }
    ],
    "name": "TreasuryInitialized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": false, "internalType": "uint256", "name": "stakeAmount", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "rewardPoolAmount", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "insurancePoolAmount", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "validatorPoolAmount", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "developmentPoolAmount", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "burnedAmount", "type": "uint256" },
      { "indexed": true, "internalType": "address", "name": "staker", "type": "address" },
      { "indexed": false, "internalType": "string", "name": "reason", "type": "string" },
      { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }
    ],
    "name": "StakeDistributed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "user", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "stakeAmount", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "totalReward", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "bonusReward", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "tier", "type": "uint256" },
      { "indexed": false, "internalType": "string", "name": "tierName", "type": "string" },
      { "indexed": false, "internalType": "uint256", "name": "rewardMultiplier", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }
    ],
    "name": "RewardCalculated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "user", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "stakeAmount", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "totalReward", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "bonusReward", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "tier", "type": "uint256" },
      { "indexed": false, "internalType": "string", "name": "tierName", "type": "string" },
      { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }
    ],
    "name": "RewardDistributed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "validator", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" },
      { "indexed": false, "internalType": "string", "name": "reason", "type": "string" },
      { "indexed": true, "internalType": "address", "name": "distributor", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }
    ],
    "name": "ValidatorRewardDistributed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": false, "internalType": "string", "name": "poolName", "type": "string" },
      { "indexed": false, "internalType": "uint256", "name": "oldBalance", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "newBalance", "type": "uint256" },
      { "indexed": false, "internalType": "int256", "name": "change", "type": "int256" },
      { "indexed": false, "internalType": "string", "name": "reason", "type": "string" },
      { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }
    ],
    "name": "PoolBalanceUpdated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "recipient", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" },
      { "indexed": false, "internalType": "string", "name": "poolName", "type": "string" },
      { "indexed": false, "internalType": "string", "name": "reason", "type": "string" },
      { "indexed": true, "internalType": "address", "name": "withdrawnBy", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }
    ],
    "name": "TreasuryWithdrawal",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "recipient", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" },
      { "indexed": false, "internalType": "string", "name": "reason", "type": "string" },
      { "indexed": true, "internalType": "address", "name": "withdrawnBy", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }
    ],
    "name": "EmergencyWithdrawal",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "uint256", "name": "tierIndex", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "minStake", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "maxStake", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "rewardMultiplier", "type": "uint256" },
      { "indexed": false, "internalType": "string", "name": "tierName", "type": "string" },
      { "indexed": true, "internalType": "address", "name": "updatedBy", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }
    ],
    "name": "StakeTierUpdated",
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
