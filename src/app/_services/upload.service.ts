import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class UploadService {
    api = "http://ec2-54-145-92-130.compute-1.amazonaws.com:5001/upload";
    constructor(private http: Http) { }

    upload(formData) {
        // let formData:FormData = new FormData();
        // formData.append('file', file, file.name);
        // let headers = new Headers();
        // headers.append('Content-Type', 'multipart/form-data');
        // // headers.append('Accept', 'application/json');
        // let options = new RequestOptions({ headers: headers });

        return this.http.post(this.api, formData)
            .map(response => {
               return response.json();
            })
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    
}