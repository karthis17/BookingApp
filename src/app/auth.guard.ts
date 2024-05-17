import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UserAuthService } from './service/user-auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  return new Promise<boolean>((resolve, reject) => {

    const router = new Router();

    inject(UserAuthService).isAuthenticated.subscribe(user => {
      if (user)
        resolve(true);
      else {
        router.navigate(['/login']);
        reject(false);
      }
    });

  });

};
