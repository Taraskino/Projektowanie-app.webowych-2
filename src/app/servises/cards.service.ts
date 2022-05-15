import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Card } from "../models/card-model";

const BASE_API_URL = "http://localhost:8080/categories";

@Injectable({
  providedIn: "root",
})
export class CardsService {
  constructor(private httpClient: HttpClient) {}

  getCardsForCategory(categoryId: number): Observable<Card[]> {
    return this.httpClient.get<Card[]>(`${BASE_API_URL}/${categoryId}/cards`);
  }

  addCard(categoryId: number, card: Card): Observable<Card> {
    return this.httpClient.post<Card>(
      `${BASE_API_URL}/${categoryId}/cards`,
      card
    );
  }
  removeCard(categoryId: number, cardId: number): Observable<any> {
    return this.httpClient.delete(`${BASE_API_URL}/cards/${cardId}`);
  }
}
