import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
 
 
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }




  title:string='List of post';
  messagePost:string='Message Post';
  postParemtMessage:string='Message coming from the post parent';


  @Input() fromParent:string | undefined;

  childMessage:string='From child component';
  outputChildMessage:string='Message from child component via output';

  @Output() messageEvent=new EventEmitter<string>();

  sendMessage(){
    this.messageEvent.emit(this.outputChildMessage);
  }


}
