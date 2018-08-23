import React, { Component } from "react";
import "./App.css";
const THREE = require('three');
const OBJLoader = require('three-obj-loader');
const OrbitControls = require("three-orbit-controls")(require("three"));
OBJLoader(THREE);

class App extends Component {

  componentDidMount() {

    const width = window.innerWidth;
    const height = window.innerHeight;

    //CREATE SCENE
    var scene = new THREE.Scene();

    //CAMERA
    var camera = new THREE.OrthographicCamera(width / - 2, width / 2, height / 2, height / - 2, 1, 2000);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    camera.position.set(500, 100, 500);
    camera.zoom = 10;
    scene.add(camera);

    //LIGHTS
    var pointLight = new THREE.PointLight(0xffffff);
    pointLight.position.y = 150;
    pointLight.position.z = 200;
    pointLight.position.x = 100;
    scene.add(pointLight);

    //RENDERER
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    document.body.appendChild(renderer.domElement);

    //OBJ LOADER
    var loader = new THREE.OBJLoader();
    loader.load('/3d/Era_Sofa_Wood.obj', verLoad);

    function verLoad(obj) {
      obj.position.z = -10;
      scene.add(obj);
      obj.scale.set = (2, 1, 1);
    }

    //CONTROLS
    const controls = new OrbitControls(camera);
    controls.enableZoom = true;
    controls.zoomSpeed = 0;
    controls.minDistance = 100;
    controls.maxDistance = 500
    controls.maxPolarAngle = Math.PI / 2;

    //ANIMATION
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
    animate();

  }



  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
