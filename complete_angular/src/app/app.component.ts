import { Component ,ViewChild,AfterViewInit,OnInit} from '@angular/core';
import {PostComponent} from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit,OnInit  {
  title = 'complete_angular';
  parentMessage:string="Message coming from parent component";
  message:string | undefined

  @ViewChild(PostComponent) chilComp: any;
  
  fromChildOutput:string | undefined;

  imgUrl:string='https://smaller-pictures.appspot.com/images/dreamstime_xxl_65780868_small.jpg';

  constructor(){
    console.log(this.chilComp);
  }
  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    
    this.message=this.chilComp.childMessage;
    
  }


  recieveMessage($event: any){
    console.log($event);
    this.fromChildOutput=$event;
  }
}
