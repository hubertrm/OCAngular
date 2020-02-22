import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon-projet-angular-modifié';
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 2000);
  });

  appareils = [{
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Frigo',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 2000
    );
  }

  onAllumer() {
    console.log('On allume tout !');
    this.appareils.forEach(appareil => {
      appareil.status = 'allumé';
    });
  }

  onEteindre() {
    console.log('On éteint tout !');
    this.appareils.forEach(appareil => {
      appareil.status = 'éteint';
    });
  }
}
