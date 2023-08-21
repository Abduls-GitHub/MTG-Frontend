import {Component, OnInit} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {NzMessageService} from "ng-zorro-antd/message";
import {DashboardService} from "../dashboard/dashboard.service";
import {TransferChange, TransferItem, TransferSelectChange} from "ng-zorro-antd/transfer";
import {DashboardInterface} from "../dashboard/dashboard.interface";

@Component({
  selector: 'app-bulk-meter',
  templateUrl: './bulk-meter.component.html',
  styleUrls: ['./bulk-meter.component.less']
})
export class BulkMeterComponent implements OnInit {
  constructor(private fb: UntypedFormBuilder, private message: NzMessageService, private dashboardService: DashboardService) {
  }

  validateForm!: UntypedFormGroup;
  display: boolean = false;

  //for transfer table
  list: TransferItem[] = [];
  disabled: boolean = false;
  showSearch: boolean = true;

  //

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      meter: [null, [Validators.required]],
      tokens: [null, [Validators.required]],
      amount: [null, [Validators.required]]
    });

    //for transfer table
    this.dashboardService.getMeters().subscribe(
      (data : DashboardInterface[]) => {
        this.list = this.dashboardService.mapToTransferItems(data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      })
    //

    //for transfer table
    for (let i = 0; i < this.list.length; i++) {
      this.list.push({
        key: i.toString(),
        title: ``,
        checked: false
      });
    }
    [2, 3].forEach(idx => (this.list[idx].direction = 'right'));
  }

  //

  //for transfer table
  select(ret: TransferSelectChange): void {
    console.log('nzSelectChange', ret);
  }

  //

  //for transfer table
  change(ret: TransferChange): void {
    console.log('nzChange', ret);
    const listKeys = ret.list.map(l => ['key']);
    const hasOwnKey = (e: TransferItem): boolean => e.hasOwnProperty('key');
    this.list = this.list.map(e => {
      if (listKeys.includes(['key']) && hasOwnKey(e)) {
        if (ret.to === 'left') {
          delete e.hide;
        } else if (ret.to === 'right') {
          e.hide = false;
        }
      }
      return e;
    });
  }

  //


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
