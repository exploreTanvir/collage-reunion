import { useEffect, useState } from "react";
import "./hero.css";

const Hero = (props) => {
  const initialTime = 172800; // Starting countdown (2 days in seconds)
  const [time, setTime] = useState(() => {
    // Check if there's a saved time in localStorage
    const savedTime = localStorage.getItem('countdown');
    return savedTime ? parseInt(savedTime, 10) : initialTime;
  });

  useEffect(() => {
    if (time > 0) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1); // Decrement time by 1 every second
      }, 1000);

      // Save time to localStorage whenever it updates
      localStorage.setItem('countdown', time - 1);

      // Cleanup interval on component unmount
      return () => clearInterval(interval);
    } else {
      // Clear countdown from localStorage when it hits 0
      localStorage.removeItem('countdown');
    }
  }, [time]);

  // Convert time into days, hours, minutes, and seconds
  const days = Math.floor(time / (24 * 3600));
  const hours = Math.floor((time % (24 * 3600)) / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  return (
    <div className={props.cName}>
      
        <img alt="heroImg" src={props.heroImg}/>
        <div className="heroText">
            <h1>{props.title}</h1>
            <div>
      
    </div>
            <p>{props.text}</p>
            <a href={props.url} className={props.btnClass}>{props.btnName}</a>
            <div>
      <h1>সময় বাকি:</h1>
      <h1>
        {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
      </h1>
      {time === 0 && <p>Time's up!</p>}
    </div>
        </div>

        
    </div>
  )
}

export default Hero