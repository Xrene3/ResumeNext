"use client";
import clsx from "clsx";
import { useState } from "react";
import ThemeSelection from "./widget-contents/theme-selection";

export default function WidgetContainer(){
    const [isWidgetOpen, setIsWidgetOpen ] = useState(false);

    return(
        <>
            <div className="absolute bottom-0 bg-accent w-full">
                Gif location
            </div>
            <div className="absolute fixed bottom-0 flex flex-col gap-2.5 right-0 p-5">
                
                <div className={clsx("selection bg-base-100 w-60 p-2 rounded-lg flex flex-col gap-2.5 shadow-md", isWidgetOpen ? "block" : "hidden")}>
                    <p className="text-center">Misc</p>

                    <ThemeSelection />
                    <div className="card card-sm bg-primary p-5">Spotify Section</div>
                </div>

                <div className="trigger flex justify-end">
                    <button className="btn bg-primary rounded-lg w-15 h-15 animate-pulse text-primary-content z-10" onClick={() => setIsWidgetOpen(!isWidgetOpen)}>
                        Click
                    </button>
                </div>
            </div>
        </>
    );
}