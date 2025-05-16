
import * as React from "react";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon, MonitorIcon } from "lucide-react";
import { useTheme } from "./ui/theme-provider";
// import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  const iconMap: Record<string, React.JSX.Element> = {
    light: <SunIcon className="h-[1.2rem] w-[1.2rem]" />,
    dark: <MoonIcon className="h-[1.2rem] w-[1.2rem]" />,
    // system: <MonitorIcon className="h-[1.2rem] w-[1.2rem]" />,
  };

  React.useEffect(() => {
    setMounted(true);
    if (theme === "system") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, [theme, setTheme]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  if (!mounted) return null;

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme}>
      {(theme && iconMap[theme]) || (
        <MonitorIcon className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">تغییر تم</span>
    </Button>
  );
}