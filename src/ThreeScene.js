import React from 'react';
const THREE = require('three');
const OBJLoader = require('three-obj-loader');
const OrbitControls = require("three-orbit-controls")(require("three"));
OBJLoader(THREE);

export class ThreeScene extends React.Component {
    constructor(props) {
        super(props);
        this.rootRef = React.createRef();
    }
    
    componentDidMount() {

        const { width, height } = this.props;

        //var aspect = window.innerWidth / window.innerHeight;

        //CREATE SCENE
        var scene = new THREE.Scene();

        //CAMERA
        var camera = new THREE.OrthographicCamera(window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 2000);
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

        this.rootRef.current.appendChild(renderer.domElement);

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
        controls.minDistance = 100;
        controls.maxDistance = 500;
        controls.maxPolarAngle = Math.PI / 2;

        //ANIMATION
        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
            controls.update
        }
        animate();

    }

    render() {

        const { width, height } = this.props;

        return (
            <div ref={this.rootRef}></div>
        )

    }
}
