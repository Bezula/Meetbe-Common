import {Subjects} from "../subjects";

export interface UserUpdatedEvent {
	subject: Subjects.UserUpdated;
	data: {
		email: string;
		userId: string;
	};
}
