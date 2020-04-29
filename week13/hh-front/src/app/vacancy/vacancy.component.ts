import { Component, OnInit } from '@angular/core';
import {Vacancy} from '../model';
import {ProviderService} from '../provider.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {
  vacancies: Vacancy[] = [];
  public id = +this.route.snapshot.paramMap.get('id');

  constructor(private providerService: ProviderService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getVacanciesList();
  }

  getVacanciesList() {
    this.providerService.getCompanyVacancy(this.id).subscribe(vacancies => this.vacancies = vacancies.filter(o => o.company === this.id));
    // ; console.log(this.dishes); } );

  }

  deleteVacancy(id) {
    this.providerService.deleteVacancy(id).subscribe(res => {
    });
    // this.categories = this.categories.filter(c => c.id != id);
    // this.getCategoryList();
  }
}
