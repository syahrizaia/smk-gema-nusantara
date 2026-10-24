import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, ContactShadows, Text } from "@react-three/drei";
import * as THREE from "three";

// High-precision procedural canvas texture for brushed titanium & circuit micro-details
function createBrushedMetalTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#888888";
  ctx.fillRect(0, 0, 512, 512);

  for (let i = 0; i < 4000; i++) {
    const y = Math.random() * 512;
    const length = 30 + Math.random() * 120;
    const x = Math.random() * 512;
    const alpha = 0.05 + Math.random() * 0.12;
    ctx.strokeStyle = Math.random() > 0.5 ? `rgba(255,255,255,${alpha})` : `rgba(0,0,0,${alpha})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + length, y);
    ctx.stroke();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  return texture;
}

function createCircuitTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#050b14";
  ctx.fillRect(0, 0, 512, 512);

  ctx.strokeStyle = "rgba(56, 189, 248, 0.65)";
  ctx.lineWidth = 3;
  ctx.lineCap = "round";

  for (let i = 0; i < 18; i++) {
    const startX = (i % 6) * 80 + 30;
    const startY = Math.floor(i / 6) * 160 + 20;
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX + 40, startY + 40);
    ctx.lineTo(startX + 90, startY + 40);
    ctx.stroke();

    ctx.fillStyle = "#38bdf8";
    ctx.beginPath();
    ctx.arc(startX + 90, startY + 40, 5, 0, Math.PI * 2);
    ctx.fill();
  }

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

// Precision Machined Gear (Teknik Kendaraan Ringan / MMKI Kaizen Excellence)
function PrecisionGear({
  radius = 1.6,
  teeth = 18,
  depth = 0.28,
  holeRadius = 0.65,
  color = "#94a3b8",
  rotationSpeed = 0.4,
  position = [0, 0, 0],
  reverse = false,
}) {
  const gearRef = useRef();
  const brushedTexture = useMemo(() => createBrushedMetalTexture(), []);

  // Construct high-poly gear geometry using 2D shape extrusion
  const gearGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    const toothHeight = 0.22;
    const toothAngle = (Math.PI * 2) / teeth;
    const halfTooth = toothAngle / 4;

    for (let i = 0; i < teeth; i++) {
      const angle = i * toothAngle;
      const rInner = radius;
      const rOuter = radius + toothHeight;

      const p1 = [Math.cos(angle - halfTooth * 1.5) * rInner, Math.sin(angle - halfTooth * 1.5) * rInner];
      const p2 = [Math.cos(angle - halfTooth * 0.8) * rOuter, Math.sin(angle - halfTooth * 0.8) * rOuter];
      const p3 = [Math.cos(angle + halfTooth * 0.8) * rOuter, Math.sin(angle + halfTooth * 0.8) * rOuter];
      const p4 = [Math.cos(angle + halfTooth * 1.5) * rInner, Math.sin(angle + halfTooth * 1.5) * rInner];

      if (i === 0) shape.moveTo(p1[0], p1[1]);
      else shape.lineTo(p1[0], p1[1]);
      shape.lineTo(p2[0], p2[1]);
      shape.lineTo(p3[0], p3[1]);
      shape.lineTo(p4[0], p4[1]);
    }
    shape.closePath();

    // Center bore hole
    const holePath = new THREE.Path();
    holePath.absarc(0, 0, holeRadius, 0, Math.PI * 2, true);
    shape.holes.push(holePath);

    // Weight-reduction cutouts (spokes)
    const spokeCount = 6;
    for (let s = 0; s < spokeCount; s++) {
      const spokeAngle = (s * Math.PI * 2) / spokeCount;
      const spokeDist = (radius + holeRadius) * 0.52;
      const spokeHole = new THREE.Path();
      spokeHole.absarc(
        Math.cos(spokeAngle) * spokeDist,
        Math.sin(spokeAngle) * spokeDist,
        0.18,
        0,
        Math.PI * 2,
        true
      );
      shape.holes.push(spokeHole);
    }

    const extrudeSettings = {
      steps: 2,
      depth: depth,
      bevelEnabled: true,
      bevelThickness: 0.04,
      bevelSize: 0.04,
      bevelOffset: 0,
      bevelSegments: 8,
    };

    return new THREE.ExtrudeGeometry(shape, extrudeSettings);
  }, [radius, teeth, depth, holeRadius]);

  useFrame((_, delta) => {
    if (gearRef.current) {
      gearRef.current.rotation.z += (reverse ? -1 : 1) * delta * rotationSpeed;
    }
  });

  return (
    <mesh ref={gearRef} geometry={gearGeometry} position={position} castShadow receiveShadow>
      <meshStandardMaterial
        color={color}
        metalness={0.92}
        roughness={0.2}
        map={brushedTexture}
        bumpMap={brushedTexture}
        bumpScale={0.02}
        envMapIntensity={1.8}
      />
    </mesh>
  );
}

// Tech Circuit Core / Workstation Module (Manajemen Perkantoran Digital & SIAP)
function TechWorkstationCore({ position = [0, 0, 0] }) {
  const coreRef = useRef();
  const ledRef = useRef();
  const circuitTexture = useMemo(() => createCircuitTexture(), []);

  useFrame((state) => {
    if (coreRef.current) {
      coreRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
    if (ledRef.current) {
      const pulse = (Math.sin(state.clock.elapsedTime * 3) + 1) * 0.5;
      ledRef.current.material.opacity = 0.5 + pulse * 0.5;
    }
  });

  return (
    <group ref={coreRef} position={position}>
      {/* Curved Optical Glass Chassis */}
      <mesh position={[0, 0, 0.4]} castShadow>
        <cylinderGeometry args={[1.1, 1.1, 0.6, 64, 1, false, 0, Math.PI]} />
        <meshPhysicalMaterial
          color="#38bdf8"
          transmission={0.88}
          opacity={1}
          transparent
          roughness={0.08}
          ior={1.52}
          thickness={0.8}
          specularIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.05}
        />
      </mesh>

      {/* Internal High-Speed Micro Circuit Bus */}
      <mesh position={[0, 0, 0.2]}>
        <boxGeometry args={[1.6, 0.5, 0.05]} />
        <meshStandardMaterial
          map={circuitTexture}
          roughness={0.3}
          metalness={0.8}
          emissive="#0284c7"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* Micro Fiber-Optic Status LED */}
      <mesh ref={ledRef} position={[0.7, 0.2, 0.45]}>
        <sphereGeometry args={[0.06, 32, 32]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.9} />
      </mesh>
      <pointLight position={[0.7, 0.2, 0.5]} color="#38bdf8" intensity={1.5} distance={1.2} />
    </group>
  );
}

// Academic Crystal Emblem & Floating Knowledge Monolith
function AcademicCrystalEmblem({ position = [0, 0, 0] }) {
  const crystalRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();

  useFrame((state, delta) => {
    if (crystalRef.current) {
      crystalRef.current.rotation.y += delta * 0.6;
      crystalRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.8) * 0.15;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.35;
      ring1Ref.current.rotation.y += delta * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.4;
      ring2Ref.current.rotation.z += delta * 0.25;
    }
  });

  return (
    <group position={position}>
      {/* Central High-Refraction Crystal Octahedron */}
      <mesh ref={crystalRef} castShadow>
        <octahedronGeometry args={[0.75, 2]} />
        <meshPhysicalMaterial
          color="#60a5fa"
          transmission={0.92}
          transparent
          opacity={1}
          roughness={0.04}
          ior={1.65}
          thickness={1.4}
          dispersion={0.05}
          clearcoat={1}
          clearcoatRoughness={0.05}
          emissive="#1d4ed8"
          emissiveIntensity={0.25}
        />
      </mesh>

      {/* Inner Glowing Core */}
      <mesh>
        <sphereGeometry args={[0.22, 32, 32]} />
        <meshBasicMaterial color="#93c5fd" />
      </mesh>
      <pointLight color="#38bdf8" intensity={3} distance={2.5} />

      {/* Anodized Gold & Titanium Gimbal Orbit Rings */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[1.25, 0.035, 64, 128]} />
        <meshStandardMaterial
          color="#f59e0b"
          metalness={0.95}
          roughness={0.15}
          emissive="#d97706"
          emissiveIntensity={0.15}
        />
      </mesh>

      <mesh ref={ring2Ref}>
        <torusGeometry args={[1.5, 0.035, 64, 128]} />
        <meshStandardMaterial
          color="#38bdf8"
          metalness={0.95}
          roughness={0.15}
          emissive="#0284c7"
          emissiveIntensity={0.2}
        />
      </mesh>
    </group>
  );
}

// Scene Root with Mouse Parallax & Dynamic Studio Lights
function SceneComposition() {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      // Smooth cursor parallax
      const targetX = (state.pointer.x * Math.PI) / 10;
      const targetY = (-state.pointer.y * Math.PI) / 14;
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetY, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Academic Centerpiece */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
        <AcademicCrystalEmblem position={[0, 0.1, 0.2]} />
      </Float>

      {/* Primary Vocational Gear (Teknik Kendaraan Ringan) */}
      <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.6}>
        <PrecisionGear
          radius={1.7}
          teeth={20}
          depth={0.24}
          holeRadius={0.7}
          color="#cbd5e1"
          rotationSpeed={0.35}
          position={[-1.6, -0.6, -0.5]}
        />
      </Float>

      {/* Interlocking Secondary Precision Gear */}
      <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.6}>
        <PrecisionGear
          radius={1.1}
          teeth={13}
          depth={0.2}
          holeRadius={0.45}
          color="#38bdf8"
          rotationSpeed={0.54}
          position={[1.5, 0.9, -0.6]}
          reverse={true}
        />
      </Float>

      {/* Modern Tech Core (Manajemen Perkantoran Digital & SIAP) */}
      <Float speed={2.4} rotationIntensity={0.4} floatIntensity={0.9}>
        <TechWorkstationCore position={[1.4, -0.9, 0.3]} />
      </Float>
    </group>
  );
}

// Main Client Component with High-Performance Canvas Settings
const SmkGemaNusantaraScene = ({ className = "w-full h-full" }) => {
  return (
    <div className={`relative ${className}`}>
      <Canvas
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 6.2], fov: 45 }}
      >
        <Suspense fallback={null}>
          {/* Key Studio & Rim Lights */}
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 8, 6]} intensity={1.8} color="#ffffff" castShadow />
          <directionalLight position={[-6, -4, -4]} intensity={1.2} color="#2563eb" />
          <spotLight
            position={[0, 6, 4]}
            intensity={2.2}
            angle={0.6}
            penumbra={0.8}
            color="#38bdf8"
          />

          <SceneComposition />

          {/* Contact Shadows for Realistic Depth */}
          <ContactShadows
            position={[0, -2.4, 0]}
            opacity={0.65}
            scale={8}
            blur={2.4}
            far={4}
            color="#0284c7"
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SmkGemaNusantaraScene;
