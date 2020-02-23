import { Injectable } from '@angular/core';
import { AppareilStatus } from '../enums/appareil-status.enum';
import { Subject } from 'rxjs';
import { Appareil } from '../models/appareil.model';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  appreilSubject = new Subject<any[]>();

  private appareils: Appareil[] = [
    new Appareil(1, 'Machine à laver', AppareilStatus.turnedOff),
    new Appareil(2, 'Frigo', AppareilStatus.turnedOn),
    new Appareil(3, 'Ordinateur', AppareilStatus.turnedOff)
  ];

  addAppareil(name: string, status: AppareilStatus) {
    const appareilObject = new Appareil(0, '', AppareilStatus.turnedOff);
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils.length;
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }

  getAppareilById(id: number) {
    return this.appareils.find(result => {
      return result.id === id;
    });
  }

  emitAppareilSubject() {
    this.appreilSubject.next(this.appareils.slice());
  }

  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = AppareilStatus.turnedOn;
    }
    this.emitAppareilSubject();
  }

  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = AppareilStatus.turnedOff;
      this.emitAppareilSubject();
    }
  }

  switchOnOne(i: number) {
    this.appareils[i].status = AppareilStatus.turnedOn;
    this.emitAppareilSubject();
  }

  switchOffOne(i: number) {
    this.appareils[i].status = AppareilStatus.turnedOff;
    this.emitAppareilSubject();
  }
}
