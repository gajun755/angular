import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  // userForm!:FormGroup
  constructor(
    private fb: FormBuilder,
    private api: ApiserviceService,
    private actRoute: ActivatedRoute,
    private ap: HttpClient
  ) {}

  userForm = new FormGroup({
    fullname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    mobile: new FormControl('', Validators.required),
    usrimg: new FormControl('', [Validators.required]),
  });

  errMsg = '';
  datasuccess = '';
  paramid: any = '';
  extension: string = '';
  selectedFile: File;
  file: File;
  selectedFiles?: FileList;
  ngOnInit(): void {
    this.paramid = this.actRoute.snapshot.paramMap.get('id');

    if (this.paramid != null) {
      this.api.getSingleUser(this.paramid).subscribe((res) => {
        //this.userForm=res;
        //console.log(res.fullname);

        console.log('value we git' + res);
        this.userForm.patchValue({
          fullname: res.fullname,
          email: res.email,
          mobile: res.mobile,
        });
      });
    }
  }

  userSubmit() {
    console.log('userSubmit method', this.userForm.value);
    const uploadImageData = new FormData();
    uploadImageData.append(
      'imageFile',
      this.selectedFile,
      this.selectedFile.name
    );
    uploadImageData;
    if (this.userForm.valid) {
      this.api.createData(this.userForm.value).subscribe((res) => {
        // console.log('data saved succesfully'+res);
        this.uploadImage(res.data.value('email'));
        this.datasuccess = 'data saved succesfully';
        this.userForm.reset();
      });
    } else {
      this.errMsg = 'All fields are required';
    }
  }

  updateUser() {
    console.log(this.userForm.value);
    this.api.updateData(this.userForm.value).subscribe((res) => {
      console.log('updateUser() method', res);
    });
  }

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
  }

  uploadImage(email: string) {

        this.api.uploadImage(this.selectedFile,email).subscribe((res)=>{
              console.log(res);
        })

  }
}
