import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {


  register!:FormGroup
  title='formvalidation'

      reactform=new FormGroup([
          //name =new FormControl('')
      ])

      constructor(private formbuiler:FormBuilder){}

        ngOnInit(): void {
            this.formbuiler.group({
              firstName:['',Validators.required],
              lastName:['',Validators.required],
              email:['',Validators.required],
              password:['',Validators.required]
            })
        }
        
        onSubmit(){
          
        }
}
