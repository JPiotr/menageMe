import {IconDefinition} from "@fortawesome/free-regular-svg-icons";

export interface IButton {
  action() : void;
  icon : IconDefinition
}
