/**
 * 가상으로 인증된 상태입니다.
 */
const MOCK_USER: AuthUser = {
  id: "user_001",
  name: "김민수",
  email: "kim.minsu@company.com",
  avatar: "https://i.pravatar.cc/150?u=kim.minsu",
};

export const useAuth = () => {
  return {
    isAuthenticated: true,
    user: MOCK_USER,
    isLoading: false,
  };
};

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: AuthUser | null;
  isLoading: boolean;
}
