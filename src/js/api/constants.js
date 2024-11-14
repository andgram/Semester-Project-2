
export const API_KEY = import.meta.env.VITE_API_KEY;

export const API_BASE = import.meta.env.VITE_API_URL;

export const API_AUTH = `${API_BASE}/auth`;

export const API_AUTH_LOGIN = `${API_AUTH}/login`;

export const API_AUTH_REGISTER = `${API_AUTH}/register`;

export const API_AUTH_KEY = `${API_AUTH}/create-api-key`;