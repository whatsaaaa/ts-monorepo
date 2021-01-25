import { format, addDays } from "date-fns";

/**
 * Format a timestamp as a string
 * @param date - the date value to format
 * @public
 */
export function formatTimestamp(date: Date): string {
  return format(date, "MMM dd, yyyy HH:MM:SS a");
}

/**
 * Add days to a date
 * @param date - the date value to add days to
 * @param numberOfDaysToAdd - number of days to add
 */
export function addDaysToDate(date: Date, numberOfDaysToAdd: number): Date {
  return addDays(date, numberOfDaysToAdd);
}
