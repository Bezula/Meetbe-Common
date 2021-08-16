// import nats, {
// 	Message,
// 	Stan,
// } from "node-nats-streaming";

// // PROFILE CREATED LISTENER
// class ProfileCreatedListener extends Listener<ProfileCreatedEvent> {
// 	subject: Subjects.ProfileCreated =
// 		Subjects.ProfileCreated;

// 	// DO ZMIANY
// 	queueGroupName = "create-service";

// 	onMessage(
// 		data: ProfileCreatedEvent["data"],
// 		msg: Message
// 	) {
// 		console.log(`Event data ${data}`);

// 		// Jeśli nie ma błędów ta funkcja się wykona
// 		msg.ack();
// 	}
// }
// // PROFILE CREATED PUBLISHER

// class ProfileCreatedPublisher extends Publisher<ProfileCreatedEvent> {
// 	subject: Subjects.ProfileCreated =
// 		Subjects.ProfileCreated;
// }
