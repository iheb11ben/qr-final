import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartevisiteService } from '../cartevisite.service';
import { Catremodel } from '../catremodel';

@Component({
  selector: 'app-affiche2',
  templateUrl: './affiche2.component.html',
  styleUrls: ['./affiche2.component.scss']
})
export class Affiche2Component implements OnInit {

  qrcode :Catremodel={nom:[''],phone:[0],prenom:[''],adresse:[''],email:[''],ville:['']};
  elementType = '';
    correctionLevel = 'NgxQrcodeErrorCorrectionLevels.HIGH';
    value='';
    constructor(private contentServ:CartevisiteService, private activeRoute:ActivatedRoute) { }
  
    ngOnInit(): void {
     
      this.affiche();
      this.affQr()

  
    }
    affiche(){
   let id = localStorage.getItem('id')
        this.contentServ.getQrCode(id+'').subscribe(data=>{this.qrcode=data,console.log("djkfgdsg",this.qrcode);
  
    });
    this.value = 'http://192.168.100.12:4200/content/affiche/'+id;
    }
    affQr(){
      let id = localStorage.getItem('id')
    this.value = 'http://192.168.100.12:4200/content/affiche/'+id;
    let qrResult =  this.value
    }
    
}
