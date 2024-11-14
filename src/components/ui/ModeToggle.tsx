import {Button} from "@nextui-org/button"
import React from "react";
import {Moon, Sun} from "lucide-react";

export function ModeToggle() {
    const [theme, setThemeState] = React.useState<
        "theme-light" | "dark" | "system"
    >("theme-light")

    //Get current theme
    const getThemePreference = () => {
        if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
            return localStorage.getItem('theme');
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'theme-light';
    };



    React.useEffect(() => {
        const isDarkMode = document.documentElement.classList.contains("dark")
        setThemeState(isDarkMode ? "dark" : "theme-light")
    }, [])

    React.useEffect(() => {
        const isDark =
            theme === "dark" ||
            (theme === "system" &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        document.documentElement.classList[isDark ? "add" : "remove"]("dark")
    }, [theme])

    return (
        <Button
            isIconOnly={true}
            onPress={
                () => {
                    const currentTheme = getThemePreference();
                    const newTheme = currentTheme === "dark" ? "theme-light" : "dark";
                    setThemeState(newTheme);
                }
            }
        >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
            <Moon
                className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>

        </Button>
    )
}