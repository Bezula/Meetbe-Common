import { Subjects } from '../subjects';

export interface UserDeletedEvent {
  subject: Subjects.UserDeleted;
  data: {
    userId: string;
    version: number;
  };
}
