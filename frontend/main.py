from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.suggest import router as suggest_router

app = FastAPI()

# Enable CORS so frontend at localhost:3000 can access the backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Change this if frontend is hosted elsewhere
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include the /suggest endpoint
app.include_router(suggest_router)
