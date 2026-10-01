from pydantic import BaseModel, EmailStr, Field


class StudentCreate(BaseModel):
    name: str = Field(min_length=2, max_length=150)
    email: EmailStr
    education: str | None = None
    degree: str | None = None
    graduation_year: int | None = None
    experience: str | None = None
    available_hours_per_week: int | None = Field(
        default=None,
        ge=1,
        le=80,
    )
    target_role_id: int | None = None


class StudentResponse(BaseModel):
    id: int
    name: str
    email: str
    education: str | None
    degree: str | None
    graduation_year: int | None
    experience: str | None
    available_hours_per_week: int | None
    target_role_id: int | None

    model_config = {
        "from_attributes": True
    }