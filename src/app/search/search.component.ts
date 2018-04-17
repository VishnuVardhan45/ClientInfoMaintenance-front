import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DocumentDetService,FileService } from '../_services/index';
import { User  } from '../_models/index';
import {saveAs} from 'file-saver';
@Component({
    selector : 'app-search',
    moduleId: module.id.toString(),
    templateUrl: 'search.component.html',
    styleUrls:['search.component.css']
})

export class SearchComponent implements OnInit {
  DocDetData: any = [];
  TotalDocsData:any = [];
  currentUser: User;
  constructor(private documentDetService: DocumentDetService , private fileService : FileService ) {
     this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.documentDetService.getDocDet(this.currentUser._id).subscribe(DocDetData => {
    this.DocDetData = DocDetData,
    DocDetData.forEach((key: any) => {
           this.TotalDocsData.push(key);
    });
    });
  }
download(filename)
{
  console.log(filename);
    this.fileService.downloadFile(filename).subscribe(
      data =>saveAs(data,filename),
      error =>{ console.error(error)}
    );
}

/*    getDocDetails()
    {
      this.documentDetService.getDocDet().subscribe(DocDetData => {
      this.DocDetData = DocDetData,
      DocDetData.forEach((key: any) => {
             this.TotalDocsData.push(key);
      });
      });
    }*/
}
