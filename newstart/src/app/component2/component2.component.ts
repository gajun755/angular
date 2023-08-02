import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component {



      constructor(private fb:FormBuilder){

      }

      signupForm=this.fb.group({
          username : ['',Validators.required]          
})

userform(){
  console.log(this.signupForm.get) 
}


}
