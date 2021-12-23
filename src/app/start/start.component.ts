import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { DabService } from '../dab.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Dab } from '../models/dab';
import { Transaction } from '../models/transaction';
import { UserService } from '../Services/user.service';
import { TransactionService } from '../Services/transaction.service';




@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  em: String ;
  mdp: string ;
  text: string = "" ;
  formlogin: boolean = false ;
  formsigninv: boolean = true ;
  formcarte: boolean = true ;
  user: User=new User() ;
  dab: Dab=new Dab() ;
  compteDab: Dab= new Dab()   ;
  item: Object ;
  solde: number ;
  transaction: Transaction = new Transaction() ;
  
  

  constructor(private sp: AuthService, private ds: DabService , private us:UserService,private ts: TransactionService) { }

  ngOnInit(): void {
  }

  login(){
    
 this.sp.auth(this.em,this.mdp).subscribe(items => 
    {
    if( items["tokens"]!=null){
     localStorage.setItem('token', items["tokens"]);
     window.location.href = '/selftransactions';
    }
    else 
    this.text = (items["msg"]) ;
    }) ;
  }
  carte(){
    this.formsigninv=true ;
    this.formcarte = false ;
  }

  formsiginin(){
    this.formlogin = true
    this.formsigninv=false ;
  }
 async  adduser(){

   await  this.ds.getOne(this.dab.id).subscribe(async i=>{( await (this.compteDab = i))
    if ( this.compteDab.password == this.dab.password && this.compteDab.solde<this.dab.solde ){
      alert('solde inferieur') ;

    }else {
      this.compteDab.solde= this.compteDab.solde - this.dab.solde;
      this.user.active=true ;
      this.user.admin=false ;
      this.transaction.descriptif = "alimenter compte" ;
      this.transaction.montant = this.dab.solde ; 
      this.transaction.type = 1 ;
      
      this.user.solde = this.dab.solde ; 
      this.us.addUser(this.user).subscribe( async data => {
      await ( this.user.id = data['_id'] ) ;
      this.transaction.debiteur = this.user.id  ; 
   
      this.ts.addTransaction(this.transaction).subscribe() ;
    });
      this.ds.updateSoldeDab(this.dab.id, this.compteDab).subscribe() ;
     
   
      
   
      window.location.href = '/';
    }
  
  
  }) ; 
    
     
    
    

  }

}
