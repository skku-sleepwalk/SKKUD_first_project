import { AxiosResponse } from "axios";
import axios from "axios";
import { Room, makeRoomResponse } from "@/types/Rooms";

export async function MakeRoom(post: Room): Promise<makeRoomResponse> {
  const { data } = await axios.post<Room, AxiosResponse<makeRoomResponse>>(
    `http://localhost:8080/board`,
    post,
    {
      headers: {},
    }
  );
  return data;
}
