import type { ReactNode } from "react";

interface Props {
  open: boolean;
  align?: "center" | "right";
  width?: string;
  children: ReactNode;
}

const NavDropdownPanel = ({
  open,
  align = "center",
  width = "w-[220px]",
  children,
}: Props) => (
  <div
    className={`absolute top-[calc(100%+10px)] z-[60] ${width} transition-all duration-200 ease-out ${
      align === "right" ? "right-0" : "left-1/2 -translate-x-1/2"
    } ${
      open
        ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
        : "pointer-events-none -translate-y-2 scale-95 opacity-0"
    }`}
  >
    <div
      className={`absolute -top-2 h-0 w-0 border-x-8 border-b-8 border-x-transparent border-b-ww-caret ${
        align === "right" ? "right-3" : "left-1/2 -translate-x-1/2"
      }`}
    />
    <div className="overflow-hidden rounded-xl border border-ww-border bg-ww-panel shadow-2xl">
      {children}
    </div>
  </div>
);

export default NavDropdownPanel;
