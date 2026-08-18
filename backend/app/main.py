from fastapi import FastAPI

app = FastAPI(
    title="CareerOS AI API",
    version="0.1.0",
)


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