import React, { useState, useEffect } from 'react';

function Timer({ initialTime }) {
    // Convert initial time array to total seconds once when the component mounts
    const [time, setTime] = useState(initialTime);
    const [totalSeconds, setTotalSeconds] = useState(time[0] * 3600 + time[1] * 60 + time[2]);

    useEffect(() => {
        if (totalSeconds > 0) {
            // Set a timer to decrease the totalSeconds every second
            // setTimeout((parameter)=>{function,1000});
            const timerId = setTimeout(() => {
                setTotalSeconds(totalSeconds - 1);
            }, 1000);
            // clean up mechanism by unmounting the timerId so that there   is no memory leak
            return () => clearTimeout(timerId);
        }
        //  This array tells React to re-run the effect after every render where totalSeconds has changed.
    }, [totalSeconds]


);

    // Convert total seconds back to hours, minutes, seconds
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    // Update the time array if totalSeconds changes
    useEffect(() => {
        setTime([hours, minutes, seconds]);
    }, [totalSeconds]);

    return <h1>{hours} : {minutes} : {seconds} Time Left</h1>;
}

export default Timer;
