import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})

export class Service{
  http:HttpClient = inject(HttpClient);
  private baseApiUrl = environment.api + "api/"

  createUser(){
    return this.http.post(
      this.baseApiUrl+"users/create",
      {}
    )
  }

  ping(){
    return this.http.post(
      this.baseApiUrl+"ping",
      {cmd:"ping"}
    )
  }

  getAllUsers(){
    console.log(1)
  }

}
