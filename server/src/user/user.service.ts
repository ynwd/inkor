import UserModel, { User } from "./user.model";

export async function insertUser(userData: User) {
  return await UserModel.create(userData);
}

export async function getAllUsers() {
  return await UserModel.find();
}

export async function getUserByUsername(username: string) {
  return await UserModel.findOne({ username }).exec();
}

export async function getUserById(id: string) {
  return await UserModel.findById(id);
}

export async function deleteAllUser() {
  return await UserModel.deleteMany({});
}
