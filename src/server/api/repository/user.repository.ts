import { db } from "@/server/db";
import { UserTable } from "@/server/db/schema";
import { eq } from "drizzle-orm";

export const userRepository = {
  async addUser(user: typeof UserTable.$inferInsert) {
    const [newUser] = await db
      .insert(UserTable)
      .values(user)
      .returning({ id: UserTable.id });

    return newUser;
  },

  async getUserById(userId: number) {
    const [user] = await db
      .select()
      .from(UserTable)
      .where(eq(UserTable.id, userId));
    return user;
  },
};
