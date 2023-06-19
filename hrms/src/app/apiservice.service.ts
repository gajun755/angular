import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retryWhen } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

  api_url:string="http://localhost:8080/users";
  delete_url:string="http://localhost:8080/deleteUser";
  update_user:string="http://localhost:8080/updateUser";
  base_url:string="http://localhost:8080"
  //get all the data
  getAllUsers():Observable<any>{

      return this._http.get(`${this.api_url}`);
  }

  deleteUser(email:string):Observable<any>{

     return this._http.delete(this.delete_url+'/'+email);
    
    }

    createData(data:any):Observable<any>{
      console.log(JSON.stringify(data))
      return this._http.post(`${this.api_url}`, data);
    }


    updateData(data:any):Observable<any>{

      return this._http.put(`${this.update_user}`,data);
    }

    getSingleUser(email:String):Observable<any>{
          return this._http.get( this.api_url+'/'+email);
    }

    uploadImage(uploadImage:File,email:string):Observable<any>{
      
        const formdata:FormData=new FormData();
        formdata.append('file',uploadImage)

      return this._http.put(`${this.base_url}/uploadImage/${email}}`,uploadImage);

    }
}
