import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CartevisiteService } from './cartevisite.service';
import { Catremodel } from './catremodel';

@Component({
  selector: 'app-cartevisite',
  templateUrl: './cartevisite.component.html',
  styleUrls: ['./cartevisite.component.scss']
})
export class CartevisiteComponent implements OnInit {

  qrcode!:Catremodel;
Qr:Catremodel={nomQr:'',  nom:[{value:""}],phone:[{value:0}],prenom:[{value:""}],adresse:[{value:""}],email:[{value:""}],ville:[{value:""}]};
Qr2:Catremodel={nom:[{value:""}],phone:[{value:0}],prenom:[{value:""}],adresse:[{value:""}],email:[{value:""}],ville:[{value:""}]};
// phones:number[]=[0,0];
phones:{value:number}[]=[]
phone!:number;
// ligne!:string
// public myAngularxQrCode!: string ;

  constructor(private contentServ:CartevisiteService,private activate:ActivatedRoute,private router:Router) { 
    // this.myAngularxQrCode = '';
  }

  ngOnInit(): void {
  

  }
  submit(){
    
    
    this.contentServ.createQrCode(this.Qr).subscribe(data=>{console.log("data",this.Qr);
    let ph=this.Qr.phone
 
    
    this.contentServ.getphone(ph[0].value).subscribe(data=>{console.log(data[0]._id);
     localStorage.setItem('id',data[0]._id)
     this.router.navigate(['/core/carte/affiche'])
  })
  });
    
  }
 
  // affiche(){
  //  return this.contentServ.getQrCode().subscribe(data=>this.qrcode=data)
  // }
  addphone(ligne:any){
    console.log(ligne);
    
  if(ligne === "phone"){
    this.phones.push({value:0})
    this.Qr.phone=this.phones}
    else if (ligne === "email"){
      
      this.Qr.email.push({value:''})
      console.log(this.Qr.email);
    }else if (ligne === "adresse"){
      
      this.Qr.adresse.push({value:''})
      console.log(this.Qr.adresse);
    }
  }
  remove(i:number,name:string){
    if(name === 'phone'){
    this.Qr.phone.splice(i,1);
    }
    else if(name === 'email'){
      this.Qr.email.splice(i,1);
    }
  }

}
