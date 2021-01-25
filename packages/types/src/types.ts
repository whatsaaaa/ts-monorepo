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

/**
 * A team, containing one or more chat channels
 * @public
 */
export interface ITeam {
  id: string;
  name: string;
  logo: string;
}

/**
 * A chat channel, containing many chat messages
 * @public
 */
export interface IChannel {
  id: string;
  teamId: string;
  name: string;
  description: string;
  messages: IMessage[];
}

/**
 * A user participating in chat
 * @public
 */
export interface IUser {
  id: string;
  name: string;
  email: string;
}
