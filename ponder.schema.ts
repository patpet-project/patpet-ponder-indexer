import { onchainTable } from "ponder";

export const tokensMinted = onchainTable("tokensMinted", (t) => ({
  id: t.text().primaryKey(), // You can use a combination of tx hash + log index for uniqueness
  to: t.text(),
  amount: t.bigint(),
  minter: t.text(),
  newTotalSupply: t.bigint(),
  remainingMintable: t.bigint(),
  reason: t.text(),
  timestamp: t.bigint(),
}));
