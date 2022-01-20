import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class ParseServicesService {
  loginHideShow: any
  constructor(private httpClient: HttpClient) {}

  public adminLogin(data: any): Observable<any> {
    return this.httpClient.post(environment.baseUrl + 'admin/login', data)
  }
  // public adminLogin(data: any): Observable<any> {
  //   return this.httpClient.post(environment.baseUrl + 'admin/login', data)
  // }
}
