import { Link } from "react-router-dom";

import PurchasesEmptyIllustration from "./PurchasesEmptyIllustration";

interface Props {
  message: string;
  actionLabel?: string;
  actionTo?: string;
}

const MyPurchasesEmptyState = ({ message, actionLabel, actionTo }: Props) => (
  <div className="flex flex-1 flex-col items-center justify-center py-16 text-center">
    <PurchasesEmptyIllustration />
    <p className="mt-8 text-sm text-ww-text-dim md:text-base">{message}</p>
    {actionLabel && actionTo && (
      <Link
        to={actionTo}
        className="mt-6 rounded-full bg-gradient-to-r from-[#5eb3ff] to-ww-accent px-6 py-2.5 text-sm font-bold text-white transition hover:brightness-110"
      >
        {actionLabel}
      </Link>
    )}
  </div>
);

export default MyPurchasesEmptyState;
