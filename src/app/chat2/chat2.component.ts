import { Component, OnInit } from '@angular/core';
import { ChatMessage } from '../models/chatmessage';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat2',
  templateUrl: './chat2.component.html',
  styleUrls: ['./chat2.component.css']
})
export class Chat2Component implements OnInit {

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
       this._chatService.sendMessage('Kohli', this.newMessage);
       this.newMessage = '';
     }
   }

}  

    