export function AboutMeOverview(){
    return(
        <>
            <div className="">
                <p className="text-4xl">
                    Hi! I'm <span className="text-accent font-bold">Ryan Clark Geneveo</span>
                    
                </p>
            </div>
        </>
    )
}

export function EducationalBackground(){
    return (
        <>

        </>
    );
}

export default function FullPage(){
    return(
        <>
            <AboutMeOverview />
            <EducationalBackground />
        </>
    );
}

