import * as THREE from 'three';

export default class {
    constructor(state) {
        this.camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 15000 );
        this.renderer = new THREE.WebGLRenderer();
        this.scene = new THREE.Scene();
        this.objects = {};
        this.state = state;

        this.camera.position.z = 500;

        const geometry = new THREE.BoxGeometry( 100, 100, 100 );
        const material = new THREE.MeshNormalMaterial();
        const root = new THREE.Mesh( geometry, material );
        root.position.x = 1000;

        this.scene.add( root );

        const amount = 200;
        let parent = root;
        for ( let i = 0; i < amount; i ++ ) {
            const object = new THREE.Mesh( geometry, material );
            object.position.x = 100;
            parent.add( object );
            parent = object;
        }
        parent = root;
        for ( let i = 0; i < amount; i ++ ) {
            const object = new THREE.Mesh( geometry, material );
            object.position.x = - 100;
            parent.add( object );
            parent = object;
        }
        parent = root;
        for ( let i = 0; i < amount; i ++ ) {
            const object = new THREE.Mesh( geometry, material );
            object.position.y = - 100;
            parent.add( object );
            parent = object;
        }
        parent = root;
        for ( let i = 0; i < amount; i ++ ) {
            const object = new THREE.Mesh( geometry, material );
            object.position.y = 100;
            parent.add( object );
            parent = object;
        }
        parent = root;
        for ( let i = 0; i < amount; i ++ ) {
            const object = new THREE.Mesh( geometry, material );
            object.position.z = - 100;
            parent.add( object );
            parent = object;
        }
        parent = root;
        for ( let i = 0; i < amount; i ++ ) {
            const object = new THREE.Mesh( geometry, material );
            object.position.z = 100;
            parent.add( object );
            parent = object;
        }

        this.objects.root = root;

        this.renderer.setClearColor( 0xffffff );
        this.renderer.setPixelRatio( window.devicePixelRatio );
        this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.renderer.sortObjects = false;
    }

    animate() {
        requestAnimationFrame(() => this.animate() );
        render(this);
    }

    adjustForWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
    }

    get members() {
        return {
            camera: this.camera,
            renderer: this.renderer,
            scene: this.scene,
            objects: this.objects,
            state: this.state
        };
    }
}

function render(graphics) {
    const {camera, renderer, scene, objects, state} = graphics.members;
    const root = objects.root;

    const time = Date.now() * 0.001;
    const rx = Math.sin( time * 0.7 ) * 0.2;
    const ry = Math.sin( time * 0.3 ) * 0.1;
    const rz = Math.sin( time * 0.2 ) * 0.1;
    camera.position.x += ( state.mouseX - camera.position.x ) * .05;
    camera.position.y += ( - state.mouseY - camera.position.y ) * .05;
    camera.lookAt( scene.position );
    root.traverse( object => {
        object.rotation.x = rx;
        object.rotation.y = ry;
        object.rotation.z = rz;
    } );
    renderer.render( scene, camera );
}
