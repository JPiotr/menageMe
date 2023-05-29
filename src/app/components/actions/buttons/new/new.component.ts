import { Component } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {IButton} from "../IButton";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements IButton{
    icon = faPlus;

  action() {

  }
}
