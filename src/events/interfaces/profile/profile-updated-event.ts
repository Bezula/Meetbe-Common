import { Subjects } from '../../subjects';
import { UserDoc } from '../../../models/user/UserDoc';
export interface ProfileUpdatedEvent {
  subject: Subjects.ProfileUpdated;
  data: {
    user: UserDoc;
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
