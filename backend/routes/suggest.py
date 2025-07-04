from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from ai.suggestor import generate_suggestions  # Make sure this path is correct
import logging

router = APIRouter()

# Enable logging
logging.basicConfig(level=logging.INFO)

class FormData(BaseModel):
    business_name: str
    category: str
    description: str

@router.post("/suggest")
async def suggest(data: FormData):
    try:
        logging.info("📥 Incoming request: %s", data.dict())

        # If your function is async, use `await generate_suggestions(...)`
        result = generate_suggestions(
            data.business_name,
            data.category,
            data.description
        )

        logging.info("✅ AI Response: %s", result)

        return result

    except Exception as e:
        logging.error("❌ Error while generating suggestion: %s", str(e))
        raise HTTPException(status_code=500, detail="Internal Server Error: " + str(e))
