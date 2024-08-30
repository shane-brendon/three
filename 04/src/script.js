import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;
// scene.add(mesh);

/**
 * group
 */

const group = new THREE.Scene();
group.position.set(0, 1, 0);
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x0000ff })
);

cube2.position.set(-1, 0, 0);
cube3.position.set(1, 0, 0);
group.add(cube1, cube2, cube3);
// group.add();
/**
 * Sizes
 */
const sizes = {
  width: 1000,
  height: 800,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
// camera.position.z = 1;
// camera.position.x = 1;
// camera.position.y = 1;
camera.position.set(0, 0, 3);
scene.add(camera);

// camera.lookAt(mesh.position);
/**
 * axis helper
 */

const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);
/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
