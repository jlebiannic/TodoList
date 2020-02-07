export class MenuItem {

    private _path: string;
    public label: string;
    public p : string;
    constructor(p: string, l: string) {
        this.path = p;
        this.label = l;
    }

    public set path(path: string) {
        this._path = path;
        this.p = this._path.substr(1);
    }

    public get path(): string {
        return this._path;
    }
}