import { getCsrfToken } from "./csrf";

const METHODS_REQUIRING_CSRF = ["POST", "PUT", "DELETE"];

export async function apiFetch(
  input: RequestInfo | URL,
  init: RequestInit = {}
): Promise<Response> {
  const method = (init.method ?? "GET").toUpperCase();

  const headers = new Headers(init.headers);

  if (METHODS_REQUIRING_CSRF.includes(method)) {
    const csrfToken = await getCsrfToken();

    headers.set("csrf-token", csrfToken);
  }

  return fetch(input, {
    ...init,
    headers,
    credentials: "include",
  });
}