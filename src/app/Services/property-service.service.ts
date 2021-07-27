import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor( private http : HttpClient ) { }
  
  addProperty(data : any) :Observable<any>{
      const PropertylistURL='https://propertymanagement-91cd0-default-rtdb.firebaseio.com/Property.json';
      return this.http.post(PropertylistURL , data);
    }

    getAllProperty(): Observable<any> {
      return this.http.get('https://propertymanagement-91cd0-default-rtdb.firebaseio.com/Property.json');
    }

    DeleteProperty(PropertyId : any) :Observable<any>  {
      const DeleteProperty =
      'https://propertymanagement-91cd0-default-rtdb.firebaseio.com/Property'+'/'+PropertyId+'.json';
      return this.http.delete(DeleteProperty);
    }
}
