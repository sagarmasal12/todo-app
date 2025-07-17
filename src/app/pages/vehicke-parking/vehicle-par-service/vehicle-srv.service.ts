import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class VehicleSrvService {

  private apiUrl = 'https://api.freeprojectapi.com/api/SmartParking/AddClient';


  constructor(private http:HttpClient) { }

  addClient(client:Client):Observable<any>{
    return this.http.post(this.apiUrl,client)
  }

  // getAllclient(allclientData?: string){
  //   this.http.get("https://api.freeprojectapi.com/api/SmartParking/GetAllClients")
  // }

}
