import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RoleService {
  isEngineering(id: string) {
    return id.startsWith('e-');
  }
  isBusiness(id: string) {
    return id.startsWith('b-');
  }
}
