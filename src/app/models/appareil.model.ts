import { AppareilStatus } from '../enums/appareil-status.enum';

export class Appareil {
    id: number;
    name: string;
    status: AppareilStatus;

    constructor(id: number, name: string, status: AppareilStatus) {
        this.id = id;
        this.name = name;
        this.status = status;
    }
}
