import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators'
//library
import { saveAs } from 'file-saver';
//enviroments
import { environment } from '../../environments/environment'
//models
import { File } from '../models/file.model';


@Injectable({
  providedIn: 'root'
})
export class FilesService {
   //start:proxy o start
   private API_URL = `${environment.API_URL}/api`;

  constructor(
    private http:HttpClient
  ) { }

  //get and download file
  getFile(name:string, url:string, type:string) {
    return this.http
      .get(url, { responseType: 'blob'})
      //descargar el archivo
      .pipe(
        tap(content => {
          const blob = new Blob([content], { type });
          saveAs(blob, name);
        }),
        map(() => true)
      );
  }

  uploadFile(file:Blob) {
    const dto = new FormData();
    dto.append('file', file);

    return this.http
      .post<File>(`${this.API_URL}/files/upload`, dto, {
        //ALGUNOS BAKEND LO REQUIEREN
        // headers: {
        //   'Content-type': 'multipart/form-data'
        // }
      })
  }

}
