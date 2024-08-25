import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthPortfolioService } from '../hexagonal/adapter/portfolio/auth.portfolio.service';

export const userOnlyGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthPortfolioService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['/login'], {
      queryParams: {
        redirectUrl: state.url,
      },
    });
    return false;
  }
};
