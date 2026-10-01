const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export interface StudentCreate {
  name: string;
  email: string;
  education?: string;
  degree?: string;
  graduation_year?: number;
  experience?: string;
  available_hours_per_week?: number;
  target_role_id?: number | null;
}

export interface Student {
  id: number;
  name: string;
  email: string;
  education: string | null;
  degree: string | null;
  graduation_year: number | null;
  experience: string | null;
  available_hours_per_week: number | null;
  target_role_id: number | null;
}

export async function createStudent(
  data: StudentCreate,
): Promise<Student> {
  const response = await fetch(
    `${API_BASE_URL}/api/students`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  );

  if (!response.ok) {
    const error = await response.json();
    throw new Error(
      error.detail || "Failed to create student",
    );
  }

  return response.json();
}

export async function getStudent(
  studentId: number,
): Promise<Student> {
  const response = await fetch(
    `${API_BASE_URL}/api/students/${studentId}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch student");
  }

  return response.json();
}