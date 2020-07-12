import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';


import { FooterComponent } from './layout/footer/footer.component';
import { SideNavComponent } from './layout/sidenav/side-nav.component';

import { BorderRadiusConverterComponent } from './components/border-radius-converter/border-radius-converter.component';
import { AppRoutingModule } from './app-routing.module';
import { BinDecConverterComponent } from './components/bin-dec-converter/bin-dec-converter.component';
import { OnlyNumber } from './directives/only-number.directive';
import { SimpleCalculatorComponent } from './components/simple-calculator/simple-calculator.component';
import { ColorCycleAppComponent } from './components/color-cycle-app/color-cycle-app.component';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';
import { MainPageBudgetComponent } from './components/budget-calculator/main-page-budget/main-page-budget.component';
import { AddItemFormBudgetComponent } from './components/budget-calculator/add-item-form-budget/add-item-form-budget.component';
import { BudgetItemListComponent } from './components/budget-calculator/budget-item-list/budget-item-list.component';
import { BudgetItemCardComponent } from './components/budget-calculator/budget-item-list/budget-item-card/budget-item-card.component';
import { NotesListComponent } from './components/simple-notes/main-simple-notes/notes-list/notes-list.component';
import { MainSimpleNotesComponent } from './components/simple-notes/main-simple-notes/main-simple-notes.component';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { NoteCardComponent } from './components/simple-notes/main-simple-notes/notes-list/note-card/note-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BorderRadiusConverterComponent,
    BinDecConverterComponent,
    OnlyNumber,
    SimpleCalculatorComponent,
    ColorCycleAppComponent,
    CountdownTimerComponent,
    FooterComponent,
    SideNavComponent,
    MainPageBudgetComponent,
    AddItemFormBudgetComponent,
    BudgetItemListComponent,
    BudgetItemCardComponent,
    NotesListComponent,
    MainSimpleNotesComponent,
    TopBarComponent,
    NoteCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatSlideToggleModule,
    AppRoutingModule,
    DragDropModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
