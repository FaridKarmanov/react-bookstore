import axios from "axios";
import { IBookDetails, IBookResponse } from "../types";

class BookStoreApi {
  private readonly BASE_URL = "https://api.itbook.store/1.0/";

  private readonly API = axios.create({
    baseURL: this.BASE_URL,
  });

  public async getNew() {
    const { data } = await this.API.get<IBookResponse>("new");

    return data;
  }

  public async getSearch(searchValue: string) {
    const params = {
      searchValue: searchValue,
    };
    const { data } = await this.API.get("search", { params });

    return data;
  }

  public async getBook(isbn13: string) {
    const { data } = await this.API.get<IBookDetails>(`books/${isbn13}`);

    return data;
  }
}

export const bookstoreAPI = new BookStoreApi();
