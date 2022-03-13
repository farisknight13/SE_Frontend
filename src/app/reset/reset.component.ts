import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Repassword } from 'src/app/models/repassword.model';
@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {

  }

  onSubmit(repasswordForm: NgForm) {
    if (repasswordForm.invalid) {
      return;
    }
    const values = repasswordForm.value;
    let repassword = new Repassword();
    repassword.oldpassword = values.oldpassword;
    repassword.newpassword = values.newpassword;
    repassword.confirmpassword = values.confrimpassword;

    alert(JSON.stringify(repassword));
  }
}
