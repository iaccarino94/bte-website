const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: unknown): value is string {
  return typeof value === "string" && value.length <= 254 && EMAIL_REGEX.test(value);
}

/** Returns the trimmed string if non-empty and within maxLength, else null. */
export function requiredString(value: unknown, maxLength: number): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (trimmed.length === 0 || trimmed.length > maxLength) return null;
  return trimmed;
}

/** Always returns a string (possibly empty), trimmed and capped at maxLength. */
export function optionalString(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

export function oneOf<T extends string>(value: unknown, allowed: readonly T[]): T | null {
  if (typeof value !== "string") return null;
  return (allowed as readonly string[]).includes(value) ? (value as T) : null;
}

/** Accepts YYYY-MM-DD (native <input type="date"> format), rejects future dates. */
export function requiredPastDate(value: unknown): string | null {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const date = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(date.getTime()) || date.getTime() > Date.now()) return null;
  return value;
}

export function requiredPhone(value: unknown, maxLength = 20): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (trimmed.length < 7 || trimmed.length > maxLength) return null;
  if (!/^[0-9()+\-.\s]+$/.test(trimmed)) return null;
  return trimmed;
}

export function optionalPhone(value: unknown, maxLength = 20): string {
  if (typeof value !== "string") return "";
  const trimmed = value.trim();
  if (trimmed.length === 0) return "";
  if (trimmed.length > maxLength || !/^[0-9()+\-.\s]+$/.test(trimmed)) return "";
  return trimmed;
}

export function requiredZip(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return /^\d{5}(-\d{4})?$/.test(trimmed) ? trimmed : null;
}
