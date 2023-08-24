import React from 'react'
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
          options={{
            strings: [
              "Data Science Undergraduate",
              "Machine Learning Undergraduate",
              "Software Developer",
              "Freelancer",
            ],
            autoStart: true,
            loop: true,
            delay:70,
            deleteSpeed: 50,
          }}
        />
      );
    }

export default Type
