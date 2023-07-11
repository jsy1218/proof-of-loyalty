import { createClient } from "wagmi";
import { appChains } from "./wagmiConnectors";
import { wagmiConnectors } from "./wagmiConnectors";

export const wagmiClient = createClient({
  autoConnect: false,
  connectors: wagmiConnectors,
  provider: appChains.provider,
});
