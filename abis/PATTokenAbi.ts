export const PATTokenAbi = [
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" },
      { "indexed": true, "internalType": "address", "name": "owner", "type": "address" },
      { "indexed": true, "internalType": "address", "name": "minter", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "goalId", "type": "uint256" },
      { "indexed": false, "internalType": "uint8", "name": "petType", "type": "uint8" },
      { "indexed": false, "internalType": "uint8", "name": "stage", "type": "uint8" },
      { "indexed": false, "internalType": "uint256", "name": "level", "type": "uint256" },
      { "indexed": false, "internalType": "string", "name": "name", "type": "string" },
      { "indexed": false, "internalType": "string", "name": "metadataIPFS", "type": "string" },
      { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }
    ],
    "name": "PetMinted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" },
      { "indexed": true, "internalType": "uint256", "name": "goalId", "type": "uint256" },
      { "indexed": true, "internalType": "address", "name": "owner", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "xpAwarded", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "newMilestones", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "newLevel", "type": "uint256" },
      { "indexed": false, "internalType": "uint8", "name": "newStage", "type": "uint8" },
      { "indexed": false, "internalType": "string", "name": "newMetadataIPFS", "type": "string" },
      { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }
    ],
    "name": "MilestoneCompleted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" },
      { "indexed": true, "internalType": "uint256", "name": "goalId", "type": "uint256" },
      { "indexed": true, "internalType": "address", "name": "owner", "type": "address" },
      { "indexed": false, "internalType": "uint8", "name": "fromStage", "type": "uint8" },
      { "indexed": false, "internalType": "uint8", "name": "toStage", "type": "uint8" },
      { "indexed": false, "internalType": "uint256", "name": "milestonesCompleted", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "totalExperience", "type": "uint256" },
      { "indexed": false, "internalType": "string", "name": "newMetadataIPFS", "type": "string" },
      { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }
    ],
    "name": "PetEvolved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" },
      { "indexed": true, "internalType": "uint256", "name": "goalId", "type": "uint256" },
      { "indexed": true, "internalType": "address", "name": "owner", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "experienceAmount", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "newTotalExp", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "oldLevel", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "newLevel", "type": "uint256" },
      { "indexed": false, "internalType": "string", "name": "reason", "type": "string" },
      { "indexed": false, "internalType": "string", "name": "newMetadataIPFS", "type": "string" },
      { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }
    ],
    "name": "ExperienceGained",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256" },
      { "indexed": true, "internalType": "uint256", "name": "goalId", "type": "uint256" },
      { "indexed": true, "internalType": "address", "name": "owner", "type": "address" },
      { "indexed": false, "internalType": "string", "name": "oldMetadataIPFS", "type": "string" },
      { "indexed": false, "internalType": "string", "name": "newMetadataIPFS", "type": "string" },
      { "indexed": false, "internalType": "string", "name": "updateReason", "type": "string" },
      { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }
    ],
    "name": "MetadataUpdated",
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
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": false, "internalType": "string", "name": "oldBaseURI", "type": "string" },
      { "indexed": false, "internalType": "string", "name": "newBaseURI", "type": "string" },
      { "indexed": true, "internalType": "address", "name": "updatedBy", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256" }
    ],
    "name": "BaseURIUpdated",
    "type": "event"
  }
 ] as const;
