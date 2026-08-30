import { useEffect, useRef } from "react";

const ThreeVantaComponent = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    let effect;

    const loadVanta = async () => {
      // Load Three.js
      const threeScript = document.createElement("script");
      threeScript.src =
        "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js";
      threeScript.async = true;

      threeScript.onload = () => {
        // Load Vanta Waves
        const vantaScript = document.createElement("script");
        vantaScript.src =
          "https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.waves.min.js";
        vantaScript.async = true;

        vantaScript.onload = () => {
          if (window.VANTA && window.VANTA.WAVES) {
            effect = window.VANTA.WAVES({
  el: vantaRef.current,

  mouseControls: true,
  touchControls: true,
  gyroControls: false,

  minHeight: 200,
  minWidth: 200,

  scale: 1,
  scaleMobile: 1,

  // 🎨 Colors
  color: 0x0b0f14,

  // ✨ Wave settings
  shininess: 35,
  waveHeight: 12,
  waveSpeed: 0.7,
  zoom: 0.9,

            });

            console.log("VANTA WAVES WORKING");
          } else {
            console.error("VANTA.WAVES not found");
          }
        };

        document.body.appendChild(vantaScript);
      };

      document.body.appendChild(threeScript);
    };

    loadVanta();

    return () => {
      if (effect) {
        effect.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
      }}
    />
  );
};

export default ThreeVantaComponent;