import { Component, OnInit } from '@angular/core';
import { User } from '../_models/index';
import { UserService, UploadService } from '../_services/index';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  currentUser: User;
  users: User[] = [];
  fileList: FileList;
  filesToUpload: Array<File> = [];
  uploadObj : any= {} ;
  constructor(private userService: UserService, private uploadService: UploadService) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }


  ngOnInit() {
  }
  
  fileChange(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
}

  upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    console.log(files);
    for (let i = 0; i < files.length; i++) {
        formData.append("file", files[0], files[0]['name']);
        formData.append("doctype", this.uploadObj.doctype);
        formData.append("docfinyear", this.uploadObj.docfinyear);
        formData.append("docdesc", this.uploadObj.docdesc);
        formData.append("doccustid",this.currentUser._id)
    }
    console.log('form data variable :   ' + formData.toString());
    this.uploadService.upload(formData).subscribe(
        data => {
            console.log('success')
        },
        error => {
            console.log(error)
        }
    );
   
}
}
