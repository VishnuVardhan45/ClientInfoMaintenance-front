import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class FileService {
  api = "http://ec2-54-145-92-130.compute-1.amazonaws.com:5001/download";
//api = "http://localhost:5000/download";

constructor(private http: HttpClient) { }
  downloadFile(file:String)
  {
    var body = {filename:file};
    return this.http.post(this.api, body,{
      responseType:'blob',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });

  }
}
