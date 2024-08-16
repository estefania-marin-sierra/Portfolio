import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { achievements_1, achievements_2 } from '../achievements';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})

export class achievementsComponent extends AppComponent {
  private _achievements1 = achievements_1;
  private _achievements2 = achievements_2;
achievement_2: any;

  public get achievements1(): typeof achievements_1 {
    return this._achievements1;
  }

  public get achievements2(): typeof achievements_2 {
    return this._achievements2;
  }
}
