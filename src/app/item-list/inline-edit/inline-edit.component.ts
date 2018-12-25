import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-inline-edit',
  templateUrl: './inline-edit.component.html',
  styleUrls: ['./inline-edit.component.css']
})
export class InlineEditComponent implements OnInit {
  editValue = "";
  @Output() valueChange = new EventEmitter();

  @Input()
  get value() {
    return this.editValue;
  }
  set value(val) {
    this.editValue = val;
    this.valueChange.emit(this.editValue);
  }

  @ViewChild('valueInput') valueInput: ElementRef;

  editMode: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggle(edit) {
    this.editMode = edit;
    if (edit) {
      setTimeout(() => {
        this.valueInput.nativeElement.focus();
      });
    }
  }

}