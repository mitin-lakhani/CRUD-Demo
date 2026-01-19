// ================== START: Imports ==================
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import type { Dispatch, ReactNode, Reducer } from "react";
import type { IUser } from "./types";
// ================== END: Imports ==================

// ================== START: Types ==================
/**
 * Application State Interface
 * Central state management for theme, compare, watchlist, and user functionality
 */
export interface AppState {
  theme: "light" | "dark" | "system";
  user: IUser | null; // Full user object from backend
}
// ================== END: Types ==================

// ================== START: Initial State ==================
export const initialState: AppState = {
  theme: "system",
  user:null, // Will be populated after login  
};
// ================== END: Initial State ==================

// ================== START: Reducer ==================
/**
 * Application State Reducer
 */
export const reducer: Reducer<AppState, Partial<AppState>> = (
  state,
  partial,
) => {
  return { ...state, ...partial };
};
// ================== END: Reducer ==================

// ================== START: Global State References ==================
let globalState: AppState = initialState;
let globalDispatch: Dispatch<Partial<AppState>>;

export const getState = () => globalState;
export const getDispatch = () => globalDispatch;
// ================== END: Global State References ==================

// ================== START: Context ==================
export const StateContext = createContext<
  [AppState, Dispatch<Partial<AppState>>] | undefined
>(undefined);
// ================== END: Context ==================

// ================== START: StateProvider Component ==================
/**
 * State Provider Component
 * Wraps the app with context provider for global state management
 */
export const StateProvider = ({
  reducer,
  initialState,
  children,
}: {
  reducer: Reducer<AppState, Partial<AppState>>;
  initialState: AppState;
  children: ReactNode;
}) => {
  // ================== START: Resolve Initial State ==================
  /**
   * Resolve initial state from localStorage when available
   * NOTE: User data and authentication status are NOT persisted to localStorage
   * They are fetched from API on app load via AuthInitializer
   */
  const resolveInitialState = (): AppState => {
    try {
      if (
        typeof window !== "undefined" &&
        window.localStorage
      ) {
        const storedTheme = localStorage.getItem("theme");

        return {
          ...initialState,
          theme: storedTheme
            ? (storedTheme as AppState["theme"])
            : initialState.theme,
          user: null,
        };
      }
    } catch (e) {
      // ignore localStorage errors
    }
    return initialState;
  };
  // ================== END: Resolve Initial State ==================

  const [state, dispatch] = useReducer(
    reducer,
    resolveInitialState(),
  );

  // ================== START: Persist Dispatch ==================
  /**
   * Wrap the reducer dispatch so updates are persisted to localStorage
   */
  const persistDispatch: Dispatch<Partial<AppState>> = (
    partial,
  ) => {
    try {
      // call original dispatch
      dispatch(partial as any);

      // persist theme if present in the partial update
      if (
        partial &&
        typeof partial === "object" &&
        "theme" in partial &&
        partial.theme
      ) {
        if (
          typeof window !== "undefined" &&
          window.localStorage
        ) {
          localStorage.setItem(
            "theme",
            partial.theme as string,
          );
        }
      }
    } catch (e) {
      // swallow errors to avoid breaking app when storage is unavailable
      dispatch(partial as any);
    }
  };
  // ================== END: Persist Dispatch ==================

  // ================== START: Keep Global Refs Updated ==================
  /**
   * Keep global refs up-to-date
   */
  useEffect(() => {
    globalState = state;
    globalDispatch = persistDispatch;
  }, [state]);
  // ================== END: Keep Global Refs Updated ==================

  // ================== START: Apply Theme Class ==================
  /**
   * Apply theme class to document root on mount and whenever theme changes
   */
  useEffect(() => {
    try {
      if (typeof document !== "undefined") {
        const root = document.documentElement;

        // Handle system preference
        let effectiveTheme = state.theme;
        if (state.theme === "system") {
          const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)",
          ).matches;
          effectiveTheme = prefersDark ? "dark" : "light";
        }

        // Remove existing theme classes
        root.classList.remove("light", "dark", "system");

        // Add the active theme class
        root.classList.add(effectiveTheme);
      }
    } catch (e) {
      // ignore DOM errors
    }
  }, [state.theme]);
  // ================== END: Apply Theme Class ==================

  // ================== START: System Theme Listener ==================
  /**
   * Listen for system theme changes when theme is set to 'system'
   */
  useEffect(() => {
    if (state.theme === "system") {
      const mediaQuery = window.matchMedia(
        "(prefers-color-scheme: dark)",
      );

      const handleChange = () => {
        const root = document.documentElement;
        root.classList.remove("light", "dark");
        root.classList.add(
          mediaQuery.matches ? "dark" : "light",
        );
      };

      mediaQuery.addEventListener("change", handleChange);
      return () =>
        mediaQuery.removeEventListener("change", handleChange);
    }
  }, [state.theme]);
  // ================== END: System Theme Listener ==================

  return (
    <StateContext.Provider value={[state, persistDispatch]}>
      {children}
    </StateContext.Provider>
  );
};
// ================== END: StateProvider Component ==================

// ================== START: useAppState Hook ==================
/**
 * useAppState Hook
 * Custom hook to access global app state
 */
export const useAppState = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error(
      "useAppState must be used within a StateProvider",
    );
  }
  return context;
};
// ================== END: useAppState Hook ==================