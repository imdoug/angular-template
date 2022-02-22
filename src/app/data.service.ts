import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // sharing data to all components siblings or parents 
  private messageSource = new BehaviorSubject<string>("default message");
  currentMessage = this.messageSource.asObservable()

  constructor() { }

  changeMessage(message: string ){
    this.messageSource.next(message)
  }
}
