import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
 
import { LoginComponent } from './login/login.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartComponent } from './cart/cart.component';
import { AuthGuard } from './guards/auth.guard';
import { YahoofinaceComponent } from './yahoofinace/yahoofinace.component';
import { RandomuserComponent } from './randomuser/randomuser.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { MovielistComponent } from './movielist/movielist.component';
import { NgcontainerComponent } from './ngcontainer/ngcontainer.component';
import { InputformComponent } from './inputform/inputform.component';
import { DynamicrouteComponent } from './dynamicroute/dynamicroute.component';
import { SerachsortComponent } from './serachsort/serachsort.component';

const routes: Routes = [
  { path: 'yahoofince', component: YahoofinaceComponent },
  {
    path: 'todo',
    canActivate: [AuthGuard],
    loadChildren: () => import('./todo/todo.module').then((m) => m.TodoModule),
  },
  {path : 'random' ,component : RandomuserComponent},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'productdetail', component: ProductdetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  {path : 'lifecyclehook' , component : LifecyclehooksComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path : 'movielist', component : MovielistComponent},
  {
    path: 'product',
    loadChildren: () =>
      import('./product/product.module').then((m) => m.ProductModule),
  },
  {path : 'ngcontent' , component : NgcontainerComponent},
  {path :'input-handling-tdf' ,component : InputformComponent},
  // {path :'**' , component : PagenotfoundComponent}
  {path : 'dynamic' , component : DynamicrouteComponent ,
    
    children : [
        {path : '' ,redirectTo : 'dynamic', pathMatch : 'full'}
  ]},
  {path : 'serachsort' , component : SerachsortComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor() {
    console.log('AppRoutingModule called');
  }
}
