import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppareilStatus } from 'src/app/enums/appareil-status.enum';
import { AppareilService } from 'src/app/services/appareil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent implements OnInit {

  defaultOnOff = AppareilStatus.turnedOff;
  appareilStatus = AppareilStatus;

  constructor(private appareilService: AppareilService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    const name = form.value['name'];
    const status = form.value['status'];
    this.appareilService.addAppareil(name, status);
    this.router.navigate(['/appareils']);
  }

  statusArray(): string[] {
    return Object.values(this.appareilStatus);
  }

}
