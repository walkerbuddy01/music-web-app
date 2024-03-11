"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-6 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-2 text-sm">
            <HoveredLink href="/course">All course </HoveredLink>
            <HoveredLink href="/course">basic music theory </HoveredLink>
            <HoveredLink href="/course">storywriting </HoveredLink>
            <HoveredLink href="/course">composition </HoveredLink>
            <HoveredLink href="/course">advance composition </HoveredLink>
          </div>
        </MenuItem>
        <Link href="/contact">
          <MenuItem setActive={setActive} active={active} item="Contact" />
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
