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
    // recherche un utilisateur 
    GetById(id : number) : Observable<utilisateur>{
        
        var utilisateur = this._client.get<utilisateur>(`${environment.apiUrl}/Utilisateur/${id}`);
        return utilisateur;
    }
    
    // mise a jour d'un utilisateur
    update(id: number, nom: string, prenom: string, dateNaissance: Date, email: string, password: string) {
        console.log("je passe dans mon update")
        let token : string = sessionStorage.getItem("currentUser")
        for (let i = 0; i < token.length; i++) {
            token = token.replace('"', '')
        }
        token = "Bearer " + token

        const headers = new HttpHeaders({
            'content-type': 'application/json',
            
            'Authorization': token
        }) 
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

    // suprimmer un utilisateur
    Delete(id: number)
    {
        return this._client.delete(`${environment.apiUrl}/utilisateur/${id}`);//
    }
}