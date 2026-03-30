import clsx from 'clsx';
import React from 'react'
import Wave from 'react-wavify'
export default function WaveContainer(){

    const waves = [
        {
        color: "#c4b2ec",
        options: {
        height: 10,
        amplitude: 10,
        speed: 0.15,
        points: 3,
        },
    },
    {
        color: "#8d77c0",
        options: {
        height: 20,
        amplitude: 25,
        speed: 0.15,
        points: 3,
        },
    },
    {
        color: "#7a66b3",
        options: {
        height: 30,
        amplitude: 30,
        speed: 0.12,
        points: 4,
        },
    },
    
    ];

    return(
        <>
            {waves.map((wave, index) => (
                <Wave
                key={index}
                className="absolute bottom-0 z-0"
                fill={wave.color}
                paused={false}
                options={wave.options}
                />
            ))}
        </>
    );
}