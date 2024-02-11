import React, { useEffect, useState } from "react";

const Countdown = () => {
    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');
    const [countdownEnded, setCountdownEnded] = useState(false);

    useEffect(() => {
        const myBirthday = new Date('Feb 14, 2024 00:00:00').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = myBirthday - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval);
                setCountdownEnded(true);
            } else {
                setDays(days);
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className="countdown">
           
            {countdownEnded ? (
               <div className="annie">
               <ul>
                 <li>Happy Birthday Annie :3 💕🎉 I Love You and happy 19th birthday my wonderful girlfriend! 🎂</li>
                 <li>You fill my life with joy, love, and endless happiness. 💖</li>
                 <li>This day is not only special for you, but it is THE BEST DAY OF MY LIFE AS YOU THE LOVE OF MY LIFE WAS BORN ON THIS DAY</li>
                 <li>On this special day, may all your dreams come true and may your smile shine brighter than ever before! 🌟</li>
                 <li>Since this is your birthday you're my lil princess for the next 24 hours, this means that. 🎈</li>
                 <li>YOUR WISH IS MY COMMAND AND I SHALL DO AS YOU PLEASE AND I WOULD! 🥳</li>
                 <li>I AM YOUR GENIE FOR TODAY AND I WOULD GRANT YOU ANY THREE WISHES YOU WANT ME TO DO FOR YOU :3</li>
                 <li>Alright enough of that now, listen up cause I've got a lot to tell you</li>
                 <li>I LOVE YOU MORE THAN ANYTHING IN THIS WORLD GET THIS IN YOUR SILLY LITTLE HEAD MY LIL GOOSIE</li>
                 <li>You're the most kind amazing gentle beautiful cute GREEN-EYED girl I've ever met and every time I see you MY JAW DROPS CAUSE HAWT DAYUM U THICC GURL</li>
                 <li>Every day that I wake up I feel so grateful to have you in my life in fact YOU ARE MY LIFE !</li>
                 <li>THANK YOU FOR BEING THE AWESOME ANNIE YOU ARE TO ME EVERYDAY MY LIL KITTY KITTEN I LOVE YOU MY LITTLE DOVE </li>
                 <li>I HOPE YOU STAY THIS AMAZING FOR THE REST OF YOUR LIFE AND I HOPE I GET TO CELEBRATE THE REST OF ALL YOUR BIRTHDAYS WITH YOU MY LOVE CAUSE IT IS AN HONOUR FOR ME</li>
                 <li>YOU DESERVE ALL THE HAPPINESS IN THIS WORLD MY KITTY KITTEN I LOVE YOU SHO SHO MUCHH</li>
                 <li>Love you to the moon and back! 🌙💕</li>
                 <li>With Much Much Love Your HUSBAND (KIFAL)</li>
               </ul>
               <a href="https://anniemanniebday.netlify.app/">Click me my pretty lil kittykitten</a>
             </div>
             
            ) : (
                <>
                 <h1 className='font-face-rk'>Time Left till Annie Mannie's Birthday</h1>
                    <div className="countdown-item">
                        <div className="countdown-item-value">{days}</div>
                        <div className="countdown-item-label">Days</div>
                    </div>
                    <span>:</span>
                    <div className="countdown-item">
                        <div className="countdown-item-value">{hours}</div>
                        <div className="countdown-item-label">Hours</div>
                    </div>
                    <span>:</span>
                    <div className="countdown-item">
                        <div className="countdown-item-value">{minutes}</div>
                        <div className="countdown-item-label">Minutes</div>
                    </div>
                    <span>:</span>
                    <div className="countdown-item">
                        <div className="countdown-item-value">{seconds}</div>
                        <div className="countdown-item-label">Seconds</div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Countdown;
