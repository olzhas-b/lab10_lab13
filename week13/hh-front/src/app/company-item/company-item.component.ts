import { Component, OnInit } from '@angular/core';
import {Company} from '../model';
import {ProviderService} from '../provider.service';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-company-item',
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.css']
})
export class CompanyItemComponent implements OnInit {
  company: Company;
  constructor(private providerService: ProviderService,
              private route: ActivatedRoute,
              private location: Location) { }
  getCompany(): void {
    const companyid = +this.route.snapshot.paramMap.get('id');
    this.providerService.getCompany(companyid).subscribe(dish => this.company = dish);
  }
  back(): void {

    this.location.back();

  }
  ngOnInit(): void {
    this.getCompany();
  }

}
