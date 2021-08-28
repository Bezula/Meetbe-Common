import { Subjects } from '../../subjects';

export interface UserUpdatedEvent {
  subject: Subjects.UserUpdated;
  data: {
    _id: string;
    email: string;
    firstname: string;
    lastname: string;
    version: number;
  };
}
