import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ItechRequect } from '../../Interfaces/itech-requect';
import { map } from 'rxjs';
import { IcheckRequect } from '../../Interfaces/icheck-requect';
import { IApiResponse } from '../../Interfaces/iapi-response';
import { UserStorageService } from '../UserStorageService/user-storage-service';
import { IRequestApply } from '../../Interfaces/irequest-apply';

@Injectable({
  providedIn: 'root',
})
export class TechrequestService {
  constructor(
    private http: HttpClient,
    private userStorage: UserStorageService
  ) {}

  // private name=localStorage.getItem('token');

  ///get request by techid
  getAllbyid() {
    const technid = this.userStorage.getUserId();
    // console.log(technid);
    return this.http
      .get<any>(
        `http://localhost:5038/api/TRequestEmergency/assigned/${technid}`
      )
      .pipe(map((res) => res.data));
  }

  ///get all request
  getAll() {
    const technid = this.userStorage.getUserId();
    console.log('Fetching technician details for ID:', this.userStorage);
    return this.http
      .get<any>(`http://localhost:5038/api/TRequestEmergency/active/${technid}`)
      .pipe(map((res) => res.data));
  }

  ///accept or reject the request
  putcheck(x: IcheckRequect) {
    return this.http.put<IApiResponse<boolean>>(
      'http://localhost:5038/api/TRequestEmergency',
      x
    );
  }

  ///get the history of request
  gethistory() {
    const technid = this.userStorage.getUserId();
    // console.log(technid);
    return this.http
      .get<any>(
        `http://localhost:5038/api/TRequestEmergency/completed/${technid}`
      )
      .pipe(map((res) => res.data));
  }

  //get the apply request
  getapplyrequest() {
    const technid = this.userStorage.getUserId();
    console.log(technid);
    return this.http
      .get<any>(
        `http://localhost:5038/api/TRequestEmergency/applied/${technid}`
      )
      .pipe(map((res) => res.data));
  }

  ////post the apply request

  putapply(x: IRequestApply) {
    return this.http.post<IApiResponse<boolean>>(
      'http://localhost:5038/api/TRequestEmergency',
      x
    );
  }

  //get the accept request
  getacceptrequest() {
    const technid = this.userStorage.getUserId();
    console.log(technid);
    return this.http
      .get<any>(
        `http://localhost:5038/api/TRequestEmergency/accepted/${technid}`
      )
      .pipe(map((res) => res.data));
  }
}
