export interface Study {
  postId: number;
  hostId: number;
  title: string;
  prof: string;
  content: string;
  createdAt: string;
  mon: number;
  tue: number;
  wed: number;
  thu: number;
  fri: number;
  sat: number;
  sun: number;
}

export interface StudySearch {
  postId: number;
  hostId: number;
  title: string;
  content: string;
  createdAt: string;
}

export interface GetStudyResponse {
  data: Study;
}

export interface GetStudyListResponse {
  data: Study[];
}

export interface GetStudySearchListResponse {
  data: StudySearch[];
}
