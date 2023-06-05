import { Injectable } from '@angular/core';
import {catchError} from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { DCCOnGoing } from './Models/DCCOnGoing';

import { menu } from './Models/menu';

@Injectable({
    providedIn: 'root'
  })



export class AJESService {

  constructor(private _http:HttpClient)
          {

        }


  PostDiscussion(formData:FormData):Observable<string>{
    const httpoption={
      headers:new HttpHeaders({'Content-Type' :'application/json'})
    }
     return this._http.post<string>("https://localhost:44359/api/OutGoing/AddDocument",formData,{
    
    })
    .pipe(
      catchError(this.handleError)
    
    );
  
  
}

EditPostDiscussion(formData:FormData,id:number):Observable<string>{
  const httpoption={
    headers:new HttpHeaders({'Content-Type' :'application/json'})
   //return this._http.put<string>("https://localhost:44363/PayrollDaysMaster/OutUpdateDocument/${id}/forms",formData,
  }
   return this._http.put<string>("https://localhost:44359/api/OutGoing/UpdateDocument",formData,{
  
  })
  .pipe(
    catchError(this.handleError)
  
  );


  
}

GetRecordByID(id:number):Observable<DCCOnGoing>{

  
  return this._http.get<DCCOnGoing>("https://localhost:44359/api/OutGoing/GetOutGoingById?ID=" + id)
  .pipe(
      
        catchError(this.handleError)
  
  );
  
}



getrefno():Observable<number>{
   
  return this._http.get<number>("https://localhost:44363/BlottterMaster/getRefNO");
}

private handleError(errorResponse:HttpErrorResponse){
  return throwError(errorResponse.message);

}

getmenu():Observable<any[]>{
   
  return this._http.get<any[]>("https://localhost:44359/api/Menu/GetMenuBar");
}
getregister(FolderID:number):Observable<any[]>{
   
  return this._http.get<any[]>("https://localhost:44359/api/Menu/GetRegister?FolderID=" + FolderID);
}

}