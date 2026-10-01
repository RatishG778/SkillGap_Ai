from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.students import router as students_router


app = FastAPI(
    title="CareerOS AI API",
    version="0.1.0",
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:5174",
        "http://127.0.0.1:5174",
        "https://*.vercel.app",
        "https://*.vercel.dev",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(students_router)


@app.get("/")
def root():
    return {
        "name": "CareerOS AI",
        "status": "running",
        "version": "0.1.0",
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }