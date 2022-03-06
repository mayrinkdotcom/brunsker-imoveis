import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})

export class PropertiesService {

  constructor(
    private httpClient: HttpClient,
  ) { }


  public getAllProperties(): Observable<any> {
    const url = `${environment.BASE_URL}/imovel`;
    const headers = new HttpHeaders({
      path: 'imovel'
    });

    return this.httpClient.get<any>( url, { headers });
  }

  public create(): Observable<any> {
    const url = `${environment.BASE_URL}/imovel`;
    const headers = new HttpHeaders({
      Authorization: ''
    });

    const body = {
      name: 'Teste',
      value: 42
    };

    return this.httpClient.post<any>(url, body, { headers });
  }

}
