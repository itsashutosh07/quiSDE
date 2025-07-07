export interface User {
  id: string;
  email: string;
  name: string;
  title: string;
  handle: string;
  avatarUrl: string;
  status: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface OTPVerification {
  email: string;
  otp: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  otpSent: boolean;
  otpAttempts: number;
}

export interface AuthContextType {
  authState: AuthState;
  login: (credentials: LoginCredentials) => Promise<boolean>;
  verifyOTP: (otpData: OTPVerification) => Promise<boolean>;
  logout: () => void;
  resendOTP: (email: string) => Promise<boolean>;
}
