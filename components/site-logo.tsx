"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { SheetClose } from "./ui/sheet";

export const SiteLogo = () => {
  return (
    <Link href="/" aria-label="Home">
      <Image
        priority
        aria-hidden
        src="/logo-dark.svg"
        alt="Logo"
        width={40}
        height={40}
        className="h-6 w-auto"
      />
    </Link>
  );
};

export const SiteLogoMobile = () => {
  const { theme } = useTheme();

  return (
    <SheetClose asChild>
      <Link href="/" aria-label="Home">
        <Image
          priority
          aria-hidden
          src={theme === "light" ? "/logo-dark.svg" : "/logo-white.svg"}
          alt="Logo"
          width={40}
          height={40}
          className="h-6 w-auto"
        />
      </Link>
    </SheetClose>
  );
};

export const SiteLogoMode = () => {
  const { theme } = useTheme();

  return (
    <Link href="/" aria-label="Home">
      <Image
        priority
        aria-hidden
        src={theme === "light" ? "/logo-dark.svg" : "/logo-white.svg"}
        alt="Logo"
        width={40}
        height={40}
        className="h-6 w-auto"
      />
    </Link>
  );
};
