// import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';

// import textureImageUrl from '../image/map.jpg'; // مسیر تصویر تکسچر


// const ThreePic = () => {
//     const canvasRef = useRef(null);
  
//     useEffect(() => {
//       const canvas = canvasRef.current;
//       const scene = new THREE.Scene();
//       const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
//       const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
//       renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  
//       // تعریف تکسچر از تصویر
//       const textureLoader = new THREE.TextureLoader();
//       const texture = textureLoader.load(textureImageUrl);
  
//       // تعریف متریال با استفاده از تکسچر
//       const material = new THREE.MeshBasicMaterial({ map: texture });
  
//       // اضافه کردن مدل سه‌بعدی باکس
//       const geometry = new THREE.BoxGeometry();
//       const box = new THREE.Mesh(geometry, material);
//       scene.add(box);
  
//       // رندر اسکن
//       const animate = () => {
//         requestAnimationFrame(animate);
//         renderer.render(scene, camera);
//       };
//       animate();
//     }, []);
  
//     return <canvas ref={canvasRef} className='bg-slate-200 w-screen'/>;
//   };

// export default ThreePic;




import { Application } from '@splinetool/runtime';


import React from 'react'

const ThreePic = () => {

    // const canvas = document.getElementById('canvas3d');
    // const app = new Application(canvas);
    // app.load('https://prod.spline.design/w4vRJ3Wn13r0QW89/scene.splinecode');

  return (
    <div className='bg-slate-300 w-screen h-[100px]' style={{ width: '100%', height: '600px' }}>
    <iframe src='https://my.spline.design/untitled-8813f6dc36db899a24baecc066addb2d/'
        className="w-screen"
        width='100%'
        height='80%'
       >
       </iframe>
  </div>
  )
}



export default ThreePic
