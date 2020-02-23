import { Injectable } from '@angular/core';
import { AppareilStatus } from '../enums/appareil-status.enum';
import { Subject } from 'rxjs';
import { Appareil } from '../models/appareil.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  appreilSubject = new Subject<any[]>();

  private appareils: Appareil[] = [];
  // [
  //   new Appareil(1, 'Machine à laver', AppareilStatus.turnedOff),
  //   new Appareil(2, 'Frigo', AppareilStatus.turnedOn),
  //   new Appareil(3, 'Ordinateur', AppareilStatus.turnedOff)
  // ];

  constructor(private httpClient: HttpClient) {}

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

  // Link to firebase database
  getAppareilsFromServer() {
    this.httpClient
      .get<Appareil[]>('https://ocangular-69b77.firebaseio.com/appareils.json')
      .subscribe(
        (response) => {
          this.appareils = response;
          this.emitAppareilSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  saveAppareilsToServer() {
    this.httpClient
      .put('https://ocangular-69b77.firebaseio.com/appareils.json', this.appareils)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
}
