import './style.css';
import * as THREE from 'three';
import {RGBELoader} from './RGBELoader.js';
import { FlyControls } from './FlyControls.js';
import winter from './winter.hdr';



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg4')
}
);


renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(25);


renderer.render(scene, camera);


renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.ACESFilmicToneMapping;

const hdri = new RGBELoader();

hdri.load(winter, function(texture){
  texture.mapping = THREE.EquirectangularReflectionMapping;
  
  scene.background = texture;
  scene.environment = texture;

  const sphere6 = new THREE.Mesh(
    new THREE.SphereGeometry(20, 50, 50),
    new THREE.MeshStandardMaterial({
      color: 0xd55d92,
      roughness:0,
      metalness: 1
    })
  );
  sphere6.position.z = -100;
  sphere6.position.y = 30;
  sphere6.position.x = -2;

  scene.add(sphere6);


  const sphere7 = new THREE.Mesh(
    new THREE.SphereGeometry(20, 50, 50),
    new THREE.MeshStandardMaterial({
      color: 0x2d00f7,
      roughness:0,
      metalness: 1
    })
  );
  sphere7.position.z = -100;
  sphere7.position.y = 30;
  sphere7.position.x = 1;

  scene.add(sphere7);

  const sphere5 = new THREE.Mesh(
    new THREE.SphereGeometry(5, 50, 50),
    new THREE.MeshStandardMaterial({
      color: 0xbc6c25,
      roughness: 0,
      metalness: 1
    })
  );
  sphere5.position.x = 1;
  sphere5.position.y = 30;
  scene.add(sphere5);

const torus = new THREE.Mesh(
  new THREE.TorusGeometry(10, 2, 15),
  new THREE.MeshStandardMaterial({
    roughness: 0,
    metalness:0.8
  })

);
torus.position.x = 1;
torus.position.y = 31;
scene.add(torus);


const sphere4 = new THREE.Mesh(
  new THREE.SphereGeometry(6, 50, 50),
  new THREE.MeshStandardMaterial({
    color: 0x34a0a4,
    roughness:0,
    metalness: 0.5
   
  })
);
sphere4.position.y = -8
sphere4.position.x = 10
scene.add(sphere4);

const sphere3 = new THREE.Mesh(
  new THREE.SphereGeometry(6, 50, 50),
  new THREE.MeshStandardMaterial({
    color: 0x9fa0ff,
    roughness: 0,
    metalness: 0.5
  })
);
sphere3.position.x = 17;
sphere3.position.y = -20;
scene.add(sphere3);


const sphere2 = new THREE.Mesh(
new THREE.SphereGeometry(6, 50, 50),
new THREE.MeshStandardMaterial({
  color: 0xff758f,
  roughness: 0,
  metalness: 0.5
})
);
sphere2.position.x = 6
sphere2.position.y = -20

scene.add(sphere2);

  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(1, 50, 50),
    new THREE.MeshStandardMaterial({ 
      color: 0x93acb5,
      roughness: 0,
      metalness: 2
      
     })
  );
  sphere.position.z = 30
  scene.add(sphere);
})



 
const flyControl = new FlyControls(camera, renderer.domElement);
flyControl.movementSpeed = 1;
flyControl.rollSpeed = 0.05;
flyControl.autoForward = false;
flyControl.dragToLook = false;


function animate(){
    requestAnimationFrame(animate)
    renderer.render(scene, camera);
 flyControl.update(0.05);

   
   
}

animate();

