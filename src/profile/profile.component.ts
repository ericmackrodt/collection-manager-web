export class ProfileComponent {
    static get metadata() {
        return {
            dependencies: <any[]>[]
        };
    }

    private _potato: string;

    get potato() {
        return this._potato;
    }
    set potato(val) {
        if (val !== this._potato) {
            this._potato = val;
            (<any>this)._notifyChange('potato');
        }

    }

    constructor() {
    }

    clicked() {
        this.potato = this.potato + ' Another click!';
    }
}