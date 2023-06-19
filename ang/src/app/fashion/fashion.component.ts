import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent implements OnInit {

      id:string|any;
      id2:string|any;
      constructor(private route: ActivatedRoute){}
 
       ngOnInit() {
          this.id=this.route.snapshot.paramMap.get('id')
          this.id2=this.route.snapshot.paramMap.get('id2')
          console.log(this.id);
          console.log(this.id2);
        }

      
}
