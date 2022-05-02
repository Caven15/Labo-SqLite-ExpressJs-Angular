import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { fourniture } from "../models/fourniture/fourniture.model";


@Injectable({
    providedIn: 'root'
})
export class fournitureService {
    constructor(private _client: HttpClient) {}

    // retourne une commande
    getById(id : number) : Observable<any> 
    {
        var fourniture = this._client.get(`${environment.apiUrl}/fourniture/${id}`)
        return fourniture
    }
    // retourne toute les commande d'un utilisateur
    getAllById(id : number) : Observable<any> 
    {
        var fourniture = this._client.get(`${environment.apiUrl}/fourniture`)
        return fourniture
    }

    // ajoute une nouvelle commande
    add(fourniture : fourniture) {
        return this._client.post(`${environment.apiUrl}/fourniture`,
        {
            nom : fourniture.nom,
            quantite : fourniture.quantite,
            id_utilisateur : fourniture.id_utilisateur
        }
        )
    }

    // met a jour une commande existante
    update(id : number, nom : string, quantite : number, id_utilisateur : number) {
        return this._client.patch(`${environment.apiUrl}/fourniture/${id}`,
        {
            nom : nom,
            quantite : quantite,
            id_utilisateur : id_utilisateur
        }
        )
    }

    // supprime une commande
    Delete(id: number)
    {
        return this._client.delete(`${environment.apiUrl}/fourniture/${id}`);//
    }
}