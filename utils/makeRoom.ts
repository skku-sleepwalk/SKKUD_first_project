import { AxiosResponse } from "axios";
import axios from "axios";
import { Room, makeRoomResponse } from "@/types/Rooms";

export async function uploadPost(
  post: Room,
  id: string
): Promise<makeRoomResponse> {
  const { data } = await axios.post<Room, AxiosResponse<makeRoomResponse>>(
    `/board/${id}`,
    post,
    {
      headers: {},
    }
  );
  return data;
}
