/**
 * A chat message
 * @public
 */
export interface IMessage {
    id: number;
    teamId: string;
    channelId: string;
    userId: string;
    createdAt: string;
    body: string;
}