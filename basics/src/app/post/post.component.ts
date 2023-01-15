import { Component, Input, EventEmitter, Output, OnInit, OnChanges, DoCheck,
AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit,
OnDestroy } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges,DoCheck,
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit,
  OnDestroy {
  // @Input() postImage = ''
  @Input('img')  postImage = ''
  @Output() imgSelected = new EventEmitter<string>()

  constructor() {
    console.log("constructor called ", this.postImage)
  }

  ngOnInit(){
    console.log("ngOnInit called", this.postImage)
  }

  ngOnChanges() {
    console.log("ngOnChanges called")
  }
  ngDoCheck() {
    console.log("ngDoCheck called")
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called")
  }
  ngAfterContentInit () {
    console.log("AfterContentInit called")
  }
  ngAfterViewChecked() {
    console.log("AfterViewChecked called")
  }
  ngAfterViewInit() {
    console.log("AfterViewInit called")
  }
  ngOnDestroy() {
    console.log("OnDestroy called")
  }
}
