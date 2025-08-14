"use client";
import flute from "@/assets/app/icons/flute.svg";
import hat from "@/assets/app/icons/hat.svg";
import mystic from "@/assets/app/icons/mystic.svg";
import NextImage from "@/components/ui/image";
import { useClickOutside } from "@/hooks";
import { cn } from "@/utils";
import { AlignRight, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RefObject, useRef, useState } from "react";

interface NavItemProps {
  to: string;
  label: string;
  icon: string;
  position?: "top-left" | "bottom-right" | "left";
  className?: string;
  onClick?: () => void;
}

function NavItem({
  to,
  label,
  icon,
  position = "top-left",
  className,
  onClick,
}: NavItemProps) {
  const pathname = usePathname();
  return (
    <Link
      href={to}
      onClick={onClick}
      className={cn(
        "group relative flex items-center justify-center max-md:w-full max-md:justify-start  p-3 max-md:p-0.5 rounded-md transition-all duration-300 text-xl",
        pathname === to ? "text-primary-200" : "text-white"
      )}
    >
      {label}
      <NextImage
        alt={label}
        src={icon}
        className={cn(
          "absolute w-7 h-7 transition-opacity duration-300",
          pathname === to ? "opacity-100" : "opacity-0 group-hover:opacity-100",
          position === "top-left"
            ? "-top-1.5 -left-1.5"
            : position === "left"
            ? "top-1/2 -translate-y-1/2 -left-4"
            : "-bottom-1.5 right-1",
          "max-md:relative max-md:top-3  max-md:-translate-y-1/2 max-md:left-1",
          className
        )}
      />
    </Link>
  );
}

export default function HeaderNav() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref as RefObject<HTMLElement>, () => {
    setOpen(false);
  });
  return (
    <div
      className="flex justify-evenly items-center p-2.5 relative bg-primary-800 rounded-lg"
      ref={ref}
    >
      {/* Desktop nav */}
      <nav className="hidden md:flex gap-8 px-16">
        <NavItem to="/" label="Home" icon={hat} position="top-left" />
        <NavItem
          to="/life"
          label="Life"
          icon={mystic}
          position="left"
          className="w-6 h-6"
        />
        <NavItem
          to="/poems"
          label="Poems"
          icon={flute}
          position="bottom-right"
          className="w-6 h-6"
        />
      </nav>

      {/* Mobile menu toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-md text-white"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <AlignRight size={18} />}
        </button>

        {/* Mobile dropdown */}
        <nav
          className={cn(
            "fixed top-[80px] left-1/2 -translate-x-1/2 w-[95%] rounded-lg  h-max max-h-[calc(100vh-64px)] overflow-y-auto backdrop-blur-md bg-primary-900/90 p-3 shadow-xl text-white flex flex-col items-start gap-6 transition-all duration-300 ease-in-out z-50",
            open
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-6 pointer-events-none"
          )}
        >
          <NavItem to="/" label="Home" icon={hat} onClick={closeMenu} />
          <NavItem to="/life" label="Life" icon={mystic} onClick={closeMenu} />
          <NavItem to="/poems" label="Poems" icon={flute} onClick={closeMenu} />
        </nav>
      </div>
    </div>
  );
}
