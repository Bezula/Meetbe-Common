import { Subjects } from '../subjects';

export interface ProfileCreatedEvent {
  subject: Subjects.ProfileCreated;
  data: {
    email: string;
    firstName: string;
    lastName: string;
    age: string;
    birthDate: string;
    message: string;
    profilePhoto?: any;
    createdAt: string;
    hobbys: [string];
    interests: [string];
    hometown: string;
    school: string;
    profession: string;
    currentJob: string;
    socialStatus: string;
    phoneNumber: string;
    userId: string;
  };
}
