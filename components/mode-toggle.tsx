"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { Sun, Moon } from "lucide-react";

import { Button } from "./ui/button";

export function ModeToggle() {
  const [isMounted, setIsMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    theme === "light";
  }, [theme]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Button
        variant="secondary"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? (
          <Sun className="h-4 w-4" />
        ) : (
          <Moon className="h-4 w-4" />
        )}
      </Button>
    </>
  );
}
