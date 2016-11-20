import * as THREE from 'three';
import {state} from 'state';
import * as user from 'user';

var container;
var camera, scene, renderer;
var geometry, root;

document.addEventListener( 'mousemove', user.onDocumentMouseMove(state, camera, renderer), false );
init();
animate();
function init() {
    container = document.createElement( 'div' );
    document.body.appendChild( container );
    camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 15000 );
    camera.position.z = 500;
    scene = new THREE.Scene();
    var geometry = new THREE.BoxGeometry( 100, 100, 100 );
    var material = new THREE.MeshNormalMaterial();
    root = new THREE.Mesh( geometry, material );
    root.position.x = 1000;
    scene.add( root );
    var amount = 200, object, parent = root;
    for ( var i = 0; i < amount; i ++ ) {
        object = new THREE.Mesh( geometry, material );
        object.position.x = 100;
        parent.add( object );
        parent = object;
    }
    parent = root;
    for ( var i = 0; i < amount; i ++ ) {
        object = new THREE.Mesh( geometry, material );
        object.position.x = - 100;
        parent.add( object );
        parent = object;
    }
    parent = root;
    for ( var i = 0; i < amount; i ++ ) {
        object = new THREE.Mesh( geometry, material );
        object.position.y = - 100;
        parent.add( object );
        parent = object;
    }
    parent = root;
    for ( var i = 0; i < amount; i ++ ) {
        object = new THREE.Mesh( geometry, material );
        object.position.y = 100;
        parent.add( object );
        parent = object;
    }
    parent = root;
    for ( var i = 0; i < amount; i ++ ) {
        object = new THREE.Mesh( geometry, material );
        object.position.z = - 100;
        parent.add( object );
        parent = object;
    }
    parent = root;
    for ( var i = 0; i < amount; i ++ ) {
        object = new THREE.Mesh( geometry, material );
        object.position.z = 100;
        parent.add( object );
        parent = object;
    }
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor( 0xffffff );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.sortObjects = false;
    container.appendChild( renderer.domElement );
    //
    window.addEventListener( 'resize', user.onWindowResize(state), false );
}
//
function animate() {
    requestAnimationFrame( animate );
    render();
}
function render() {
    var time = Date.now() * 0.001;
    var rx = Math.sin( time * 0.7 ) * 0.2;
    var ry = Math.sin( time * 0.3 ) * 0.1;
    var rz = Math.sin( time * 0.2 ) * 0.1;
    camera.position.x += ( state.mouseX - camera.position.x ) * .05;
    camera.position.y += ( - state.mouseY - camera.position.y ) * .05;
    camera.lookAt( scene.position );
    root.traverse( function ( object ) {
        object.rotation.x = rx;
        object.rotation.y = ry;
        object.rotation.z = rz;
    } );
    renderer.render( scene, camera );
}
