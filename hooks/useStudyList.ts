import { Study } from "@/types/study";
import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";

export default function useStudyList(keyword?: string) {
  const url = keyword
    ? `http://localhost:8000/board/search?keyword=${keyword}`
    : `http://localhost:8000/board`;
  const response = useSWR<Study[]>(url, (url) => fetcher(url));
  return response;
}
