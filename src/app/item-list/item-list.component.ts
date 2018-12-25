import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

@Input()
items: string[];

@Input()
title: string;

 @Output() drop: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDrop($event) {
    this.drop.emit($event);
  }

}