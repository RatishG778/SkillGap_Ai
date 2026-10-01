from app.core.database import engine
from app.models import Base

# Import models so SQLAlchemy registers them.
from app.models import (
    Role,
    Skill,
    Student,
    StudentSkill,
    RoleSkill,
)

print("Creating database tables...")

Base.metadata.create_all(bind=engine)

print("Database tables created successfully.")