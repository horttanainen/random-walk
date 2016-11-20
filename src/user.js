export function onWindowResize(state, camera, renderer) {
    return function() {
        state.windowHalfX = window.innerWidth / 2;
        state.windowHalfY = window.innerHeight / 2;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
    }
}
export function onDocumentMouseMove(state) {
    return function(event) {
        state.mouseX = ( event.clientX - state.windowHalfX ) * 10;
        state.mouseY = ( event.clientY - state.windowHalfY ) * 10;
    }
}
