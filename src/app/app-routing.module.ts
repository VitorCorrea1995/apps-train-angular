import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderRadiusConverterComponent } from './components/border-radius-converter/border-radius-converter.component';
import { RouterModule, Routes } from '@angular/router';
import { BinDecConverterComponent } from './components/bin-dec-converter/bin-dec-converter.component';
import { SimpleCalculatorComponent } from './components/simple-calculator/simple-calculator.component';
import { ColorCycleAppComponent } from './components/color-cycle-app/color-cycle-app.component';
import { MainPageBudgetComponent } from './components/budget-calculator/main-page-budget/main-page-budget.component';
import { MainSimpleNotesComponent } from './components/simple-notes/main-simple-notes/main-simple-notes.component';

const routes: Routes = [
  { path: 'bin-dec-converter', component: BinDecConverterComponent },
  { path: 'border-radius', component: BorderRadiusConverterComponent },
  { path: 'simple-calculator', component: SimpleCalculatorComponent},
  { path: 'color-cycle', component: ColorCycleAppComponent},
  { path: 'budget-calculator', component: MainPageBudgetComponent},
  { path: 'simple-notes', component: MainSimpleNotesComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
