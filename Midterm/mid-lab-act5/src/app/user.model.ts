export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
}

// The API returns an object { "users": [...] }, not just an array.
export interface UserResponse {
  users: User[];
}