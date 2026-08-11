// src/services/apiClient.ts
import Cookies from 'js-cookie';
import { AUTH_TOKEN_COOKIE_NAME , URL_API } from '@/app/constants/environment'; 

interface RequestOptions extends RequestInit {
  requiresAuth?: boolean;
}

class ApiClient {
  private async request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const { requiresAuth = false, headers, body, ...customOptions } = options;

    const defaultHeaders: HeadersInit = {
      'Content-Type': 'application/json',
      ...headers,
    };

    if (requiresAuth) {
      const token = Cookies.get(AUTH_TOKEN_COOKIE_NAME);
      if (token) {
        (defaultHeaders as Record<string, string>)['Authorization'] = `Bearer ${token}`;
      }
    }

    const config: RequestInit = {
      ...customOptions,
      headers: defaultHeaders,
      body: body && typeof body === 'object' ? JSON.stringify(body) : body,
    };

    const response = await fetch(`${URL_API}${endpoint}`, config);


    if (!response.ok) {
      if (response.status === 401) {

        console.warn('Sesión expirada o no autorizada (401)');
      }

      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `Error HTTP: ${response.status}`);
    }

    if (response.status === 204) {
      return {} as T;
    }

    return response.json();
  }

  public get<T>(endpoint: string, options?: RequestOptions) {
    return this.request<T>(endpoint, { ...options, method: 'GET' });
  }

  public post<T>(endpoint: string, body?: unknown, options?: RequestOptions) {
    return this.request<T>(endpoint, { ...options, method: 'POST', body: body as BodyInit });
  }

  public put<T>(endpoint: string, body?: unknown, options?: RequestOptions) {
    return this.request<T>(endpoint, { ...options, method: 'PUT', body: body as BodyInit });
  }

  public delete<T>(endpoint: string, options?: RequestOptions) {
    return this.request<T>(endpoint, { ...options, method: 'DELETE' });
  }
}

export const api = new ApiClient();