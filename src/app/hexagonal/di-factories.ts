import { environment } from "../../environments/environment";
import { AuthService } from "./adapter/normal/auth.service";
import { BillingService } from "./adapter/normal/billing.service";
import { HostService } from "./adapter/normal/host.service";
import { LandService } from "./adapter/normal/land.service";
import { StayService } from "./adapter/normal/stay.service";
import { UserService } from "./adapter/normal/user.service";
import { AuthPortfolioService } from "./adapter/portfolio/auth.portfolio.service";
import { BillingPortfolioService } from "./adapter/portfolio/billing.portfolio.service";
import { HostPortfolioService } from "./adapter/portfolio/host.portfolio.service";
import { LandPortfolioService } from "./adapter/portfolio/land.portfolio.service";
import { StayPortfolioService } from "./adapter/portfolio/stay.portfolio.service";
import { UserPortfolioService } from "./adapter/portfolio/user.portfolio.service";
import { AuthPort } from "./domain/port/auth.port";
import { BillingPort } from "./domain/port/billing.port";
import { HostPort } from "./domain/port/host.port";
import { LandPort } from "./domain/port/land.port";
import { StayPort } from "./domain/port/stay.port";
import { UserPort } from "./domain/port/user.port";

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

export const authServiceFactory = (): AuthPort => {
    if (environment.mode === "normal") {
        return new AuthService();
    }
    return new AuthPortfolioService();
}

export const userServiceFactory = (): UserPort => {
    if (environment.mode === "normal") {
        return new UserService();
    }
    return new UserPortfolioService(new AuthPortfolioService());
}

export const billingServiceFactory = (): BillingPort => {
    if (environment.mode === "normal") {
        return new BillingService();
    }
    return new BillingPortfolioService(new StayPortfolioService());
}