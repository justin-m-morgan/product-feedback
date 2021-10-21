import User from './User.interface';

export enum Category {
  Enhancement = 'Enhancement',
  Feature = 'Feature',
  Bug = 'Bug',
}

export enum Status {
  Suggestion = 'Suggestion',
  Planned = 'Planned',
  InProgress = 'In Progress',
  Live = 'Live',
}

export default interface Request {
  id: number;
  title: string;
  description: string;
  category: Category;
  status: Status;
  upvotes: User[];
  user: User;
}
