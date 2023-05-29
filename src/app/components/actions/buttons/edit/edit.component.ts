import { Component } from '@angular/core';
import {IButton} from "../IButton";
import {faPenToSquare} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements IButton{
  icon = faPenToSquare;

  action(): void {
  }

}
