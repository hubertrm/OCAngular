import { Component, Input, OnInit } from '@angular/core';
import { AppareilStatus } from '../../enums/appareil-status.enum';
import { AppareilService } from '../../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() index: number;
  @Input() id: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    if (this.appareilStatus === AppareilStatus.turnedOn) {
      return 'green';
    } else if (this.appareilStatus === AppareilStatus.turnedOff) {
      return 'red';
    }
  }

  onSwitch() {
    if (this.appareilStatus === AppareilStatus.turnedOn) {
      this.appareilService.switchOffOne(this.index);
    } else if (this.appareilStatus === AppareilStatus.turnedOff) {
      this.appareilService.switchOnOne(this.index);
    }
  }

}
