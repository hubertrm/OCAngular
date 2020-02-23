import { Injectable } from '@angular/core';
import { AppareilStatus } from '../enums/appareil-status.enum';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {
  appareils = [{
      id: 1,
      name: 'Machine à laver',
      status: AppareilStatus.turnedOff
    },
    {
      id: 2,
      name: 'Frigo',
      status: AppareilStatus.turnedOn
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: AppareilStatus.turnedOff
    }
  ];

  getAppareilById(id: number) {
    return this.appareils.find(result => {
      return result.id === id;
    });
  }

  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = AppareilStatus.turnedOn;
    }
  }

  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = AppareilStatus.turnedOff;
    }
  }

  switchOnOne(i: number) {
    this.appareils[i].status = AppareilStatus.turnedOn;
  }

  switchOffOne(i: number) {
    this.appareils[i].status = AppareilStatus.turnedOff;
  }
}
