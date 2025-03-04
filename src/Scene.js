import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import PhoneCover from "./PhoneCover";
import "./App.css";

export default function Scene() {
  return (
    <div className="app">
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }} className='canvas-container'>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} />

      {/* Load Phone Cover with Texture */}
      <PhoneCover textureUrl="/logo512.png" />

      {/* Controls & Environment */}
      <OrbitControls />
      <Environment preset="city" />
    </Canvas>
    </div>
  );
}
