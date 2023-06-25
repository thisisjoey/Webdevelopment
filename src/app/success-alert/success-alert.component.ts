import { Component } from "@angular/core";

@Component({
    selector: 'success-alert',
    templateUrl: './success-alert.component.html',
    styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent {
    ss = true;
    getColor() {
        return Math.random() > 0.5 ? 'red' : 'yellow';
    }
}