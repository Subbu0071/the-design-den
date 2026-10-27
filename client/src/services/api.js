const API_BASE_URL = (
  import.meta.env.VITE_API_URL || "http://localhost:5000"
).replace(/\/+$/, "");

/**
 * Sends a JSON request to the DESIGN DEN backend.
 * Throws a readable error if the request fails.
 */
export async function apiRequest(endpoint, options = {}) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  // Handle responses that may not contain valid JSON.
  let result;

  try {
    result = await response.json();
  } catch {
    throw new Error("The server returned an unexpected response.");
  }

  if (!response.ok || result.success === false) {
    throw new Error(result.message || "The request could not be completed.");
  }

  return result;
}
