import { ponder } from "ponder:registry";

// Register a handler for the PATToken:TokensMinted event
ponder.on("PatNFT:TokensMinted", async ({ event, context }) => {
  // Example: log the event data (replace with custom logic as needed)
  console.log("TokensMinted event:", event);
});
