export default class {
    constructor(graphics) {
        this.renderer = graphics.renderer;
        this.container = document.createElement('div');
        document.body.appendChild(this.container );
    }

    appendRenderer() {
        this.container.appendChild(this.renderer.domElement);
    }
}

