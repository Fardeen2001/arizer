"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

const NavLink = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const pathName = usePathname();
  const isActive =
    pathName === href || (href !== "/" && pathName.startsWith(href));
  return (
    <Link
      href={href}
      className={cn(
        className,
        "transition-colors duration-200 text-sm hover:text-rose-500 text-gray-600",
        isActive && "text-rose-500"
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
