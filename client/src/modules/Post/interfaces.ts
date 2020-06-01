export interface UserDetail {
  id: string;
  name: string;
  email: string;
}

export interface CreatorDetail {
  id: string;
  name: string;
}

export interface PostBasicInfo {
  id: string;
  title: string;
  content: string;
  creator: CreatorDetail;
  comments?: string[];
}

export interface Post extends PostBasicInfo {
  createdDate: Date;
}

export interface PostState {
  post: Post[];
  isLoading: boolean;
}

export interface PostShortInfo {
  id: string;
  title: string;
  content: string;
  comments?: string[];
}

export interface PostRequest {
  title: string;
  content: string;
  creator: string;
}