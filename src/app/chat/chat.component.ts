import { Component, Input, OnInit , Output, EventEmitter} from '@angular/core';
import { Message } from 'src/models/message.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

@Input() messages: Message[] = [];
@Input() user: string = '';
@Output() newItemEvent = new EventEmitter<Message>();

  addNewItem(value: string) {
    var msg = new Message(this.user, value);
    this.newItemEvent.emit(msg);
    (document.getElementById(this.user) as HTMLInputElement).value = '';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
