import 'rxjs/add/operator/map'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { environment } from '../../environments/environment';
import { RequestOptions } from '@angular/http';

@Injectable()
export class PlthttpProvider {
    headers: HttpHeaders;
    endpoint: string;
    private apiUrl = 'https://plentycore.staging.dept42.de/';

    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        this.endpoint = this.apiUrl;
    }


    postJson(path, data) {
        console.log('Calling ' + this.endpoint + path + ' with request body: ' + JSON.stringify(data));
        return this.http.post(this.endpoint + path,
            JSON.stringify(data), { headers: this.headers });
    }

    getJson(path) {
        console.log('Calling ' + this.endpoint + path);
        return this.http.get(this.endpoint + path, { headers: this.headers });
    }

    putJson(path, data) {
        console.log('Calling ' + this.endpoint + path + ' with request body: ' + JSON.stringify(data));
        return this.http.put(this.endpoint + path,
            JSON.stringify(data), { headers: this.headers });
    }

    deleteJson(path) {
        console.log('Calling ' + this.endpoint + path);
        return this.http.delete(this.endpoint + path, { headers: this.headers });
    }

    getJsonWithData(path, parameters) {
        console.log(parameters);
        return this.http.get(this.endpoint + path, { headers: this.headers, params: parameters });
    }
    postFile(path, data) {
        return this.http.post(this.endpoint + path, data);
    }


}
