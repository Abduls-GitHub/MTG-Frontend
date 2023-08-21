import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DashboardInterface} from "./dashboard.interface";
import {Observable} from "rxjs";
import {TransferItem} from "ng-zorro-antd/transfer";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {
  }

  getMeters() {
    return this.http.get<DashboardInterface[]>('http://localhost:3000/meters')
  }

  getOneMeter(meterId: Object): Observable<DashboardInterface> {
    return this.http.get<DashboardInterface>(`http://localhost:3000/meters/${meterId}`);
  }

  mapToTransferItems(data: DashboardInterface[]): TransferItem[] {
    return data.map(item => ({
      ...item,
      key: item.id.toString(), // Assuming 'id' is a unique identifier in DashboardInterface
      title: item.serialNo, // Use a relevant field for the title
      // Map other necessary properties to match TransferItem structure
    }));
  }
}
