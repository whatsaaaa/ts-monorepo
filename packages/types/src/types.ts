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
