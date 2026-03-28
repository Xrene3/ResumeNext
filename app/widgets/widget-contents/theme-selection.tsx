import clsx from "clsx";
import { useEffect, useState, ReactNode } from "react";

type Props = {
    openModal: (content: ReactNode) => void;
};

export default function ThemeSelection({ openModal } : Props) {
    const themeGroups = [
        {
            label: "Light Themes",
            themes:[
            "light",
            "cupcake",
            "bumblebee",
            "emerald",
            "corporate",
            "lofi",
            "pastel",
            "fantasy",
            "wireframe",
            "cmyk",
            "acid",
            "winter",
            "nord",
            "silk",
            "lemonade",
            "autumn",
            "garden",
            "retro",
            "caramellatte",
        ]},
        {
        label: "Dark Themes",
        themes:[
            // "custom",
            "dark",
            "synthwave",
            "halloween",
            "forest",
            "black",
            "luxury",
            "dracula",
            "business",
            "night",
            "coffee",
            "dim",
            "sunset",
            "abyss",
            ]
        }
    ];
    const [currentTheme, setTheme] = useState("light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", currentTheme);
    }, [currentTheme]);

    const ThemeContent = (
        <>
            <p className="text-md text-center mb-5">All themes here was from 
                <a href="https://daisyui.com/" className="text-accent font-semibold underline" target="_blank">DaisyUI</a> 
            </p>
            <div className="flex flex-wrap gap-4  justify-center">
                {themeGroups.map((group) => (
                <div key={group.label}>
                <h3 className="text-center font-semibold mb-2">{group.label}</h3>
                <div className="flex flex-wrap gap-4 justify-center">
                    {group.themes.map((theme) => (
                    <div
                        key={theme}
                        data-theme={theme}
                        onClick={() => setTheme(theme)}
                    >
                        <div className={clsx("theme-container bg-base-300 p-2 flex w-45 rounded-lg justify-between cursor-pointer shadow-md")}>
                            <div className="description w-auto">
                                <p className="font-bold capitalize">{theme}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-1">
                                <div className="col-span-1 bg-primary w-5 h-5 rounded-md"></div>
                                <div className="col-span-1 bg-secondary w-5 h-5 rounded-md"></div>
                                <div className="bg-accent w-5 h-5 rounded-md"></div>
                                <div className="bg-neutral w-5 h-5 rounded-md"></div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            ))}
            </div>
        </>
    );

    return (
        <button
            className="btn btn-primary btn-sm flex justify-between"
            onClick={() => openModal(ThemeContent)}
        >
            <span>Themes</span>
            <span>{'>'}</span>
        </button>
    );
}
