import { Component } from '@angular/core';

@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.css']
})
export class InputformComponent {
  inputString:string = "";
  inputelementMethod(event: any)
    {
      this.inputString = event.target.value;
    }
}
