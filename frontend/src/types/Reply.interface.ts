import User from './User.interface';

export default interface Comment {
  id: number;
  content: string;
  user: User;
  commentId: number;
}
