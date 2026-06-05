import { ShoppingBag } from "lucide-react";

const PurchasesEmptyIllustration = () => (
  <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-[#c8d8e6]">
    <ShoppingBag size={52} strokeWidth={1.5} className="text-white" />
    <span className="absolute -top-1 right-1 flex h-9 min-w-[2.25rem] items-center justify-center rounded-2xl rounded-bl-sm bg-ww-accent px-2 text-sm font-bold tracking-widest text-white">
      ...
    </span>
  </div>
);

export default PurchasesEmptyIllustration;
