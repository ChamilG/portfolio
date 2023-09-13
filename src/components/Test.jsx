import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { FaGuitar, FaMusic } from 'react-icons/fa';
import ReactHowler from 'react-howler';
import guitar from "../Assets/guitarsound.mp3"
export default function Test() {
    const [isPlaying, setIsPlaying] = useState(false);
    // Animation configuration
    const animationProps = useSpring({
      from: { transform: 'translate(500px, 600px)', opacity: 0 }, // Initial position
      to: { transform: 'translate(20px, 10px)',opacity: isPlaying ? 1 : 0 }, // Target position
      reset: true,

    });
    const onClickHandle = ()=>{
      setIsPlaying(true)
    }
    return (

      <div>
        <animated.div  
          onClick={() => setIsPlaying(true)}
        >
          <FaGuitar size={100} color='brown' />
        </animated.div>
        <animated.div
        style = {animationProps}>
          {<FaMusic size={30} color='black'/>}
        </animated.div>
        {isPlaying && (
          <ReactHowler
            src={guitar}
            playing={true}
            onEnd={() => setIsPlaying(false)}
          />
        )}
      </div>
    );
  
}
