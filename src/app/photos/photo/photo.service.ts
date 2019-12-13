import { OnInit, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Photo } from "./photo.interface";
import { ActivatedRoute } from '@angular/router';

const API = "http://localhost:3000/";

@Injectable({ providedIn: "root"})
export class PhotoService implements OnInit {

    constructor(private http: HttpClient, private activateddRoute: ActivatedRoute){}

    ngOnInit(): void {
        //const userName = this.activateddRoute.snapshot.params.userName;

    }
    
    listFromUser(userName: string): Observable<Photo[]>{
        return this.http.get<Photo[]>(API + userName + "/photos");
}

}