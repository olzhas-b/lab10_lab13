import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Company, LoginResponse, Vacancy} from './model';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  BASE_URL = 'http://localhost:8000';
  constructor(private http: HttpClient) {}
  getCompanyList(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.BASE_URL}/api/companies/`);
  }


  getCompany(id): Observable<Company> {
    return this.http.get<Company>(`${this.BASE_URL}/api/companies/${id}/`);
  }
  getVacancy(id): Observable<Vacancy> {
    return this.http.get<Vacancy>(`${this.BASE_URL}/api/vacancies/${id}/`);
  }
  getCompanyVacancy(companyId: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>( `${this.BASE_URL}/api/companies/${companyId}/vacancies/`);
  }

  deleteCompany(id): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/api/companies/${id}/`);
  }
  deleteVacancy(id): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/api/vacancies/${id}/`);
  }

  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    });
  }
}
