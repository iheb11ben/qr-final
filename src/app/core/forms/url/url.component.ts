import { Component, OnInit} from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.scss']
})
export class UrlComponent implements OnInit {
  elementType= NgxQrcodeElementTypes.URL
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH
  value = ''
  constructor() { }
  ngOnInit(): void {
  }
  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 400;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a6');
      let position = 20;
      PDF.addImage(FILEURI, 'PNG', 35, position, fileWidth, fileHeight);
      PDF.save('Qr-Code.pdf');
    });
  }
}
