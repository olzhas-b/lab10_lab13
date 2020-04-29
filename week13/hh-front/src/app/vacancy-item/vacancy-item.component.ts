import { Component, OnInit } from '@angular/core';
import {Company, Vacancy} from '../model';
import {ProviderService} from '../provider.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vacancy-item',
  templateUrl: './vacancy-item.component.html',
  styleUrls: ['./vacancy-item.component.css']
})
export class VacancyItemComponent implements OnInit {
  vacancy: Vacancy;
  constructor(private providerService: ProviderService,
              private route: ActivatedRoute,
              private location: Location) { }

  getVacancy(): void {
    const vacancyid = +this.route.snapshot.paramMap.get('id');
    this.providerService.getVacancy(vacancyid).subscribe(dish => this.vacancy = dish);
  }
  back(): void {

    this.location.back();

  }

  ngOnInit(): void {
    this.getVacancy();
  }

}
