import { usePost } from "./usePost";

export function usePostBody() {
  const { data: postBodys, isLoading: isPostBodysLoading } = usePost((data) =>
    data.map(({ body }) => ({ body }))
  );

  return { postBodys, isPostBodysLoading };
}
