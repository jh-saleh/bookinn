import { environment } from "../../environments/environment";
import { HostService } from "./adapter/normal/host.service";
import { LandService } from "./adapter/normal/land.service";
import { StayService } from "./adapter/normal/stay.service";
import { HostPortfolioService } from "./adapter/portfolio/host.portfolio.service";
import { LandPortfolioService } from "./adapter/portfolio/land.portfolio.service";
import { StayPortfolioService } from "./adapter/portfolio/stay.portfolio.service";
import { HostPort } from "./domain/port/host.port";
import { LandPort } from "./domain/port/land.port";
import { StayPort } from "./domain/port/stay.port";

export const hostServiceFactory = (): HostPort => {
    if (environment.mode === "normal") {
        return new HostService();
    }
    return new HostPortfolioService();
}

export const stayServiceFactory = (): StayPort => {
    if (environment.mode === "normal") {
        return new StayService();
    }
    return new StayPortfolioService();
}

export const landServiceFactory = (): LandPort => {
    if (environment.mode === "normal") {
        return new LandService();
    }
    return new LandPortfolioService();
}