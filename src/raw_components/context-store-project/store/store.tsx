import React from "react";
import { ProductProvider } from "./products";
import { SelecredProdcutProvider } from "./selectedProduct";

function Store({ children }: { children: React.ReactNode }) {
  console.log(
    <ProductProvider>
      <SelecredProdcutProvider>{children}</SelecredProdcutProvider>
    </ProductProvider>
  );
  return (
    <ProductProvider>
      <SelecredProdcutProvider>{children}</SelecredProdcutProvider>
    </ProductProvider>
  );
}

export default Store;
