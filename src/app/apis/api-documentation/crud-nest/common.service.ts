import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  readonly url = 'http://localhost:4200/db';
  private apiKey = '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';
  private apiUrl = 'https://api.chatgpt.com/v1/chat/completions';

  constructor(private http: HttpClient) {}

  sendMessage(message: string) {
    const requestBody = {
      prompt: message,
      max_tokens: 50,
    };

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    };

    return this.http.post<any>(this.apiUrl, requestBody, { headers });
  }

  AddUpdateUser(User: any, type: any): Observable<any> {
    if (type == 'Add') {
      return this.http.post(this.url + 'Users', User);
    } else {
      return this.http.put(this.url + 'Users/' + User.id, User);
    }
  }

  GetAllUsers(): Observable<any> {
    return this.http.get(this.url + 'Users');
  }

  DeleteUserByID(ID: any): Observable<any> {
    return this.http.delete(this.url + 'Users/' + ID);
  }

  GetUserByID(ID: any): Observable<any> {
    return this.http.get(this.url + 'Users/' + ID);
  }
}
