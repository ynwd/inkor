import { User } from "./user.model";
import { insertUser } from "./user.service";

export async function init() {
  const users: User[] = [
    {
      username: "agus",
    },
    {
      username: "budi",
    },
    {
      username: "agung",
    },
    {
      username: "toni",
    },
  ];

  for (let index = 0; index < users.length; index++) {
    const user = users[index];
    await insertUser(user);
  }
}
