import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent {
  sucessClass = "alert alert-success";
  warningClass = "alert alert-warning";
  currentClass = "alert alert-warning";
  initiateSuccess() {
    console.log("Sucess Initiated");
    this.currentClass = this.sucessClass;
  }
  initiateWarning() {
    console.log("Warning Initiated");
    this.currentClass = this.warningClass;
  }
}
