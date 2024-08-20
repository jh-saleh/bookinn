import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
//https://stackoverflow.com/questions/78538054/angular-17-ssr-and-leaflet-ngx-leaflet-ngx-leaflet-draw
@Injectable({
    providedIn: 'root',
})
export class LeafletLoadingService {
    public L: any = null;

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        if (this.platformId === 'browser') {
            this.L = import('leaflet');
        }
    }

    async loadLeaflet() {
        this.L = await this.L;
        return this.L;
    }
}
