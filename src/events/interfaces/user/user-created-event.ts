import { Subjects } from '../../subjects';

export interface UserCreatedEvent {
  subject: Subjects.UserCreated;
  data: {
    id: string;
    email: string;
    firstname: string;
    lastname: string;
    version: number;
  };
}
