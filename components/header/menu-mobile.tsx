import Link from "next/link";

import { siteNavHeader } from "@/config/site";

import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { SheetClose } from "../ui/sheet";

export const MenuMobile = () => {
  return (
    <nav className="overflow-y-auto py-4">
      <Accordion type="single" collapsible>
        {siteNavHeader?.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id.toString()}
            className="border-none"
          >
            {item.isGroup ? (
              <>
                <AccordionTrigger className="h-10 px-4 py-3 font-body text-sm font-medium text-foreground hover:bg-accent hover:no-underline">
                  {item.label}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid">
                    {item.links?.map((item) => (
                      <li key={item.id}>
                        <LinkItem
                          label={item.label}
                          url={item.url}
                          icon={item.icon}
                        />
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </>
            ) : (
              <LinkItem label={item.label} url={item.url} />
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </nav>
  );
};

// Components
type LinkItemProps = {
  label: string;
  url: string;
  icon?: LucideIcon;
};
const LinkItem = ({ label, url, icon: Icon }: LinkItemProps) => {
  return (
    <SheetClose asChild>
      <Link
        href={url}
        aria-label={label}
        className={cn(
          buttonVariants({
            variant: "ghost",
            size: "default",
            className:
              "flex h-max w-full justify-start rounded-none py-3 text-foreground hover:bg-accent",
          }),
        )}
      >
        {Icon && <Icon className="mr-2 h-4 w-4 text-destructive" />}
        {label}
      </Link>
    </SheetClose>
  );
};
