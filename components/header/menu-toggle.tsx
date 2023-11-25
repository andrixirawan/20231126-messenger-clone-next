import { Menu } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SiteLogoMobile } from "../site-logo";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MenuMobile } from "./menu-mobile";

export const MenuToggle = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary" size="icon" className="flex md:hidden">
          <Menu className="h-4 w-4" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex h-full w-4/5 flex-col gap-0 p-0 md:hidden"
      >
        {/* # SheetHeader */}
        <div className="flex h-16 items-center border-b p-4">
          <SiteLogoMobile />
        </div>

        {/* # SheetBody */}
        <MenuMobile />

        {/* # SheetFooter */}
        <div className="mt-auto grid grid-cols-2 gap-2 border-t p-4">
          <Link
            href="/"
            aria-label="Login"
            className={cn(
              buttonVariants({
                variant: "default",
                size: "default",
                className: "",
              }),
            )}
          >
            Login
          </Link>

          <Link
            href="/"
            aria-label="Register"
            className={cn(
              buttonVariants({
                variant: "outline",
                size: "default",
                className: "",
              }),
            )}
          >
            Register
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};
