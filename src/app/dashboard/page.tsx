"use client";

import { api } from "@/trpc/react";

export default function DashboardPage() {
  const { data: latestPost } = api.post.getLatestPost.useQuery();

  return (
    <div>
      Todos!
      <pre>{JSON.stringify(latestPost)}</pre>
      <ul></ul>
    </div>
  );
}
