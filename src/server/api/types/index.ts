import * as zod from "zod";

export const AddUserSchema = zod.object({
  name: zod.string(),
});
