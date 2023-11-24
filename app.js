// Set up a scene
var scene = new THREE.Scene();

// Set up a camera
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Set up a renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a cube geometry
var geometry = new THREE.BoxGeometry();

// Create a basic material
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// Combine the geometry and material to create a mesh
var cube = new THREE.Mesh(geometry, material);

// Add the cube to the scene
scene.add(cube);

function animate() {
    requestAnimationFrame(animate);

    // Rotate the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Render the scene
    renderer.render(scene, camera);
}

// Start the animation loop
animate();

