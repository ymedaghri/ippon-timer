"use client"

import { useState, useEffect, useRef } from 'react';

const Timer = ({ time }: { time: number }) => {
    const [timeLeft, setTimeLeft] = useState<number>(time);
    const [isSoundOn, setIsSoundOn] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null)

    useEffect(() => {
        if (timeLeft <= 0) {
            if (isSoundOn && audioRef.current) {
                audioRef.current.play()
            }
            setIsSoundOn(true)
            return
        }

        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeLeft]);

    const formatTime = (time: number) => {
        const hrs = Math.floor(time / 3600);
        const mins = Math.floor((time % 3600) / 60);
        const secs = time % 60;

        return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };
    /*
      
        bg-black bg-opacity-20 
        font-mono border rounded-full p-4 sm:p-6 md:p-8 
    */
    return (
        <h1 className={`text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] xl:text-[12rem] bg-black bg-opacity-20 font-mono border rounded-full p-4 sm:p-6 md:p-8 
        ${(timeLeft > 0) && " text-white "}
        ${(timeLeft <= 0) && " animate-tilt text-red-600"}
        
        `}>
            {timeLeft > 0 && formatTime(timeLeft)}
            {timeLeft <= 0 && "FINISHED"}
            {!isSoundOn && (
                <button onClick={() => setIsSoundOn(!isSoundOn)}>
                    🔇
                </button>
            )}
            <audio hidden
                controls
                src="/gong.mp3"
                ref={audioRef}>
                Your browser does not support the
                <code>audio</code> element.
            </audio>
        </h1>
    );
}

export default Timer;
