import {Component, Input} from '@angular/core';
import {Player} from '../Player';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() player: Player;

  inc() {
    this.player.point++;
  }

  dec() {
    this.player.point--;
  }

}

