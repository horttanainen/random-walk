export default class {
    constructor(state, graphics) {
        this.state = state;
        this.graphics = graphics;
        this.onWindowResize = () => {
            this.state.adjustForWindowResize();
            this.graphics.adjustForWindowResize();
        }
        this.onDocumentMouseMove = (event) => this.state.adjustForMouseMove();
    }

    setEventHandlers() {
        window.addEventListener( 'resize', this.onWindowResize, false );
        document.addEventListener( 'mousemove', this.onDocumentMouseMove, false );
    }
}

