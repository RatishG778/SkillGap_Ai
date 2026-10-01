from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.models.student import Student
from app.schemas.student import StudentCreate, StudentResponse


router = APIRouter(
    prefix="/api/students",
    tags=["Students"],
)


@router.post(
    "",
    response_model=StudentResponse,
    status_code=201,
)
def create_student(
    student_data: StudentCreate,
    db: Session = Depends(get_db),
):
    existing_student = (
        db.query(Student)
        .filter(Student.email == student_data.email)
        .first()
    )

    if existing_student:
        raise HTTPException(
            status_code=409,
            detail="A student with this email already exists.",
        )

    student = Student(
        name=student_data.name,
        email=student_data.email,
        education=student_data.education,
        degree=student_data.degree,
        graduation_year=student_data.graduation_year,
        experience=student_data.experience,
        available_hours_per_week=student_data.available_hours_per_week,
        target_role_id=student_data.target_role_id,
    )

    db.add(student)
    db.commit()
    db.refresh(student)

    return student


@router.get(
    "/{student_id}",
    response_model=StudentResponse,
)
def get_student(
    student_id: int,
    db: Session = Depends(get_db),
):
    student = (
        db.query(Student)
        .filter(Student.id == student_id)
        .first()
    )

    if not student:
        raise HTTPException(
            status_code=404,
            detail="Student not found.",
        )

    return student