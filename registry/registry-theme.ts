import type { Registry } from "@/registry/schema";

export const theme: Registry = [
  {
    name: "theme-cs16",
    type: "registry:theme",
    cssVars: {
      light: {
        background: "hsl(99, 13%, 31%)",
        foreground: "hsl(67, 12%, 86%)",
        card: "hsl(99, 13%, 31%)",
        "card-foreground": "hsl(67, 12%, 86%)",
        popover: "hsl(99, 13%, 31%)",
        "popover-foreground": "hsl(67, 12%, 86%)",
        primary: "hsl(99, 13%, 31%)",
        "primary-foreground": "hsl(0 0% 98%)",
        secondary: "hsl(0 0% 96.1%)",
        "secondary-foreground": "hsl(0 0% 9%)",
        muted: "hsl(92, 12%, 25%)",
        "muted-foreground": "hsl(93, 10%, 59%)",
        accent: "hsl(92, 12%, 25%)",
        "accent-foreground": "hsl(53, 48%, 40%)",
        destructive: "hsl(0 84.2% 60.2%)",
        "destructive-foreground": "hsl(0 0% 98%)",
        border: "hsl(76, 14%, 15%)",
        input: "hsl(76, 14%, 15%)",
        ring: "hsl(0 0% 3.9%)",
        radius: "0rem",
      },
    },
  },
];
