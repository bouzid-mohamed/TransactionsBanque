import {Component, OnInit} from '@angular/core';
import { TransactionService } from '../Services/transaction.service' ;
import { Transaction } from '../models/transaction';
import {AbstractControl, FormGroup, FormsModule, NgForm, FormControl,Validators, FormBuilder  } from '@angular/forms';
import { LoaderService } from '../loader.service';




@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit   {

  listTransactions: Transaction[];
  trasaction: Transaction ;


  headElements = ['ID', 'Name', 'Description', 'Price'];

  constructor( private sp: TransactionService,public loaderService:LoaderService){
    
      this.trasaction= new Transaction() ;
    

  }
  ngOnInit() {
    this.sp.getAll().subscribe(data=>{this.listTransactions});

    
  }
  addFilm(){
   // this.product.category_id = 4 ;
    //this.product.cata= [] ;
    //this.product.cata.push(2) ;
    //this.product.cata.push(4) ;
    ///this.sp.addProduct(this.product).subscribe();

  
    
    
  }


}

