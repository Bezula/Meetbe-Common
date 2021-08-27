import { Subjects } from '../../subjects';
export interface ProfileUpdatedEvent {
  subject: Subjects.ProfileUpdated;
  data: {
    user: any;
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
    version: number;
  };
}
