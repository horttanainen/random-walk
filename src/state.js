export default class {
    constructor() {
        this.mouseX = 0;
        this.mouseY = 0;
        this.windowHalfX = window.innerWidth / 2;
        this.windowHalfY = window.innerHeight / 2;
    }

    adjustForWindowResize() {
        this.windowHalfX = window.innerWidth / 2;
        this.windowHalfY = window.innerHeight / 2;
    }

    adjustForMouseMove() {
        this.mouseX = ( event.clientX - this.windowHalfX ) * 10;
        this.mouseY = ( event.clientY - this.windowHalfY ) * 10;
    }
}

