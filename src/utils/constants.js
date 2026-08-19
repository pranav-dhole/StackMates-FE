export const BE_BASE_URL =
  location.hostname === "localhost"
    ? "http://localhost:3000"
    : import.meta.env.CONFIG_API_BASE_URL ||
      "https://stackmates-be.onrender.com";
