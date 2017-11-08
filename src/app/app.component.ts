import {Component} from '@angular/core';
import {Player} from './Player';
import {CounterComponent} from './component/counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  playerA: Player = {
    point: 50,
    name: 'Player A'
  };
  playerB: Player = {
    point: 50,
    name: 'Player B'
  };

}
