import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useEventList() {
  const { data } = useQuery({
    queryKey: ["event"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      return data;
    },
    staleTime: 1000 * 60 * 10,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return { data };
}