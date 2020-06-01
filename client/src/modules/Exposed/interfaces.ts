export interface UserLoginRequest {
  email: string;
  password: string;
}

export interface UserRegistrationRequest {
  email: string;
  password: string;
  name: string;
  comments?: string[];
  posts?: string[];
  avatar?: string;
}
