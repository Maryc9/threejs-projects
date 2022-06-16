import './style.css';
import * as THREE from 'https://unpkg.com/three@0.141.0/build/three.module.js';
import lava from './lava.jpeg';







const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg2')
}
);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(25);

renderer.render(scene, camera);


const geo = new THREE.TorusKnotGeometry(5, 1, 100);
const material = new THREE.MeshPhongMaterial({
  color:0x11ff7b,
  map: new THREE.TextureLoader().load(lava),
  shininess: 10
});
const torus = new THREE.Mesh(geo, material);
torus.position.y = -4;
scene.add(torus);

const geo2 = new THREE.TorusKnotGeometry(5, 1, 100);
const mat2 = new THREE.MeshPhongMaterial({
  color:0x11ff7b,
  map: new THREE.TextureLoader().load('lava.jpeg'),
  shininess: 100,
  wireframe:true
});
const torus2 = new THREE.Mesh(geo2, mat2);
torus2.position.y = -4;
scene.add(torus2);

const geo3 = new THREE.TorusKnotGeometry(6, 1, 100);
const mat3 = new THREE.MeshPhongMaterial({
  color:0x11ff7b,
  map: new THREE.TextureLoader().load('lava.jpeg'),
  shininess: 100,
  wireframe:true
});
const torus3 = new THREE.Mesh(geo3, mat3);
torus3.position.y = 12;
torus3.position.z = 10;
torus3.position.x =  -20;
scene.add(torus3);
// light
const point = new THREE.PointLight(0x11ff7b, 100 )
const ambient =  new THREE.AmbientLight(0x11ff7b, 6)

scene.add(ambient, point)





// scroll
torus.position.z = 1;
torus.position.setX(-0)





function animate(){
  requestAnimationFrame(animate)
  renderer.render(scene, camera);

  torus.rotation.x += 0.002;
  torus.rotation.y += 0.002;
torus3.rotation.x += 0.00005
torus3.rotation.x += 0.00005


 


}

animate();

