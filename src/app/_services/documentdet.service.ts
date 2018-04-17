import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class DocumentDetService {
    user_id : any;
    constructor(private http: Http) { }

    getDocDet(user_id : any){
        this.user_id = user_id;
      return this.http.get('http://ec2-54-145-92-130.compute-1.amazonaws.com:5001/documentsdet/'+this.user_id).map((response: Response) => <any[]>response.json())
      .do(
        data => JSON.stringify(data)
      )
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }

}
