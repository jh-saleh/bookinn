export enum Month {
    January = "January",
    February = "February",
    March = "March",
    April = "April",
    May = "May",
    June = "June",
    July = "July",
    August = "August",
    September = "September",
    October = "October",
    November = "November",
    December = "December",
}

export const convertMonthToNumber = (month: Month): number => {
    switch (month) {
        case Month.January: return 1;
        case Month.February: return 2;
        case Month.March: return 3;
        case Month.April: return 4;
        case Month.May: return 5;
        case Month.June: return 6;
        case Month.July: return 7;
        case Month.August: return 8;
        case Month.September: return 9;
        case Month.October: return 10;
        case Month.November: return 11;
        case Month.December: return 12;
    }
}

export const convertNumberToMonth = (month: number): Month => {
    switch (month) {
        case 1: return Month.January;
        case 2: return Month.February;
        case 3: return Month.March;
        case 4: return Month.April;
        case 5: return Month.May;
        case 6: return Month.June;
        case 7: return Month.July;
        case 8: return Month.August;
        case 9: return Month.September;
        case 10: return Month.October;
        case 11: return Month.November;
        default: return Month.December;
    }
}

export const getNextMonth = (month: Month): Month => {
    return convertNumberToMonth((convertMonthToNumber(month) + 1) % 12);
}

export const getPreviousMonth = (month: Month): Month => {
    return convertNumberToMonth((convertMonthToNumber(month) - 1) % 12);
}

export const getNbOfDaysFromMonth = (month: Month, year: number): number => {
    if (year < 1980) {
        throw Error("The year cannot be before 1980");
    }
    const thirties = [Month.September, Month.November, Month.April, Month.June];
    if (thirties.includes(month)) {
        return 30;
    } else if (Month.February === month) {
        return year % 4 === 0 ? 29 : 28;
    } else {
        return 31;
    }
}

export enum Days {
    Sunday = "Sunday",
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
}

export const convertDayToString = (day: Days) => {
    switch (day) {
        case Days.Sunday: return "Sunday";
        case Days.Monday: return "Monday";
        case Days.Tuesday: return "Tuesday";
        case Days.Wednesday: return "Wednesday";
        case Days.Thursday: return "Thursday";
        case Days.Friday: return "Friday";
        case Days.Saturday: return "Saturday";
    }
}

export const convertStringToDay = (day: string): Days => {
    switch (day) {
        case "Sunday": return Days.Sunday;
        case "Monday": return Days.Monday;
        case "Tuesday": return Days.Tuesday;
        case "Wednesday": return Days.Wednesday;
        case "Thursday": return Days.Thursday;
        case "Friday": return Days.Friday;
        case "Saturday": return Days.Saturday;
        default: return Days.Saturday;
    }
}

export const Week: Days[] = [
    Days.Sunday,
    Days.Monday,
    Days.Tuesday,
    Days.Wednesday,
    Days.Thursday,
    Days.Friday,
    Days.Saturday,
];

export const DaysShortHand: Record<string, string> = Object.fromEntries(Week.map((value) => [value, value.slice(0, 2)]));

export const getDayName = (year: number, month: number, day: number): Days => {
    return convertStringToDay(new Date(year, month - 1, day).toLocaleDateString('en-US', { weekday: 'long' }));
};

interface CalendarDate {
    currentDay: number;
    firstMonth: Month;
    firstYear: number;
    secondMonth: Month;
    secondYear: number;
}

export const getCurrentCalendarDate = (): CalendarDate => {
    const currentDate = new Date();
    const currentDay = currentDate.getUTCDate();
    const currentMonth = currentDate.getMonth() + 1;
    const currentYear = currentDate.getFullYear();

    const nextMonth = (currentMonth % 12) + 1;
    const nextYear = nextMonth === 1 ? currentYear + 1 : currentYear;

    return {
        currentDay,
        firstMonth: convertNumberToMonth(currentMonth),
        firstYear: currentYear,
        secondMonth: convertNumberToMonth(nextMonth),
        secondYear: nextYear
    };
}