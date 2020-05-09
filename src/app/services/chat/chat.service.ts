import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private apiUrl: String = `${environment.API_URL}/chat`;

  constructor(private httpClient: HttpClient) { }

  public sendMessage = (message: string): Promise<any> => {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');

    return this.httpClient.post(`${this.apiUrl}/`, {message}, {headers: header})
      .toPromise()
      .then((apiRes: any) => Promise.resolve(apiRes))
      .catch((apiResErr: any) => Promise.reject(apiResErr));
  };
}
