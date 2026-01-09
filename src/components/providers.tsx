import React from "react";
import { WagmiProvider, createConfig, http } from "wagmi";
import { sepolia } from "wagmi/chains";
import { injected } from "wagmi/connectors";
import { ClickProvider } from "@make-software/csprclick-ui";
import {
  CsprClickInitOptions,
  CONTENT_MODE,
} from "@make-software/csprclick-core-types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const wagmiConfig = createConfig({
  chains: [sepolia],
  connectors: [injected()],
  transports: {
    [sepolia.id]: http(),
  },
  ssr: true,
});

const clickOptions: CsprClickInitOptions = {
  appName: "CSPR.app",
  contentMode: CONTENT_MODE.IFRAME,
  providers: ["casper-wallet", "ledger", "metamask-snap"],
  appId: "aa876918-fe34-4e9a-af52-6c79fd67",
};

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <ClickProvider options={clickOptions}>{children}</ClickProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default Providers;
