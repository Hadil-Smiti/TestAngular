import { Component } from '@angular/core';
import{FormControl, FormGroup, Validators}from '@angular/forms'; 
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  appartform!:FormGroup
  ngOnInit(): void {
    // this.id=this.acr.snapshot.params['id']
     this.appartform=new FormGroup({
 
       id:new FormControl(),
       title:new FormControl(),
       price:new FormControl(),
       quantity:new FormControl(),

     }) }
  add(){
    console.log("notre form"+JSON.stringify(this.appartform.value))

  }
}
