import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { utilisateur } from "../models/utilisateur/utilisateur.model";


@Injectable({
    providedIn: 'root'
})
export class utilisateurService {
    constructor(private _client: HttpClient) {}

    GetById(id : number) : Observable<utilisateur>{
        
        var utilisateur = this._client.get<utilisateur>(`${environment.apiUrl}/Utilisateur/${id}`);
        console.log("utilisateur :" + utilisateur)
        return utilisateur;
    }
}