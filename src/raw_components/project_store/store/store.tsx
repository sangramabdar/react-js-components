import { StoreProvider } from "./storecontext";
import * as React from "react";

function Store({ children }: { children: React.ReactNode }) {
  return <StoreProvider>{children}</StoreProvider>;
}

export default Store;
