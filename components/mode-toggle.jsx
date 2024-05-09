"use client";

import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="border rounded-md w-6 h-6 flex items-center justify-center"
    >
      <span className="sr-only">Toggle mode</span>
      {theme !== "dark" ? (
        <span className="icon-[icon-park-solid--dark-mode]"></span>
      ) : (
        <span className="icon-[icon-park-solid--dark-mode]"></span>
      )}
    </button>
  );
}
