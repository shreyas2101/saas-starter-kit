import { postRepository } from "../repository/post.repository";

export const postService = {
  create: async (input: { name: string }) => {
    return await postRepository.addPost({ name: input.name });
  },
  getLatest: async () => {
    return await postRepository.getLatestPost();
  },
};
