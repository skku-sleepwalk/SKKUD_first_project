import { GetStudySearchListResponse } from "@/types/study";
import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";

export default function useStudySearchList(keyword: string) {
  const url = `http://localhost:8000/board/search?keyword=${keyword}`;
  const response = useSWR<GetStudySearchListResponse>(fetcher(url));
  return response;
}
