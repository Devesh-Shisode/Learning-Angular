// dynamic-route.service.ts
import { Injectable } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { MenuService, ApiMenuItem } from './menu.service';
import { COMPONENT_MAP } from '../models/component-map';
import { DynamicrouteComponent } from '../dynamicroute/dynamicroute.component';

@Injectable({ providedIn: 'root' })
export class DynamicRouteService {
  constructor(private router: Router, private menu: MenuService) {
    console.log(this.router);
  }
    
    
  async applyApiRoutes() {
    const items = await firstValueFrom(this.menu.getMenu());
    console.log("items from dynamic routes : items",items);
    
    const apiChildRoutes: Routes = items
      .filter((i) => COMPONENT_MAP[i.component])
      .map((i) => ({
        path: i.path,
        component: COMPONENT_MAP[i.component],
        data: { label: i.label },
      }));
    console.log("items from dynamic routes : apichildroutes",apiChildRoutes);
    const newConfig = this.router.config.map((r) => {
      if (r.component === DynamicrouteComponent) {
        const existing = r.children ?? [];
        console.log("items from dynamic routes : existing",existing);
        const existingPaths = new Set(existing.map((c) => c.path));
        console.log("items from dynamic routes : existingPaths",existingPaths);
        const toAdd = apiChildRoutes.filter((c) => !existingPaths.has(c.path!));
        console.log("items from dynamic routes : toAdd",toAdd);
        return { ...r, children: [...existing, ...toAdd] };
      }
      console.log("Return value if condition not satisfied",r);
      
      return r;
    });
    console.log("New Config",newConfig);
    
    this.router.resetConfig(newConfig);
    console.log(this.router.resetConfig(newConfig));
    
  }
}
