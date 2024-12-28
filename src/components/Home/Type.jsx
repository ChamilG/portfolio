import React from 'react'
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
          options={{
            strings: [
              "DSE Undergraduate",
              "ML Developer",
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
