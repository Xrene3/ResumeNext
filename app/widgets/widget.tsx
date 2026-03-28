"use client";
import clsx from "clsx";
import { useState, ReactNode } from "react";
import ThemeSelection from "./widget-contents/theme-selection";
import PeepsSelection from "./widget-contents/peeps-selection";

export default function WidgetContainer() {
    const [isWidgetOpen, setIsWidgetOpen] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<ReactNode | null>(null);

    return (
        <>
            <div className="fixed bottom-0 right-0 flex flex-col items-end gap-2.5 p-5">
                
                <div className={clsx(
                    "bg-base-100 w-60 p-2 rounded-lg flex flex-col gap-2.5 shadow-md transition-all duration-200",
                    isWidgetOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
                )}>

                    <p className="text-center">Misc</p>

                    <PeepsSelection />
                    <ThemeSelection openModal={setModalContent} />

                    <div className="card card-sm bg-primary p-5">
                        Spotify Section
                    </div>
                </div>

                <button
                    className="btn bg-primary rounded-lg w-15 h-15 animate-pulse text-primary-content z-10"
                    onClick={() => setIsWidgetOpen(!isWidgetOpen)}
                >
                    Click
                </button>
            </div>

            {modalContent && (
                <div className="modal modal-open">
                    <div className="modal-box max-w-5xl">
                        {modalContent}
                    </div>
                    <div
                        className="modal-backdrop"
                        onClick={() => setModalContent(null)}
                    />
                </div>
            )}
        </>
    );
}
