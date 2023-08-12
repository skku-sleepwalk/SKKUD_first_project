export interface Room {
  title: string;
  content: string;
  prof: string;
  mon: number;
  tue: number;
  wed: number;
  thu: number;
  fri: number;
  sat: number;
  sun: number;

  hostId: number;
}
export interface makeRoomResponse {
  postID: number;
}
