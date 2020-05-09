import { Injectable } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: String = `${environment.API_URL}/auth`;

  constructor(private httpClient: HttpClient) { }

  public signup = (data: UserModel): Promise<UserModel> => {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    header.append('Access-Control-Allow-Credentials', 'true');

    return this.httpClient.post(`${this.apiUrl}/register`, data, {headers: header})
      .toPromise()
      .then((apiRes: UserModel) => Promise.resolve(apiRes))
      .catch((apiResErr: any) => Promise.reject(apiResErr));
  };

  public login = (email: string, password: string): Promise<any> => {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');

    return this.httpClient.post(`${this.apiUrl}/login`, {email, password}, {headers: header})
      .toPromise()
      .then((apiRes: any) => Promise.resolve(apiRes))
      .catch((apiResErr: any) => Promise.reject(apiResErr));
  };

  public me = (): Promise<any> => {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');

    return this.httpClient.get(`${this.apiUrl}/me`, {headers: header})
      .toPromise()
      .then((apiRes: any) => Promise.resolve(apiRes))
      .catch((apiResErr: any) => Promise.reject(apiResErr));
  };
}
