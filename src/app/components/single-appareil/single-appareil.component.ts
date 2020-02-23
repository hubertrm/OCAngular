import { Component, OnInit } from '@angular/core';
import { AppareilService } from 'src/app/services/appareil.service';
import { ActivatedRoute } from '@angular/router';
import { Appareil } from 'src/app/models/appareil.model';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  appareil: Appareil;

  constructor(private appareilService: AppareilService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.appareil = this.appareilService.getAppareilById(+id);
  }

}
