import State from 'state';
import Graphics from 'graphics';
import Input from 'input';
import Gui from 'gui';

const state = new State();
const graphics = new Graphics(state);
const input = new Input(state, graphics);
const gui = new Gui(graphics);

input.setEventHandlers();
gui.appendRenderer();
graphics.animate();
