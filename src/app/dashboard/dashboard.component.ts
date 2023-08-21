import {Component, OnInit} from '@angular/core';
import {NzMessageService} from "ng-zorro-antd/message";
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {DashboardService} from "./dashboard.service";
import {DashboardInterface} from "./dashboard.interface";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  meterList: DashboardInterface[] = [];

  constructor(private dashboardService: DashboardService, private fb: UntypedFormBuilder, private message: NzMessageService) {
  }

  validateForm!: UntypedFormGroup;
  display: boolean = false;

  submitForm(): void {
    if (this.validateForm.valid) {
      this.createBasicMessage()
      console.log('submit', this.validateForm.value);
      this.update();
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });
    }
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      meter: [null, [Validators.required]],
      tokens: [null, [Validators.required]],
      amount: [null, [Validators.required]]
    });

    this.dashboardService.getMeters().subscribe((response) => {
      console.log("in dashboard component --> service being called")
      this.meterList = response;
    })
  }

  update() {
    this.display = true
  }

  createBasicMessage(): void {
    const id = this.message.loading('Generating tokens..', {nzDuration: 0}).messageId;
    setTimeout(() => {
      this.message.remove(id);
    }, 500);
  }

  logout() {
    const id = this.message.loading('Logging out..', {nzDuration: 0}).messageId;
    setTimeout(() => {
      this.message.remove(id);
    }, 5000);
  }
}
