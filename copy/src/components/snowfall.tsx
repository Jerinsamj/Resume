"use client";

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

const Snowfall = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const options = {
    autoPlay: true,
    background: {
      color: {
        value: "transparent",
      },
    },
    fullScreen: {
      enable: true,
      zIndex: 50,
    },
    interactivity: {
      events: {
        onClick: {
          enable: false,
        },
        onHover: {
          enable: false,
        },
      },
    },
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "image",
        image: {
            src: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiczFImeudRTKvhNFjmxonWc2vEXmmEy-epU3loqjw_7NRPmAzldq73v4YPHoPYFokPKSuRgecSj10hZKx1cX0k7UKtWtzkbCoGUje4FJG6ytInLi3FhilziyEXw4YnjOPNKMkAqLsc1HdP1UHq-26RWxM8cYuVf94srre2IDhwX_tusxN-iXLfoe8h6wTe/s500/snowflake.png',
            width: 500,
            height: 500,
        }
      },
      opacity: {
        value: { min: 0.3, max: 0.8 },
        animation: {
          enable: true,
          speed: 1,
          sync: false,
        },
      },
      size: {
        value: { min: 5, max: 15 },
      },
      move: {
        enable: true,
        speed: { min: 1, max: 3 },
        direction: "bottom",
        straight: false,
        outModes: {
            default: "out",
        },
      },
      rotate: {
        value: {
            min: 0,
            max: 360,
        },
        direction: "random",
        animation: {
            enable: true,
            speed: 5,
        },
      }
    },
  };

  return (
    <Particles
        id="tsparticles"
        init={particlesInit}
        options={options as any}
      />
  );
};

export default Snowfall;
