import { SharedModule } from './../share/shared.module';
import { NgModule } from '@angular/core';
import { OrdercoffeeRoutingModule } from './ordercoffee-routing.module';
import { TableListComponent } from './table-list/table-list.component';
import { TableComponent } from './table/table.component';
import { ItemComponent } from './item/item.component';
import { OrderscreenComponent } from './orderscreen/orderscreen.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { VieworderComponent } from './vieworder/vieworder.component';

@NgModule({
  imports: [
    SharedModule,
    OrdercoffeeRoutingModule
  ],
  declarations: [TableListComponent, TableComponent, ItemComponent, OrderscreenComponent, OrderlistComponent, VieworderComponent]
})
export class OrdercoffeeModule { }
