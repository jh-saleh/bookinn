export enum StayRule {
    Pets = "pets",
    Parties = "parties",
    Smoking = "smoking",
}

export enum LeaveRule {
    ReturnKeys = "returnKeysToTheHost",
    ThrowTrashAway = "throwTrashAway",
    TurnThingsOff = "turnThingsOff",
    LockUp = "lockUp",
    GatherUsedTowels = "gatherUsedTowels",
}

export enum SafetyDevice {
    CarbonMonoxideAlarm = "carbonMonoxideAlarm",
    SmokeAlarm = "smokeAlarm",
    FireExtinguisher = "fireExtinguisher"
}

export enum CheckType {
    StandardCheck = "StandardCheck",
    FlexibleCheck = "FlexibleCheck",
}

export interface HourBoundary {
    lowerBoundary?: string;
    upperBoundary?: string;
}

export interface GuidebookInformation {
    enum: string;
    icon: string;
    included?: boolean;
}

export interface GuideBook {
    houserules: {
        time: {
            type: CheckType,
            interval?: {
                checkIn?: HourBoundary,
                checkOut?: HourBoundary,
            }
        };
        stay: Partial<Record<StayRule, boolean>>;
        leave?: LeaveRule[];
    };
    safety: Partial<Record<SafetyDevice, boolean>>;
    cancellationPolicy: {
        fullRefund: number;
        partialRefund?: number;
    };
}

export const stayRulesTable: Record<StayRule, string> = {
    parties: "celebration",
    pets: "pets",
    smoking: "smoking_rooms"
}

export const leaveRulesTable: Record<LeaveRule, string> = {
    returnKeysToTheHost: "key",
    gatherUsedTowels: "dry_cleaning",
    lockUp: "lock",
    throwTrashAway: "delete",
    turnThingsOff: "emoji_objects"
}

export const safetyDeviceTable: Record<SafetyDevice, string> = {
    carbonMonoxideAlarm: "nest_secure_alarm",
    smokeAlarm: "detector_smoke",
    fireExtinguisher: "fire_extinguisher",
}