// components/ParticleSystem.js

import { useEffect } from 'react';
import * as THREE from 'three';

const ParticleSystem = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    const container = document.getElementById("particle-container");
    container.appendChild(renderer.domElement);

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(50, 50, 50);
    scene.add(light);

    const particleCount = 200;
    const particles = new THREE.BufferGeometry();
    const positions = [];
    const material = new THREE.PointsMaterial({
      color: new THREE.Color(0x44aa44),
      size: 5,
      opacity: 0.7,
      transparent: true,
    });

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * 200 - 100;
      const y = Math.random() * 200 - 100;
      const z = Math.random() * 200 - 100;
      positions.push(x, y, z);
    }

    particles.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    const particleSystem = new THREE.Points(particles, material);
    scene.add(particleSystem);

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x44aa44,
      linewidth: 2,
      transparent: true,
      opacity: 0.5,
    });

    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const distance = new THREE.Vector3().fromArray(positions, i * 3).distanceTo(new THREE.Vector3().fromArray(positions, j * 3));
        if (distance < 50) {
          const geometry = new THREE.BufferGeometry().setFromPoints([ 
            new THREE.Vector3().fromArray(positions, i * 3), 
            new THREE.Vector3().fromArray(positions, j * 3)
          ]);
          const line = new THREE.Line(geometry, lineMaterial);
          scene.add(line);
        }
      }
    }

    let time = 0;
    let scale = 1;
    let scaleDirection = 1;
    let velocity = new THREE.Vector3(0.1, 0.1, 0.1);
    let lightPosition = new THREE.Vector3(50, 50, 50);

    function animate() {
      requestAnimationFrame(animate);

      time += 0.01;
      const hue = (Math.sin(time) + 1) / 2;
      material.color.setHSL(hue, 1, 0.5);

      scale += scaleDirection * 0.01;
      if (scale > 1.5 || scale < 0.5) {
        scaleDirection *= -1;
      }
      particleSystem.scale.set(scale, scale, scale);

      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += velocity.x;
        positions[i + 1] += velocity.y;
        positions[i + 2] += velocity.z;
      }

      velocity.x *= 1.01;
      velocity.y *= 1.01;
      velocity.z *= 1.01;

      lightPosition.x = 50 + Math.sin(Date.now() * 0.001) * 50;
      lightPosition.y = 50 + Math.cos(Date.now() * 0.001) * 50;
      light.position.set(lightPosition.x, lightPosition.y, 50);

      particles.attributes.position.needsUpdate = true;

      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += Math.random() * 0.1 - 0.05;
        positions[i + 1] += Math.random() * 0.1 - 0.05;
        positions[i + 2] += Math.random() * 0.1 - 0.05;
      }

      particleSystem.rotation.x += 0.01;
      particleSystem.rotation.y += 0.01;

      renderer.render(scene, camera);
    }

    camera.position.z = 500;
    animate();

    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });

    return () => {
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className='relative'>
    <h2 className='absolute top-16 left-1/2 -translate-x-1/2 text-[#A1C4FD] text-2xl italic text-center'>Take a deep breath... Relax, you seem to have had a long day!</h2>
      <div id="particle-container" style={{ width: '100%', height: '100vh', overflow: 'hidden' }} />
    </div>
  );
};

export default ParticleSystem;
