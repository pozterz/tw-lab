import { useEffect, useState } from "react";
import { Switch } from "antd";

interface Props {}

export const Dark = (props: Props) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const color = localStorage.getItem("theme");
    if (color === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="w-screen h-screen dark:bg-black">
      <div className="text-center py-12 text-6xl">
        <span className="dark:text-white text-black">DARK</span>&nbsp;
        <span className="dark:text-white text-black">MODE</span>
        <div>
          <Switch checkedChildren="DARK" unCheckedChildren="LIGHT" checked={theme === "dark"} onChange={(checked) => setTheme(checked ? "dark" : "light")} />
        </div>
      </div>
    </div>
  );
};
