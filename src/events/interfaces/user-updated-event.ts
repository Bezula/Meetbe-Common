import { Subjects } from '../subjects';

export interface UserUpdatedEvent {
  subject: Subjects.UserUpdated;
  data: {
    email: string;
    firstname: string;
    lastname: string;
    id: string;
    version: number;
  };
}
