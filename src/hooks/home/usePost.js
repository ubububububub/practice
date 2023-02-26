import { apiClient } from "../../api/apiClient";
import { useFetch } from "../common/useFetch";

export function usePost({ select, ...args } = { select: null }) {
  const { data, isLoading, isError, error } = useFetch(
    [],
    async () =>
      await apiClient({
        url: "/posts",
        method: "get",
      }),
    {
      select,
    }
  );

  if (isError) {
    throw error;
  }

  return { data, isLoading };
}
