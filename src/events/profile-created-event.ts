import {Subjects} from "./subjects";

export interface ProfileCreatedEvent {
	subject: Subjects.ProfileCreated;
	data: {
		id: string;
		firstname: string;
		lastname: string;
		age: number;
		userId: string;
	};
}
