import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SubsidyComponent} from "./subsidy/subsidy.component";
import {RiceComponent} from "./rice/rice.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {DhalComponent} from "./dhal/dhal.component";
import {OilComponent} from "./oil/oil.component";
import {PaasiParuppuComponent} from "./paasi-paruppu/paasi-paruppu.component";
import {KondaKadalaiComponent} from "./konda-kadalai/konda-kadalai.component";
import {SaltComponent} from "./salt/salt.component";

const routes: Routes = [
  {
    path: 'subsidy',
    component: SubsidyComponent
  },
  {
    path: '',
    component: RiceComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'dhal',
    component: DhalComponent
  },
  {
    path: 'oil',
    component: OilComponent
  },
  {
    path: 'paasiParuppu',
    component: PaasiParuppuComponent
  },
  {
    path: 'kondaKadalai',
    component: KondaKadalaiComponent
  },
  {
    path: 'salt',
    component: SaltComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
