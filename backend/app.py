from flask import Flask, request, jsonify
from flask_cors import CORS
from textblob import TextBlob
import os

app = Flask(__name__)

# Allow requests from React frontend
CORS(app)

@app.route("/")
def home():
    return jsonify({
        "message": "Sentiment Analysis API is running"
    })

@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.get_json()

    text = data.get("text", "").strip()

    if not text:
        return jsonify({
            "error": "Text is required"
        }), 400

    blob = TextBlob(text)

    polarity = blob.sentiment.polarity
    subjectivity = blob.sentiment.subjectivity

    if polarity > 0.1:
        sentiment = "Positive"
    elif polarity < -0.1:
        sentiment = "Negative"
    else:
        sentiment = "Neutral"

    return jsonify({
        "sentiment": sentiment,
        "polarity": round(polarity, 3),
        "subjectivity": round(subjectivity, 3)
    })

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))

    app.run(
        host="0.0.0.0",
        port=port,
        debug=True
    )