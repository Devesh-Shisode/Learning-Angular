import { Injectable } from '@angular/core';
import { ChatMessage } from '../models/chatmessage';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private message: ChatMessage[] = [
    { user: 'kohli', message: 'hello', timestamp: new Date() },
    { user: 'Rohit', message: 'hello , Viru', timestamp: new Date() },
  ];

 messageSubject = new Subject<ChatMessage[]>();

  //currentMessage$= this.messageSubject.asObservable();
//messageSubject =  new BehaviorSubject<ChatMessage[]>(this.message);
  constructor() {
    // Emit initial message manually .

    this.messageSubject.next(this.message);
  }

  sendMessage(user: string, message: string) {
    const newMessage: ChatMessage = { user, message, timestamp: new Date() };

    this.message.push(newMessage);

    this.messageSubject.next(this.message);
  }
}
