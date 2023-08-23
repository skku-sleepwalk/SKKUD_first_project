import { GetStudyListResponse } from "@/types/study";
import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";

export default function useStudyList() {
  const url = `http://localhost:8000/board`;
  const response = useSWR<GetStudyListResponse>(fetcher(url));
  return response;
}
