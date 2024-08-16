import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Skills_1, Skills_2 } from '../skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})

export class SkillsComponent extends AppComponent {
  private _skills1 = Skills_1;
  private _skills2 = Skills_2;

  public get skills1(): typeof Skills_1 {
    return this._skills1;
  }

  public get skills2(): typeof Skills_2 {
    return this._skills2;
  }
}
