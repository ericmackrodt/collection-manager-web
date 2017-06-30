import { module } from '@dasframeworken/base';
import anotherComponent from './components/another.component.html';
import homeComponent from './components/home.component.html';
import rootComponent from './components/root.component.html';
import titleComponent from './components/title.component.html';
import profileComponent from './profile/profile.component.html';
import { FakeService } from './services/fake.service';

import 'metro-dist/css/metro.css';

const app = module('collectionManager', {
    routes: [
        { path: '/', root: profileComponent, resolve: () => { return true; } },
        { path: '/root', root: homeComponent },
        { path: '/another', root: anotherComponent }
    ],
    types: [
        FakeService
    ],
    components: [
        homeComponent,
        anotherComponent,
        rootComponent,
        titleComponent,
        profileComponent
    ],
    rootComponent: rootComponent,
    preLoad: () => {
        return true;
    }
});

app.deploy(document.getElementById('main'));