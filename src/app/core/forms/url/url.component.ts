import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxQrcodeStylingComponent,Options } from 'ngx-qrcode-styling';
@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.scss']
})
export class UrlComponent implements OnInit {
  @ViewChild('qrcode', { static: false }) public qrcode!: NgxQrcodeStylingComponent;
  dat:string=''
  img:string=''
  constructor() { }
  ngOnInit(): void {
  }
  public config: Options = {
    width: 300,
    height: 300,
    data: '',
    image: '',
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
  onUpdate(): void {
    this.qrcode.update(this.qrcode.config, {
      // height: 300,
      // width: 300,
      frameOptions: {
        height: 600,
        width: 600,
      },
    }).subscribe((res) => {
      // TO DO something!
    });
}

onDownload(): void {
    this.qrcode.download("file-name.png").subscribe((res) => {
      // TO DO something!
    });
}
}
