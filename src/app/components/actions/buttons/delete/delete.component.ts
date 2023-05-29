import { Component } from '@angular/core';
import {IButton} from "../IButton";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements IButton{
  icon = faTrash;

  action(): void {
  }

}
