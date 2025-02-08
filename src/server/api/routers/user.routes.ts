import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { userSerivce } from "../services/user.services";
import { AddUserSchema } from "../types";

export const userRouter = createTRPCRouter({
  getUserById: protectedProcedure.input(z.number()).query(async ({ input }) => {
    return await userSerivce.getUserById(input);
  }),

  addUser: protectedProcedure
    .input(AddUserSchema)
    .mutation(async ({ input }) => {
      return userSerivce.addUser(input);
    }),
});
