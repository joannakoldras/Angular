import { cardData } from './data';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddTaskService {

  constructor() { }

  add(task: any) {
    cardData.push(task);
  }
}
