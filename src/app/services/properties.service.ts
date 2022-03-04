import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})

export class PropertiesService {

  constructor(
    private httpClient: HttpClient,
  ) { }


  public async getAllProperties(): Promise<any> {
    const url = `${environment.BASE_URL}`;
    const headers = new HttpHeaders();

    const response = await this.httpClient
    .get<any>(url, { headers })
    .toPromise();

    return response;
  }

}
