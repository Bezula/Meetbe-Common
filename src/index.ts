export * from "./errors/bad-request-error";
export * from "./errors/custom-error";
export * from "./errors/database-connection-error";
export * from "./errors/not-authorized-error";
export * from "./errors/not-found-error";
export * from "./errors/request-validation-error";

export * from "./middlewares/current-user";
export * from "./middlewares/error-handler";
export * from "./middlewares/require-auth";
export * from "./middlewares/validate-requests";

export * from "./events/subjects";
export * from "./events/profile-created-event";
export * from "./events/base-publisher";
export * from "./events/base-listener";

// interface Color {
//   red: Number;
//   blue: Number;
//   green: Number;
// }

// const color: Color = {
//   red: 10,
//   blue: 10,
//   green: 10,
// };

// console.log(color);
