import { Component, OnInit } from '@angular/core';

import {ProviderService} from '../provider.service';
import {Company} from '../model';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: Company[] = [];

  constructor(public providerService: ProviderService) {
  }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies() {
    this.providerService.getCompanyList().subscribe(companies => this.companies = companies);
  }

  deleteCompany(id) {
    this.providerService.deleteCompany(id).subscribe(res => {
      // this.categories = this.categories.filter(c => c.id != id);
      // this.getCategoryList();
    });
  }
}
