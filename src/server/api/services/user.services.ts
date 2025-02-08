import { userRepository } from "../repository/user.repository";
import { type AddUserSchema } from "../types";
import type * as z from "zod";

export const userSerivce = {
  async getUserById(userId: number) {
    return await userRepository.getUserById(userId);
  },

  async addUser(user: z.infer<typeof AddUserSchema>) {
    return await userRepository.addUser(user);
  },
};
