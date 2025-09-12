// component-map.ts
import { Type } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SettingComponent } from '../setting/setting.component';
import { RandomuserComponent } from '../randomuser/randomuser.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
 

export const COMPONENT_MAP: Record<string, Type<any>> = {
  DashboardComponent,
  RandomuserComponent,
  SettingComponent,
  UserProfileComponent
};
