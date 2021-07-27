import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PropertyService } from '../Services/property-service.service';
import { map } from 'rxjs/operators';

export interface property {
  propertyId: string;
  name : string;
  description:string;
  size :string;
}

@Component({
  selector: 'app-propert-home',
  templateUrl: './propert-home.component.html',
  styleUrls: ['./propert-home.component.css']
})
export class PropertHomeComponent implements OnInit {

  addPropertyForm : FormGroup
  formVisible : boolean = false;
  listProperty:any;

  constructor( private fb : FormBuilder ,
               private propertyservice : PropertyService) {

    this.listProperty = [];
    this.addPropertyForm = fb.group({
      name : ['', Validators.required],
      description : ['', Validators.required],
      size: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.getAllProperty();
  }
  
  addItem (){
    this.formVisible =  !this.formVisible ;
  }

  addNewProperty(){
  //  this.listProperty.push(this.addPropertyForm.value);
    this.propertyservice.addProperty(this.addPropertyForm.value).subscribe(responsedata => {      
      if(responsedata){
        console.log(responsedata) 
        this.getAllProperty() 
      }    
    })
    this.addPropertyForm.reset();
  }

  getAllProperty(){
    this.propertyservice.getAllProperty()
    .pipe(map((responsedata : {[key : string]:property} ) =>{
      const Propertylist:property[]=[];
      for (const key in responsedata){
        if(responsedata.hasOwnProperty(key)){
          Propertylist.push({...responsedata[key], propertyId:key})
        }    
      }
      return Propertylist;
    }))
    .subscribe(Properties =>{
      this.listProperty = Properties;
      console.log(this.listProperty);
    })
  }
  reset(){
    this.addPropertyForm.reset();
  }

  removeItems(element : any , PropertyId:string){
    this.listProperty.forEach((value:any,dex:any) => {
      if(value == element){
        this.listProperty.splice(dex,1);
        this.propertyservice.DeleteProperty(PropertyId).subscribe(responsedata=>{
          console.log("Deleted Successfully")
        })
      }
    });
    
  }

}
