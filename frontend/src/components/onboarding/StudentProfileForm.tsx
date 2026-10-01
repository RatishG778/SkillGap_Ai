import { type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createStudent } from "../../services/student/student.service";
import { saveCurrentStudent } from "../../store/student.store";

function StudentProfileForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    education: "",
    degree: "",
    graduation_year: "",
    experience: "",
    available_hours_per_week: "",
    target_role_id: "",
  });

  function updateField(field: string, value: string) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const student = await createStudent({
        name: form.name,
        email: form.email,
        education: form.education || undefined,
        degree: form.degree || undefined,
        graduation_year: form.graduation_year
          ? Number(form.graduation_year)
          : undefined,
        experience: form.experience || undefined,
        available_hours_per_week: form.available_hours_per_week
          ? Number(form.available_hours_per_week)
          : undefined,
        target_role_id: form.target_role_id
          ? Number(form.target_role_id)
          : undefined,
      });

      saveCurrentStudent(student);
      setMessage(
        `Profile created successfully. Student ID: ${student.id}`,
      );
      navigate("/dashboard");
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="student-profile-form" onSubmit={handleSubmit}>
      <div className="profile-shell panel">
        <div className="profile-header">
          <span className="eyebrow">Profile setup</span>
          <h1>Create your student profile</h1>
          <p>
            We use this data to match your background to the right skill
            path, role fit, and learning roadmap.
          </p>
        </div>

        <div className="profile-grid">
          <label className="field-group">
            <span>Full name</span>
            <input
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              required
            />
          </label>

          <label className="field-group">
            <span>Email</span>
            <input
              type="email"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              required
            />
          </label>

          <label className="field-group">
            <span>Education</span>
            <input
              value={form.education}
              onChange={(event) => updateField("education", event.target.value)}
            />
          </label>

          <label className="field-group">
            <span>Degree</span>
            <input
              value={form.degree}
              onChange={(event) => updateField("degree", event.target.value)}
            />
          </label>

          <label className="field-group">
            <span>Graduation year</span>
            <input
              type="number"
              value={form.graduation_year}
              onChange={(event) =>
                updateField("graduation_year", event.target.value)
              }
            />
          </label>

          <label className="field-group">
            <span>Target role ID</span>
            <input
              type="number"
              value={form.target_role_id}
              onChange={(event) =>
                updateField("target_role_id", event.target.value)
              }
              min={1}
            />
          </label>

          <label className="field-group field-group-full">
            <span>Experience</span>
            <textarea
              rows={4}
              value={form.experience}
              onChange={(event) =>
                updateField("experience", event.target.value)
              }
            />
          </label>

          <label className="field-group">
            <span>Available hours / week</span>
            <input
              type="number"
              value={form.available_hours_per_week}
              onChange={(event) =>
                updateField("available_hours_per_week", event.target.value)
              }
              min={1}
              max={80}
            />
          </label>
        </div>

        <div className="profile-actions">
          <button type="submit" className="button button-primary" disabled={loading}>
            {loading ? "Creating profile..." : "Continue"}
          </button>
        </div>

        {message && <p className="form-message">{message}</p>}
      </div>
    </form>
  );
}

export default StudentProfileForm;