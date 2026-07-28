// Shared between the client-side form dropdowns and server-side validation
// so the two can never drift out of sync.

export const HONEYPOT_FIELD = "middle_name_confirm";

export const ETHNICITY_OPTIONS = ["Hispanic or Latino", "Non-Hispanic or Latino"] as const;

export const RACE_OPTIONS = [
  "American Indian or Alaska Native",
  "Asian",
  "Black or African American",
  "Native Hawaiian or Other Pacific Islander",
  "White",
  "Two or More Races",
] as const;

export const GENDER_OPTIONS = ["Male", "Female", "Non-binary / Other", "Prefer not to say"] as const;

export const VETERAN_OPTIONS = ["Yes", "No"] as const;

export const CLASSIFICATION_OPTIONS = [
  "1st Year",
  "2nd Year",
  "3rd Year",
  "4th Year",
  "5th Year",
] as const;
