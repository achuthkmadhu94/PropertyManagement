import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-propert-home',
  templateUrl: './propert-home.component.html',
  styleUrls: ['./propert-home.component.css']
})
export class PropertHomeComponent implements OnInit {

  addPropertyForm : FormGroup
  formVisible : boolean = false;
  listProperty:any;

  constructor( private fb : FormBuilder) { 
    this.listProperty = [];

    this.addPropertyForm = fb.group({
      name : ['', Validators.required],
      description : ['', Validators.required],
      size: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }
  
  addItem (){
    this.formVisible =  !this.formVisible ;
  }

  addNewProperty(){
    this.listProperty.push(this.addPropertyForm.value);
    this.addPropertyForm.reset();
  }

  reset(){
    this.addPropertyForm.reset();
  }

  removeItems(element:any){
    this.listProperty.forEach((value:any,dex:any) => {
      if(value == element){
        this.listProperty.splice(dex,1)
      }
    });
  }

}
