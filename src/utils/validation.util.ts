// utils/sanitizeInput.ts

/**
 * Sanitizes a string input by:
 * - Trimming whitespace
 * - Removing unwanted characters (optional)
 * - Normalizing casing (optional)
 */

export const sanitizeName = (input: string): string => {
  if (typeof input !== "string") return "";

  return input
    .trim()
    .replace(/[^a-zA-Z\s'-]/g, "") // Allow letters, spaces, apostrophes, hyphens
    .replace(/\s+/g, " ");         // Collapse multiple spaces
};

export const sanitizeEmail = (input: string): string => {
  return input.trim().toLowerCase();
};

export const sanitizeText = (input: string): string => {
  return input.trim().replace(/[<>]/g, ""); // Basic XSS protection
};
