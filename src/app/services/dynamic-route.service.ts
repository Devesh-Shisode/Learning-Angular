// dynamic-route.service.ts
import { Injectable } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { MenuService, ApiMenuItem } from './menu.service';
import { COMPONENT_MAP } from '../models/component-map';
import { DynamicrouteComponent } from '../dynamicroute/dynamicroute.component';

@Injectable({ providedIn: 'root' })
export class DynamicRouteService {
  constructor(private router: Router, private menu: MenuService) {}

  async applyApiRoutes() {
    const items = await firstValueFrom(this.menu.getMenu());

    const apiChildRoutes: Routes = items
      .filter((i) => COMPONENT_MAP[i.component])
      .map((i) => ({
        path: i.path,
        component: COMPONENT_MAP[i.component],
        data: { label: i.label },
      }));

    const newConfig = this.router.config.map((r) => {
      if (r.component === DynamicrouteComponent) {
        const existing = r.children ?? [];

        const existingPaths = new Set(existing.map((c) => c.path));
        const toAdd = apiChildRoutes.filter((c) => !existingPaths.has(c.path!));
        return { ...r, children: [...existing, ...toAdd] };
      }
      return r;
    });

    this.router.resetConfig(newConfig);
  }
}
