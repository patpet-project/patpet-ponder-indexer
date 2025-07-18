# Pat-Pet Indexer

This project is a custom Ethereum indexer for the PATToken contract using Ponder v0.11.24.

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```

2. Set your Ethereum RPC URL in `.env`:
   ```sh
   MAINNET_RPC_URL=your_rpc_url_here
   ```

3. Update `ponder.config.ts` with your contract's address, ABI, and start block.

4. Run the indexer:
   ```sh
   npm run dev
   ```

## Project Structure
- `src/index.ts`: Event handlers for contract events
- `ponder.config.ts`: Ponder configuration (networks, contracts)
- `abis/`: Contract ABI files

## Resources
- [Ponder Documentation](https://docs.ponder.sh/)
#   p a t p e t - p o n d e r - i n d e x e r  
 