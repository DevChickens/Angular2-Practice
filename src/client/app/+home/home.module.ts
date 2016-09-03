import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { ModalModule } from '../../tdk/modal/modal.module';
import { SubHomeComponent } from './subHome/sub-home.component';

export const routerConfig = [{
  path: '',
  component: HomeComponent
}];

@NgModule({
  imports: [CommonModule, ModalModule.forRoot(), RouterModule.forChild(routerConfig)],
  declarations: [HomeComponent, SubHomeComponent],
  exports: [HomeComponent]
})
export default class HomeModule { }
