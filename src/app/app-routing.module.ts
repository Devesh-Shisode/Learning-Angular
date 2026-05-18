import { NgModule } from '@angular/core';
 
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
import { IdRouteComponent } from './id-route/id-route.component';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { SetvalueComponent } from './setvalue/setvalue.component';
import { CvSliderComponent } from './cv-slider/cv-slider.component';
import { FormulaEditorComponent } from './formula-editor/formula-editor.component';

const routes: Routes = [
  { path: 'yahoofince', component: YahoofinaceComponent },
  { path:'setvalue', component : SetvalueComponent},
  {
    path: 'todo',
    canActivate: [AuthGuard],
    loadChildren: () => import('./todo/todo.module').then((m) => m.TodoModule),
  },
  {
    path :'cart-item' , component : CartItemComponent
  },
  {path : 'random' ,component : RandomuserComponent},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {path : 'product-list' , component : ProductlistComponent},
  { path: 'productdetail', component: ProductdetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  {path : 'lifecyclehook' , component : LifecyclehooksComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path : 'movielist', component : MovielistComponent},
  {path : 'calculated', component : CvSliderComponent},
  {path : 'formula', component : FormulaEditorComponent},
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
  {path : 'serachsort' , component : SerachsortComponent},
  {path : 'user/:id' , component : IdRouteComponent},
  {path :'dashboard' ,component : DashboardComponent}
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
