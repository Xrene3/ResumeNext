import clsx from "clsx";
import { useEffect, useState } from "react";


function themeSelection(){
    const [isThemeConfigOpen, setThemeConfigOpen] = useState(false);
    const themes = [
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
    ];
    const [currentTheme, setTheme] = useState("light")
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", currentTheme)
    }, [currentTheme])
    return(
        <>
            {/* <div className={clsx("selection top-0 inset-0 z-10 bg-base-100/30 w-full h-full flex justify-center items-center", isThemeConfigOpen ? "fixed" : "hidden")}
                onClick={ () => setThemeConfigOpen(false) }>
                <div className="max-w-6xl rounded-lg bg-secondary" onClick={ (e) => { e.stopPropagation() } }>
                    Yoyoyoyoyyo
                </div>
            </div>
            <button className="w-full btn btn-accent" onClick={ () => setThemeConfigOpen(!isThemeConfigOpen)}>
                Themes
            </button> */}
            {/* The button to open modal */}
            <label htmlFor="my_modal_7" className="btn btn-primary btn-sm flex justify-between">
                <span>Themes</span>
                <span> {'>'} </span>
            </label>
            
            <input type="checkbox" id="my_modal_7" className="modal-toggle" />

            <div className="modal" role="dialog">
                
                <div className="modal-box card max-w-5xl shadow-md shadow-accent/30">
                    <p className="text-md text-center mb-5">All themes here was from 
                        <a href="https://daisyui.com/" className="text-accent font-semibold underline" target="_blank">DaisyUI</a> 
                    </p>
                    <div className="flex flex-wrap gap-4  justify-center">
                        {themes.map((theme)=> (
                            <div data-theme={theme} key={theme} onClick={ () => setTheme(theme) }>
                                <div className={clsx("theme-container bg-base-300 p-2 flex w-45 rounded-lg justify-between cursor-pointer",theme === currentTheme && "ring-2 ring-accent/60")}>
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
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
            </div>

            
        </>
    );
}

export default themeSelection;