import { IMessage } from "./types";

/**
 * Check whether a given value is an array where
 * each member is of a specified type
 *
 * @param arr - array to check
 * @param check - type guard to use when evaluating each item
 * @public
 */
export function isTypedArray<T>(
    arr: unknown,
    check: (x: any) => x is T
): arr is T[] {
    if (!Array.isArray(arr)) return false;
    return !arr.some((item) => !check(item));
}

/**
 * Check whether a given value is an {@link @whatsaaaa/types#IMessage}
 * @param arg - value to check
 * @beta
 */
export function isMessage(arg: any): arg is IMessage {
    return (
        typeof arg.teamId === "string" &&
        typeof arg.channelId === "string" &&
        typeof arg.userId === "string" &&
        typeof arg.body === "string"
    );
}
