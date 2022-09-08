import { users,credentials } from "@prisma/client";

export type CreateUsersData = Omit<users, 'id'|'createdAt'>;
export type CreateCredentialsData = Omit<credentials, 'id'|'createdAt'>;