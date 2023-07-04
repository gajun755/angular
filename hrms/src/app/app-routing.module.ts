import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

const routes: Routes = [

      
      {path:'create',component:CreateComponent},
      {path:'create/:id',component:CreateComponent},
      {path:'read',component:ReadComponent},
      {path:'react',component:ReactiveformComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
