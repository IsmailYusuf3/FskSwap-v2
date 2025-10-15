"use client";
import { createWeb3Modal } from '@web3modal/wagmi';
import { WagmiConfig, configureChains, createConfig } from 'wagmi';
import { bscTestnet } from 'wagmi/chains';
import { publicClient } from 'wagmi';

const chains = [bscTestnet];
const projectId = process.env.WALLET_CONNECT_PROJECT_ID || 'your_walletconnect_project_id';

const { publicClient } = configureChains(chains, [
  // Add your provider (e.g., w3mProvider if needed, but typically handled by wagmi)
]);
const wagmiConfig = createConfig({
  autoConnect: true,
  publicClient,
  // Connectors are handled by Web3Modal now
});

createWeb3Modal({ wagmiConfig, projectId });

export function Web3Provider({ children }: { children: React.ReactNode }) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>;
}
