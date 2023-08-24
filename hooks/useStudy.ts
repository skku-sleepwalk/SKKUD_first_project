import { GetStudyResponse } from "@/types/study";
import { fetcher } from "@/utils/fetcher";
import useSWR from "swr";

export default function useStudy(id?: string) {
  const url = `http://localhost:8000/board/${id}`;
  const response = useSWR<GetStudyResponse>(url, (url) => fetcher(url));
  return response;
}
