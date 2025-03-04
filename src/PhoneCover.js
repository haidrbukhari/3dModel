import React from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

export default function PhoneCover({ textureUrl }) {
  const { scene, nodes } = useGLTF("/iPhone16.glb");

  // Load the texture
  const texture = useLoader(THREE.TextureLoader, textureUrl);
  texture.flipY = false; 
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
 
  
  console.log("Mesh Names:", Object.keys(nodes));
  // Set texture scale (increase numbers to make it smaller, decrease to make it bigger)
  texture.repeat.set(1,2); // Adjust these values as needed
  
   // Adjust offset to move the texture to the middle
  texture.offset.set(1, 1); // Adjust these values as needed
  
  if (nodes.Mesh001) {
    nodes.Mesh001.material = new THREE.MeshStandardMaterial({ map: texture });
  }

  return <primitive object={scene} scale={0.027} position={[0, -0.2, 0]} rotation={[0, Math.PI / 4, 0]} /> 
  
}
