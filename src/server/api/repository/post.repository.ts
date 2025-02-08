import { db } from "@/server/db";
import { PostTable } from "@/server/db/schema";
import { desc, eq } from "drizzle-orm";

export const postRepository = {
  async addPost(post: typeof PostTable.$inferInsert) {
    const [newPost] = await db
      .insert(PostTable)
      .values(post)
      .returning({ id: PostTable.id });

    return newPost;
  },

  async getPostById(postId: number) {
    const [post] = await db
      .select()
      .from(PostTable)
      .where(eq(PostTable.id, postId));
    return post;
  },

  async getLatestPost() {
    const [post] = await db
      .select()
      .from(PostTable)
      .orderBy(desc(PostTable.createdAt))
      .limit(1);

    return post;
  },
};
