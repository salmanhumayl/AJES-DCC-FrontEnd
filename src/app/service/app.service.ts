import { Injectable } from '@angular/core';
import {catchError} from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { DCCOnGoing } from '../Models/DCCOnGoing';
import {loginmodel} from '../Models/loginmodel';

import { AuthenticationService } from './authentication.service';

import {DCCTokenResponse} from '../Models/DCCTokenResponse';

import { menu } from '../Models/menu';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })

export class AJESService {
  private domain :string | undefined;
  constructor(private _http:HttpClient,public authService: AuthenticationService)
     {
        this.domain=environment.domain;
     }
    

  PostDiscussion(formData:FormData):Observable<string>{


  let token=this.authService.getToken();
  let headers=new HttpHeaders().set("Authorization","bearer " + token)
    
       
      return this._http.post<string>(this.domain + "api/OutGoing/AddDocument",formData,{headers:headers})   
     .pipe(
      catchError(this.handleError)
    
    );
  
  
}

EditPostDiscussion(formData:FormData,id:number):Observable<string>{
  let token=this.authService.getToken();
  let headers=new HttpHeaders().set("Authorization","bearer " + token)
 
  return this._http.put<string>(this.domain + "api/OutGoing/UpdateDocument",formData,{headers:headers}) 
  .pipe(
    catchError(this.handleError)
  
  );
  
}

GetRecordByID(id:number):Observable<DCCOnGoing>{
  let token=this.authService.getToken();
  let headers=new HttpHeaders().set("Authorization","bearer " + token)
  return this._http.get<DCCOnGoing>(this.domain + "api/OutGoing/GetOutGoingById?ID=" + id,{headers:headers}) 
  .pipe(
      
        catchError(this.handleError)
  
  );
  
}

private handleError(errorResponse:HttpErrorResponse){
  return throwError(errorResponse.message);

}

getmenu():Observable<any[]>{

  return this._http.get<any[]>(this.domain + "api/Menu/GetMenuBar");
  
}
getregister(FolderID:number):Observable<any[]>{
   
  return this._http.get<any[]>(this.domain + "api/Menu/GetRegister?FolderID=" + FolderID);
  
}



Login (model :loginmodel) :Observable<any> {
  return this._http.post<any>(this.domain + "api/Authenticate/Login",model)

}

}





//getrefno():Observable<number>{
   
  //return this._http.get<number>("https://localhost:44363/BlottterMaster/getRefNO");
//}

    //const httpoption={
  //    headers:new HttpHeaders({'Content-Type' :'application/json'})
  //  }