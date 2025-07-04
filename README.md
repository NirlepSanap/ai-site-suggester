# AI-Powered Site Suggester API

## 🔍 Context
This API is part of the Websites.co.in assessment. It provides AI-generated website templates, layouts, and content suggestions based on user inputs from a form-based website builder.

## 💡 Features
- Accepts form input (business name, category, description)
- Uses Gemini AI to generate:
  - Suggested website template
  - Suggested layout sections
  - Auto-generated content (hero line, about, services)

## 🛠️ Tech Stack
- FastAPI
- Google Gemini API (`google-generativeai`)
- Python 3.10+
- REST Testing (Postman or `.http`)

## 🚀 Run Locally

```bash
git clone <repo>
cd ai-site-suggester
python -m venv venv
venv\Scripts\activate  # Windows
pip install -r requirements.txt
uvicorn main:app --reload
