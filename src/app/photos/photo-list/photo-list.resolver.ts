import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from '../photo/photo.interface';
import { PhotoService } from '../photo/photo.service';

@Injectable({providedIn: "root"})
export class PhotoListResolver implements Resolve<Observable<Photo[]>> {
    
    constructor(private photoService: PhotoService) {}

    resolve(route: ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<Photo[]> | Observable<Observable<Photo[]>> | Promise<Observable<Photo[]>> {
          const userName = route.params.userName;
          return this.photoService.listFromUserPaginated(userName, 1);
    }

}