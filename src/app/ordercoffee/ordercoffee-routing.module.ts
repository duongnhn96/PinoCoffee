import { DetailComponent } from './../layout/detail/detail.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { OrderscreenComponent } from './orderscreen/orderscreen.component';
import { TableListComponent } from './table-list/table-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VieworderComponent } from './vieworder/vieworder.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'table',
    pathMatch: 'full'
  },
  {
    path: 'table',
    component: TableListComponent
  },
  {
    path: 'order',
    component: OrderscreenComponent
  },
  {
    path: 'orderlist',
    component: OrderlistComponent
  },
  {
    path: 'vieworder',
    component: VieworderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdercoffeeRoutingModule { }
