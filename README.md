# Sentiment Analysis Web Application

## Overview

This project is a Sentiment Analysis Web Application developed using React, TypeScript, Flask, and TextBlob. The application analyzes user-entered text and classifies it as Positive, Negative, or Neutral. It also displays polarity and subjectivity scores to provide deeper insights into the sentiment of the text.

---

## Features

* Analyze user-entered text in real time
* Classify sentiment as:

  * Positive
  * Negative
  * Neutral
* Display polarity score (-1 to 1)
* Display subjectivity score (0 to 1)
* Responsive and modern user interface
* REST API communication between React and Flask

---

## Technology Stack

### Frontend

* React
* TypeScript
* Tailwind CSS
* Axios
* Vite

### Backend

* Flask
* Flask-CORS
* TextBlob

### NLP Library

* TextBlob

---

## Project Structure

```text
sentiment-analysis/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── types/
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── package.json
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── venv/
│
└── README.md
```

---

## Installation and Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd sentiment-analysis
```

---

### 2. Setup Backend

Navigate to the backend folder:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate the virtual environment:

**Windows**

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Download TextBlob corpora:

```bash
python -m textblob.download_corpora
```

Run the Flask server:

```bash
python app.py
```

Backend runs at:

```text
http://localhost:5000
```

---

### 3. Setup Frontend

Open a new terminal and navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

---

## API Endpoint

### Analyze Sentiment

**POST** `/analyze`

Request:

```json
{
  "text": "I love this project."
}
```

Response:

```json
{
  "sentiment": "Positive",
  "polarity": 0.5,
  "subjectivity": 0.6
}
```

---

## Sentiment Classification Logic

| Polarity Range | Sentiment |
| -------------- | --------- |
| > 0.1          | Positive  |
| < -0.1         | Negative  |
| -0.1 to 0.1    | Neutral   |

---

## Future Enhancements

* Sentiment history tracking
* Data visualization charts
* User authentication
* Database integration
* Multi-language sentiment analysis
* Deployment using Vercel and Render

---

## Author

PENTAM KEERTHAN

---

## License

This project is developed for academic and educational purposes.
