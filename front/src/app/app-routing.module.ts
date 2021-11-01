import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanningComponent } from './components/planning/planning.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/planning', pathMatch: 'full'},
  {path: 'planning', component: PlanningComponent, data: {tag: 'menu', icon: 'today', title: 'Planning'}},
  {path: 'recipes', component: RecipesComponent, data: {tag: 'menu', icon: 'menu_book', title: 'Recipes'}},
  {path: 'shopping-list', component: ShoppingListComponent, data: {tag: 'menu', icon: 'shopping_cart', title: 'Shopping list'}},
  {path: '**', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
