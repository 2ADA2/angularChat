import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Service} from "../../api/service";

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  public cmdVal: string = "cmd"
  private service = inject(Service)

  clear() {
    this.cmdVal = "";
  }

  preventInput(event: KeyboardEvent) {
    event.preventDefault();
  }

  cmdPing() {
    this.clear()
    this.cmdVal = "> ping"
    this.service.ping().subscribe((val) => {
        this.cmdVal += `\n> ` + val
      })
  }

  cmdCreateUser() {
    this.clear()
    this.cmdVal = "> create ada22"
    this.service.createUser().subscribe((val:Object) => {
      this.cmdVal += `\n> ` + JSON.stringify(val)
    })

  }

  cmdGetUsers() {
    this.clear()
    this.cmdVal = "> get all"
  }
}
