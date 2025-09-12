import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { ChatMessage } from '../models/chatmessage';

@Component({
  selector: 'app-chat1',
  templateUrl: './chat1.component.html',
  styleUrls: ['./chat1.component.css']
})
export class Chat1Component implements OnInit {
  messages: ChatMessage[] = [];
  newMessage: string = '';

  constructor(private _chatService: ChatService) { }

  ngOnInit(): void {
    this._chatService.messageSubject.subscribe((res: ChatMessage[]) => {
      console.log('response from subject', res);
      this.messages = res;
      console.log('subject', this.messages);
    });
  }

  sendMessage(): void {
    if (this.newMessage.trim()) {
      this._chatService.sendMessage('Rohit', this.newMessage);
      this.newMessage = '';
    }
  }
}
