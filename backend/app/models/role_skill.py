from sqlalchemy import Float, ForeignKey, Integer
from sqlalchemy.orm import Mapped, mapped_column

from app.models.base import Base


class RoleSkill(Base):
    __tablename__ = "role_skills"

    id: Mapped[int] = mapped_column(
        primary_key=True,
        index=True,
    )

    role_id: Mapped[int] = mapped_column(
        ForeignKey("roles.id"),
        nullable=False,
    )

    skill_id: Mapped[int] = mapped_column(
        ForeignKey("skills.id"),
        nullable=False,
    )

    importance: Mapped[float] = mapped_column(
        Float,
        default=1.0,
        nullable=False,
    )

    required_level: Mapped[float] = mapped_column(
        Float,
        default=0.0,
        nullable=False,
    )