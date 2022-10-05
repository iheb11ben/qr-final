import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgxQrcodeStylingComponent,Options } from 'ngx-qrcode-styling';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() data:string =''
  @Input() image:string='' 
  @ViewChild('qrcode', { static: false }) public qrcode!: NgxQrcodeStylingComponent;
  dat:string=''
  img:string=''
  constructor() { }
  ngOnInit(): void {
  }
  public config: Options = {
    width: 300,
    height: 300,
    data: this.data,
    image: this.image,
    margin: 5,
    dotsOptions: {
      color: "#1977f3",
      type: "dots"
    },
    backgroundOptions: {
      color: "#ffffff",
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 0
    }
  };

}
