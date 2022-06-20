import './style.css';
import * as THREE from 'https://unpkg.com/three@0.141.0/build/three.module.js';
import lava from './lava.jpeg';








const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf8f9fa)
const camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg2')
}
);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(25);

renderer.render(scene, camera);
const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(10, 50, 50),
  new THREE.MeshNormalMaterial({
  
    // color: 0xff758f,
    shininess: 100,
    wireframe: true
  })
);
sphere.position.x = 2.5;
scene.add(sphere);

const sphere2 = new THREE.Mesh(
  new THREE.SphereGeometry(10, 50, 50),
  new THREE.MeshNormalMaterial()
)
sphere2.position.x = 1;
scene.add(sphere2);


// light
const point = new THREE.PointLight(0x11ff7b, 10 )
const ambient =  new THREE.AmbientLight(0x11ff7b, 4)

scene.add(ambient, point)





// scroll
// torus.position.z = 1;
// torus.position.setX(-0)





function animate(){
  requestAnimationFrame(animate)
  renderer.render(scene, camera);

 sphere.rotation.y += 0.002;
 


}

animate();

