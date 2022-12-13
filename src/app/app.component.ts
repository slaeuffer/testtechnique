import { Component } from '@angular/core';
import { Message } from 'src/models/message.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testtechnique';
  messageList: Message[] = [];

  addItem(newMessage: Message) {
    this.messageList.push(newMessage);
  }
}
