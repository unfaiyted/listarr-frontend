import { writable, derived } from 'svelte/store';
import createClient from 'openapi-fetch';
import type { paths } from '$lib/api/v1';
import type { UserResponse, ErrorResponse, User } from '$lib/api/types';

// Types for our stores
interface ApiState {
	users: UserResponse[];
	loading: boolean;
	error: ErrorResponse | null;
}

// Initialize API client
export const baseUrl = (import.meta.env.VITE_API_URL ?? 'http://127.0.0.1:8080') + '/api/v1';
export const client = createClient<paths>({ baseUrl });

console.log('baseUrl', baseUrl);

// Create the main API store
function createApiStore() {
	const { subscribe, update } = writable<ApiState>({
		users: [],
		loading: false,
		error: null
	});

	return {
		subscribe,
		// User operations
		async fetchUsers() {
			update((state) => ({ ...state, loading: true, error: null }));
			try {
				const { data, error } = await client.GET('/users');
				if (error) throw error;
				if (data) {
					update((state) => ({ ...state, users: data, loading: false }));
				}
			} catch (err) {
				update((state) => ({
					...state,
					error: { error: err instanceof Error ? err.message : 'Unknown error' },
					loading: false
				}));
			}
		},

		async createUser(user: User) {
			update((state) => ({ ...state, loading: true, error: null }));
			try {
				const { data, error } = await client.POST('/users', { body: user });
				if (error) throw error;
				if (data) {
					update((state) => ({
						...state,
						users: [...state.users, data],
						loading: false
					}));
					return data;
				}
			} catch (err) {
				const error = { error: err instanceof Error ? err.message : 'Unknown error' };
				update((state) => ({ ...state, error, loading: false }));
				throw error;
			}
		},

		async updateUser(id: number, user: User) {
			update((state) => ({ ...state, loading: true, error: null }));
			try {
				const { data, error } = await client.PUT('/users/{id}', {
					params: { path: { id } },
					body: user
				});
				if (error) throw error;
				if (data) {
					update((state) => ({
						...state,
						users: state.users.map((u) => (u.id === id ? data : u)),
						loading: false
					}));
					return data;
				}
			} catch (err) {
				const error = { error: err instanceof Error ? err.message : 'Unknown error' };
				update((state) => ({ ...state, error, loading: false }));
				throw error;
			}
		},

		async deleteUser(id: number) {
			update((state) => ({ ...state, loading: true, error: null }));
			try {
				const { error } = await client.DELETE('/users/{id}', {
					params: { path: { id } }
				});
				if (error) throw error;
				update((state) => ({
					...state,
					users: state.users.filter((u) => u.id !== id),
					loading: false
				}));
			} catch (err) {
				const error = { error: err instanceof Error ? err.message : 'Unknown error' };
				update((state) => ({ ...state, error, loading: false }));
				throw error;
			}
		},

		// Helper methods
		clearError() {
			update((state) => ({ ...state, error: null }));
		}
	};
}

// Create the store instance
export const apiStore = createApiStore();

// Derived stores for convenient access to specific states
export const users = derived(apiStore, ($store) => $store.users);
export const loading = derived(apiStore, ($store) => $store.loading);
export const error = derived(apiStore, ($store) => $store.error);
