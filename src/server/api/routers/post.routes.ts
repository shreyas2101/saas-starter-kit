import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { postService } from "../services/post.services";

export const postRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ input }) => {
      return await postService.create(input);
    }),

  getLatestPost: protectedProcedure.query(async () => {
    return await postService.getLatest();
  }),
});
