import { HttpClient, HttpHeaders } from "@angular/common/http";
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
        return utilisateur;
    }

    update(id: number, nom: string, prenom: string, dateNaissance: Date, email: string, password: string) {
        console.log("je passe dans mon update")
        // headers.set('Bearer', sessionStorage.getItem("currentUser"))
        const headers = {
            'content-type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem("currenUser")
        }
        return this._client.patch(
            `${environment.apiUrl}/utilisateur/${id}`,
            {
                nom: nom,
                prenom: prenom,
                dateNaissance: dateNaissance,
                email: email,
                password: password
            },
            {'headers' : headers}
        )
    }
}