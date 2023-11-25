import Link from "next/link";
import { siteNavHeader } from "@/config/site";
import { ChevronDown, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export const MenuDesktop = () => {
  return (
    <nav className="hidden md:flex">
      <ul className="flex items-center justify-center gap-1">
        {siteNavHeader?.map((item) => (
          <li key={item.id}>
            {item.isGroup ? (
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex justify-between gap-1 text-foreground"
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  asChild
                  className={cn(
                    "hidden w-max gap-1 rounded-lg p-2 md:flex md:flex-col",
                  )}
                >
                  <ul className="">
                    {item.links?.map((item) => (
                      <li key={item.id}>
                        <LinkItem
                          label={item.label}
                          desc={item.desc}
                          icon={item.icon}
                          url={item.url}
                        />
                      </li>
                    ))}
                  </ul>
                </PopoverContent>
              </Popover>
            ) : (
              <Link
                href={item.url}
                aria-label={item.label}
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                    size: "default",
                    className: "text-foreground",
                  }),
                )}
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Components
type NavPopoverProps = {
  title: string;
};

const LinkPopover = ({ title }: NavPopoverProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="flex justify-between gap-1">
          {title}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="grid w-60 gap-1 rounded-lg bg-slate-100 p-1">
        <Button variant="outline">Omnichannel Chat</Button>
        <Button variant="outline">In-App Chat SDK</Button>
      </PopoverContent>
    </Popover>
  );
};

type LinkItemProps = {
  label: string;
  desc: string;
  icon: LucideIcon;
  url: string;
};

const LinkItem = ({ label, desc, icon: Icon, url }: LinkItemProps) => {
  return (
    <Link
      href={url}
      aria-label={label}
      className={cn(
        buttonVariants({
          variant: "ghost",
          size: "default",
          className:
            "flex h-full w-full items-start justify-start gap-2 whitespace-normal border-none text-foreground",
        }),
      )}
    >
      <Icon className="h-4 w-4 shrink-0 text-destructive" />
      <div className="flex flex-col">
        <span className="text-sm">{label}</span>
        {!desc && (
          <span className="text-xs font-normal opacity-75">{desc}</span>
        )}
      </div>
    </Link>
  );
};
