import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class HttpService {
    constructor(private http: HttpClient) {}

    post(serviceName: string, data: any){
        const headers = new HttpHeaders({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });

        const options = { headers: headers, withCredintials: false};
        const url = environment.apiUrl + serviceName;
        
        return this.http.post(url, data, options);

    }

    get(serviceName: string, data: any){
        const headers = new HttpHeaders({
            'Content-Type': 'multipart/form-data',
            'Authorization': `Token ${data.token}`
        });
    
        
        const options = { headers: headers};
        const url = environment.apiUrl + serviceName;
        
        return this.http.get(url, options);
    }
}
