import { createConfig } from "ponder";
import { PATTokenAbi } from "./abis/PATTokenAbi";
import { PatTreasuryManagerAbi } from "./abis/PatTreasuryManagerAbi";
import { PatValidationSystemAbi } from "./abis/PatValidationSystemAbi";
import { PatNFTAbi } from "./abis/PatNFTAbi";
import { PatGoalManagerAbi } from "./abis/PatGoalManagerAbi";

export default createConfig({
  database: {
    kind: "pglite",
    directory: "./.ponder/pglite",
  },
  chains: {
    monadtest: {
      id: 10143,
      rpc: process.env.MONADTEST_RPC_URL || "https://testnet-rpc.monad.xyz/",
    },
  },
  contracts: {
    PATToken: {
      abi: PATTokenAbi,
      chain: "monadtest",
      address: "0xBDD6aB65C86fb8f0C47069a0562652d448E98cea",
      startBlock: 24787853,
    },
    PatTreasuryManager: {
      abi: PatTreasuryManagerAbi,
      chain: "monadtest",
      address: "0xF6eeF6F30D7efC96D136cf499655C8D3822B8f1b",
      startBlock: 24787853,
    },
    PatValidationSystem: {
      abi: PatValidationSystemAbi,
      chain: "monadtest",
      address: "0x42c799cC90122705FC180B4801f4067B76843B1e",
      startBlock: 24787853,
    },
    PatNFT: {
      abi: PatNFTAbi,
      chain: "monadtest",
      address: "0xc0ed1D1429Ad0982186e6E9E8dECdbCD63054c70",
      startBlock: 24787853,
    },
    PatGoalManager: {
      abi: PatGoalManagerAbi,
      chain: "monadtest",
      address: "0x9bCE0A3A24DD387137312E91422e440e99398D8D",
      startBlock: 24787853,
    },
  },
});
