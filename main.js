import './style.css';
import * as THREE from 'https://unpkg.com/three@0.141.0/build/three.module.js';
import { FlyControls } from './FlyControls.js';
import space from './c132.jpeg'
import star from './star.jpg'



const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000)
const camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg2')
}
);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(25);

renderer.render(scene, camera);

let space = new THREE.TextureLoader().load('./c132.jpeg');
let star = new THREE.TextureLoader().load('./star.jpg');



const flyControl = new FlyControls(camera, renderer.domElement);
flyControl.movementSpeed = 1;
flyControl.rollSpeed = 0.05;
flyControl.autoForward = false;
flyControl.dragToLook = false;


const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(10, 50, 50),
  new THREE.MeshPhongMaterial({
   map: space,
   shininess: 100
  })
)
scene.add(sphere);


function addStar(){
  const geo = new THREE.SphereGeometry(0.07, 24, 24);
  const mat = new THREE.MeshStandardMaterial({
    color: 0xaaaaaa,
    map: star
  })
  const starry = new THREE.Mesh(geo, mat);

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
starry.position.set(x, y, z);
scene.add(starry);
}

Array(6000).fill().forEach(addStar);





// light
const point = new THREE.PointLight(0xffffff,  )
const ambient =  new THREE.AmbientLight(0xffffff, )

scene.add(ambient, point)











function animate(){
  requestAnimationFrame(animate)
  renderer.render(scene, camera);
  flyControl.update(0.05);



}

animate();

