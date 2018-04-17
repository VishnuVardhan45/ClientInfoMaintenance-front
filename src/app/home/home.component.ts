import { Component, OnInit } from '@angular/core';
import { User } from '../_models/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent implements OnInit {
    currentUser: User;
    currentPage: any;
    constructor() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.currentPage = "Search";
    }

    ngOnInit() {
    }

   

   
}
