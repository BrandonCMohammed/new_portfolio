"use client";
import { useEffect, useRef, useState } from "react";
import { Button, Typography, Container } from "@mui/material";
import { BlurLinear, GradientTwoTone } from "@mui/icons-material";

export default function HeroSection() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (typeof window === "undefined" || vantaEffect) return;

    const loadScripts = async () => {
      // Load three.js
      const threeScript = document.createElement("script");
      threeScript.src = "/libs/three.r134.min.js";
      threeScript.async = true;
      document.body.appendChild(threeScript);

      threeScript.onload = () => {
        // Load vanta.globe after three is ready
        const vantaScript = document.createElement("script");
        vantaScript.src = "/libs/vanta.globe.min.js";
        vantaScript.async = true;
        document.body.appendChild(vantaScript);

        vantaScript.onload = () => {
          // @ts-ignore
          if (window.VANTA && window.VANTA.GLOBE) {
            // @ts-ignore
            const effect = window.VANTA.GLOBE({
              el: vantaRef.current,
              mouseControls: false,
              touchControls: false,
              gyroControls: false,
              minHeight: 300.0,
              minWidth: 300.0,
              scale: 0.4,
              scaleMobile: 1.0,
              color: 0xa0a740,
              size: 0.7,
              backgroundColor: 0x0
            });
            setVantaEffect(effect);
          }
        };
      };
    };

    loadScripts();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <Container
      ref={vantaRef}
      sx={{
        height: "100vh",
        p: "80px",
        display: "flex",
        flexDirection: "column",
        gap: "72px",
        position: "relative",
        overflow: "hidden",
      }}
      maxWidth={false}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          zIndex: 1,
          position: "relative",
          color: "white",
        }}
      >
        <Typography variant="h2" align="left" sx={{ fontWeight: "400", color:"yellow" }}
        >
          Creative developer who
        </Typography>
        <Typography variant="h2" align="left" sx={{ fontWeight: "400" }}>
          helps you make
        </Typography>
        <Typography variant="h2" align="left" sx={{ fontWeight: "400" }}>
          ideas reality
        </Typography>
      </Container>

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          zIndex: 1,
          position: "relative",
          color: "white",
        }}
      >
        <Typography variant="h5">
          Hello, I am Brandon Mohammed
        </Typography>
        <Typography variant="h5">
          a Full Stack Developer
        </Typography>
      </Container>

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          zIndex: 1,
          position: "relative",
        }}
      >
        <Button variant="outlined" sx={{ color: "white", borderColor: "white" }}>
          Contact me
        </Button>
      </Container>
    </Container>
  );
}
