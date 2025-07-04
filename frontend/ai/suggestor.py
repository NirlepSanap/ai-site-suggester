import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

def generate_suggestions(name, category, desc):
    return {
        "template": "modern-template",
        "layout": ["hero", "about", "services", "contact"],
        "content": {
            "hero": f"Welcome to {name}! The best in {category}.",
            "about": f"{desc}",
            "services": [f"{category} #1", f"{category} #2"]
        }
    }

    response = genai.GenerativeModel("gemini-pro").generate_content(prompt)
    return eval(response.text.strip())
