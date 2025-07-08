import React, { createContext, useContext, useReducer, useEffect } from "react";
import type {
  AuthContextType,
  AuthState,
  LoginCredentials,
  OTPVerification,
  User,
} from "../types/auth";
import SubjectPng from "../assets/Subject.png";

// Mock user data
const MOCK_USER: User = {
  id: "1",
  email: "itsashutosh07@gmail.com",
  name: "Ashutosh Jaiswal",
  title: "Software Engineer",
  handle: "itsashutosh07",
  avatarUrl: SubjectPng,
  status: "Online",
};

const VALID_CREDENTIALS = {
  email: "itsashutosh07@gmail.com",
  password: "quisde@123",
};

const VALID_OTP = "888888";

// Initial state
const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  otpSent: false,
  otpAttempts: 0,
};

// Action types
type AuthAction =
  | { type: "LOGIN_START" }
  | { type: "LOGIN_SUCCESS"; payload: User }
  | { type: "LOGIN_FAILURE"; payload: string }
  | { type: "OTP_SENT" }
  | { type: "OTP_VERIFIED"; payload: User }
  | { type: "OTP_FAILURE"; payload: string }
  | { type: "LOGOUT" }
  | { type: "CLEAR_ERROR" }
  | { type: "INCREMENT_OTP_ATTEMPTS" }
  | { type: "RESET_OTP" };

// Reducer
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload,
        error: null,
        otpSent: true,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "OTP_SENT":
      return {
        ...state,
        isLoading: false,
        otpSent: true,
        error: null,
      };
    case "OTP_VERIFIED":
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload,
        error: null,
        otpAttempts: 0,
      };
    case "OTP_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        otpAttempts: state.otpAttempts + 1,
      };
    case "LOGOUT":
      return {
        ...initialState,
      };
    case "CLEAR_ERROR":
      return {
        ...state,
        error: null,
      };
    case "INCREMENT_OTP_ATTEMPTS":
      return {
        ...state,
        otpAttempts: state.otpAttempts + 1,
      };
    case "RESET_OTP":
      return {
        ...state,
        otpSent: false,
        error: null,
        otpAttempts: 0,
      };
    default:
      return state;
  }
};

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  // Check for existing authentication on mount
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const userData = localStorage.getItem("userData");

    if (token && userData) {
      try {
        const user = JSON.parse(userData);
        dispatch({ type: "OTP_VERIFIED", payload: user });
      } catch (error) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("userData");
      }
    }
  }, []);

  const login = async (credentials: LoginCredentials): Promise<boolean> => {
    dispatch({ type: "LOGIN_START" });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (
      credentials.email === VALID_CREDENTIALS.email &&
      credentials.password === VALID_CREDENTIALS.password
    ) {
      dispatch({ type: "OTP_SENT" });
      return true;
    } else {
      dispatch({
        type: "LOGIN_FAILURE",
        payload: "Invalid email or password",
      });
      return false;
    }
  };

  const verifyOTP = async (otpData: OTPVerification): Promise<boolean> => {
    dispatch({ type: "LOGIN_START" });

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (otpData.otp === VALID_OTP) {
      // Store authentication data
      localStorage.setItem("authToken", "mock-jwt-token");
      localStorage.setItem("userData", JSON.stringify(MOCK_USER));

      dispatch({ type: "OTP_VERIFIED", payload: MOCK_USER });
      return true;
    } else {
      dispatch({
        type: "OTP_FAILURE",
        payload: "Invalid OTP. Please try again.",
      });
      return false;
    }
  };

  // resendOTP does not actually send an OTP; only '888888' is accepted for verification.
  const resendOTP = async (email: string): Promise<boolean> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    dispatch({ type: "OTP_SENT" });
    return true;
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    dispatch({ type: "LOGOUT" });
  };

  const resetOTP = () => {
    dispatch({ type: "RESET_OTP" });
  };

  const value: AuthContextType = {
    authState,
    login,
    verifyOTP,
    logout,
    resendOTP,
    resetOTP,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use auth context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
