"use client";

import { useCallback } from "react"; //returns a memoized version of the callback function
import type { Container, Engine } from "tsparticles-engine"; // for TS
import Particles from "react-tsparticles";

// load a lightweight version of the particles engine, which includes basic functionalities without the full bundle size.
import { loadSlim } from "tsparticles-slim"; // Make sure to install "tsparticles-slim" package.

const ParticlesBackground = () => {
  //Particle Initialization
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadSlim(engine); // Loads the slim version of the particles engine, allowing you to use particles without all the features of the full library.
  }, []);

  //func gets called after the particles have been successfully loaded.
  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      console.log(container);
    },
    []
  );

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: -5, // Set negative z-index
      }}
      options={{
        background: {
          color: {
            value: "transparent", // Set background to transparent
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "grab", // Change mode to grab for a more interactive effect
              parallax: { enable: true, force: 60, smooth: 10 },
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 5,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            grab: {
              distance: 150,
              line_linked: {
                opacity: 1,
              },
            },
          },
        },
        particles: {
          color: {
            value: [
              "#FF1461", // Pink
              "#18FF92", // Green
              "#5A87FF", // Blue
              "#FBF38C", // Yellow
              "#FF61C0", // Light Pink
            ], // Use an array of colors for particles
          },
          links: {
            color: "#ffffff", // White link lines
            distance: 100,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true, // Random movement for a dynamic effect
            speed: 1, // Slow down the speed slightly
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 25, // Halved the number of particles from 100 to 50
          },
          opacity: {
            value: 0.7, // Make particles more opaque
          },
          shape: {
            type: ["circle", "triangle", "star"], // Add different shapes
          },
          size: {
            value: { min: 2, max: 6 }, // Increase size range
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
