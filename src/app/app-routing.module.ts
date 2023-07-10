import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SubsidyComponent} from "./subsidy/subsidy.component";
import {BudgetComponent} from "./budget/budget.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";

const routes: Routes = [
  {
    path: 'subsidy',
    component: SubsidyComponent
  },
  {
    path: 'budget',
    component: BudgetComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
