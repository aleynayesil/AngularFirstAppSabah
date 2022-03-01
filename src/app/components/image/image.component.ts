import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit {
  @Input() height: string = '';
  @Input() width: string = '';
  @Input() imgUrl: string = '';
  @Input() base64: string = '';
  constructor() {}
  src = '';
  ngOnInit(): void {
    this.src = this.imgUrl != '' ? this.imgUrl : this.base64;
  }
}
