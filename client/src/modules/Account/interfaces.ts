export interface BasicInfo {
  id: string;
  name: string;
  email: string;
  password: string;
  avatarUrl?: string;
  posts?: string[];
  comments?: string[];
}

export interface CreatorInfo {
  id: string;
  name: string;
  email: string;
}

export interface PostInfo {
  id: string;
  title: string;
  createdDate: Date;
  creator: string;
  content: string;
  comments: string[];
}

export interface UserInfo {
  id: string;
  basicInfo: BasicInfo;
}

export interface AccountInfo {
  id: string;
  basicInfo: BasicInfo;
}

export interface AccountState extends AccountInfo {
  isLoading: boolean;
}
