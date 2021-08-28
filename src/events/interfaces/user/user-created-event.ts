import { Subjects } from '../../subjects';

export interface UserCreatedEvent {
  subject: Subjects.UserCreated;
  data: {
    _id: string;
    email: string;
    firstname: string;
    lastname: string;
    version: number;
  };
}
