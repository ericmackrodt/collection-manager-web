import { FakeService } from './../services/fake.service';

export class AnotherComponent {
    static get metadata() {
        return {
            dependencies: [FakeService]
        };
    }

    constructor(fake: FakeService) {
        console.log(fake.kept);
    }
}