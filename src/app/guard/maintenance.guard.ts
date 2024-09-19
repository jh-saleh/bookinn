import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { environment } from '../../environments/environment';

export const maintenanceGuard: CanActivateFn = (route, state) => {
    const router = inject(Router);

    if (environment.isMaintained) {
        router.navigate(['/maintenance']);
        return false;
    } else {
        return true;
    }
};