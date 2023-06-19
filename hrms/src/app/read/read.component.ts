import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  constructor(private apiService:ApiserviceService){

  }

  readUser:any;
  ngOnInit(): void {
        this.apiService.getAllUsers().subscribe((res)=>{
            console.log("data we get from backend",res);
            this.readUser=res;
          })
  }


  deleteuser(data:string){
    console.log(data);
    this.apiService.deleteUser(data).subscribe((res)=>{
        console.log(res);
        
    });
  }

  updateUser(data:object){
    console.log('Update User',data);
        
  }

}
