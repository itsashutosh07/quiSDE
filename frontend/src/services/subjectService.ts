import type { Subject } from "../types/subject";

export async function fetchSubjects(): Promise<Subject[]> {
  const response = await fetch("/api/subjects");
  if (!response.ok) {
    throw new Error("Failed to fetch subjects");
  }
  return response.json();
}
