import type { Student } from "../services/student/student.service";

const STORAGE_KEY = "skillgap-ai:student";

export function loadCurrentStudent(): Student | null {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);

  if (!raw) {
    return null;
  }

  try {
    const parsed = JSON.parse(raw) as Student;
    return parsed && typeof parsed.id === "number" ? parsed : null;
  } catch {
    return null;
  }
}

export function saveCurrentStudent(student: Student) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(student));
}

export function clearCurrentStudent() {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(STORAGE_KEY);
}

export function getTargetRoleLabel(targetRoleId: number | null | undefined) {
  if (targetRoleId === 1) return "Data Analyst";
  if (targetRoleId === 2) return "Product Analyst";
  if (targetRoleId === 3) return "Business Analyst";
  if (targetRoleId === 4) return "Data Scientist";
  return "Target Role";
}
