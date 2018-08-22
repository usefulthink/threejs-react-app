import React, { Component } from 'react';
import './App.css';
import * as THREE from 'three.js-master';

class App extends Component {

  componentDidMount() {

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    document.body.appendChild(renderer.domElement);

    var loader = new THREE.ObjectLoader();
    loader.load('/3d/obj.OBJ', verLoad);

    function verLoad(geometry, materials) {
      var mesh = new THREE.Mesh(geometry, materials);
      scene.add(mesh);
      mesh.position.z = -10;
    }

    camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      //cube.rotation.x += 0.01;
      //cube.rotation.y += 0.01;
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
