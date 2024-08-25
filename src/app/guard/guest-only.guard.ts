import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthPortfolioService } from '../hexagonal/adapter/portfolio/auth.portfolio.service';

export const guestOnlyGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthPortfolioService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    router.navigate(['/home']);
    return false;
  } else {
    return true;
  }
};