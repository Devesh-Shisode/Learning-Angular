import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { HoverDirective } from './directives/hover.directive';
import { TdfComponent } from './tdf/tdf.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CoursesComponent } from './courses/courses.component';
import { CourslistComponent } from './courslist/courslist.component';
import { MyServiceService } from './services/my-service.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import { FilterCompletedPipe } from './pipes/filter-completed.pipe';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TodoModule } from './todo/todo.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { YahoofinaceComponent } from './yahoofinace/yahoofinace.component';
// import { RapidApiInterceptor } from './interceptors/rapid-api.interceptor';
import { RandomuserComponent } from './randomuser/randomuser.component';
import { Chat1Component } from './chat1/chat1.component';
import { Chat2Component } from './chat2/chat2.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { MovielistComponent } from './movielist/movielist.component';
import { NgcontainerComponent } from './ngcontainer/ngcontainer.component';
import { InputformComponent } from './inputform/inputform.component';
import { DynamicrouteComponent } from './dynamicroute/dynamicroute.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingComponent } from './setting/setting.component';
import { DynamicRouteService } from './services/dynamic-route.service';
import { SerachsortComponent } from './serachsort/serachsort.component';
import { IdRouteComponent } from './id-route/id-route.component';
import { cartReducer } from './store/cart/cart.reducer';
import { productsReducer } from './store/products/products.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CartEffects } from './store/cart/cart.effects';
import { ProductsEffects } from './store/products/products.effects';
import { counterReducer } from './store/counter/counter.reducer';
import { SetvalueComponent } from './setvalue/setvalue.component';
import { CvSliderComponent } from './cv-slider/cv-slider.component';
import { FormulaEditorComponent } from './formula-editor/formula-editor.component';

const reducers = {
  products: productsReducer,
  cart: cartReducer
};

export function initRoutes(dyn: DynamicRouteService) {
  return async () => {
    try {
      await dyn.applyApiRoutes();  
    } catch (error) {
      console.error('Failed to load dynamic routes:', error);
      dyn.setInitError(true); 
     
    }
  };
}

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    StructuralDirectiveComponent,
    ProductlistComponent,
    ProductdetailsComponent,
    CartComponent,
    CartItemComponent,
    HoverDirective,
    TdfComponent,
    ReactiveformComponent,
    HighlightDirective,
    CoursesComponent,
    CourslistComponent,
    //FilterCompletedPipe,
    HomeComponent,
    AboutComponent,
    PagenotfoundComponent,
    LoginComponent,
    LogoutComponent,
    YahoofinaceComponent,
    RandomuserComponent,
    Chat1Component,
    Chat2Component,
    LifecyclehooksComponent,
    MovielistComponent,
    NgcontainerComponent,
    InputformComponent,
    DynamicrouteComponent,
    DashboardComponent,
    SettingComponent,
    SerachsortComponent,
    IdRouteComponent,
    SetvalueComponent,
    CvSliderComponent,
    FormulaEditorComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot( {counter: counterReducer,
                          products: productsReducer,
                          cart: cartReducer}),

    EffectsModule.forRoot( [ProductsEffects, CartEffects],),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    ToastrModule.forRoot({
       timeOut: 3000,
       positionClass: 'toast-top-right',
       preventDuplicates: true
    }),
    
  ],
  providers: [MyServiceService,
  //    {
  //     provide : HTTP_INTERCEPTORS,
  //     useClass : RapidApiInterceptor,
  //     multi : true
  // }
  
  { provide: APP_INITIALIZER, useFactory: initRoutes, deps: [DynamicRouteService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(){
    console.log('AppModule called');
  }
}
