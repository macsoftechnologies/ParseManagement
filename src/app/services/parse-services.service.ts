import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ParseServicesService {

  constructor(private httpClient: HttpClient) { }

  public adminRegister(data: any):Observable<any> {
    return this.httpClient.post(environment.baseUrl + 'admin/login', data)
  }
}
