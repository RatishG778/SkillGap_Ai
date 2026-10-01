# CareerOS AI

A full-stack career intelligence app with a Vite + React frontend and a FastAPI backend.

## Stack
- Frontend: React, TypeScript, Vite
- Backend: FastAPI, SQLAlchemy, SQLite

## Prerequisites
- Node.js 18+
- Python 3.11+

## Local setup

### Frontend
```bash
cd frontend
npm install
cp .env.example .env
npm run dev
```

### Backend
```bash
cd backend
python -m venv .venv
.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
cp .env.example .env
python -m uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

## Production build
```bash
npm run build
```

## Notes
- The frontend is configured to call the backend at `http://127.0.0.1:8000` by default.
- The backend uses SQLite by default for local development and can be replaced with Postgres for deployment.
- Copy `.env.example` to `.env` before running the app locally.
