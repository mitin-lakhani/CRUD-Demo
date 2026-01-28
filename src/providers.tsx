// src/app/providers.tsx
// import { QueryClientProvider } from "@tanstack/react-query";
import { initialState, reducer, StateProvider } from "./utils/useAppState";
// import { queryClient } from "./queryClient";

export const Providers = ({ children }: { children: React.ReactNode }) => (
	// <QueryClientProvider client={queryClient}>
	<StateProvider reducer={reducer} initialState={initialState}>
		{children}
	</StateProvider>
	// </QueryClientProvider>
);
	