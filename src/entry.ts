import { module } from '@dasframeworken/base';
import rootComponent from './components/root.component.html';

const app = module('collectionManager', {
    components: [
        rootComponent
    ],
    rootComponent: rootComponent
});

app.deploy(document.getElementById('main'));