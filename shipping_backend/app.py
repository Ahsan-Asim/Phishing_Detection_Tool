from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch

app = Flask(__name__)

# Enable CORS for all routes
CORS(app)  # This allows all origins to access the API

# Load the model
# tokenizer = AutoTokenizer.from_pretrained("../phishing_model")
# model = AutoModelForSequenceClassification.from_pretrained(".,/phishing_model")
from transformers import AutoTokenizer, AutoModelForSequenceClassification

model_name = "bert-finetuned-phishing"  # Replace with your model ID on Hugging Face Hub
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSequenceClassification.from_pretrained(model_name)



@app.route('/check_url', methods=['POST'])
def check_url():
    data = request.json
    text = data.get('text', '')
    inputs = tokenizer(text, return_tensors="pt", truncation=True, padding=True)

    with torch.no_grad():
        outputs = model(**inputs)

    logits = outputs.logits
    probabilities = torch.nn.Softmax(dim=-1)(logits)
    predicted_label = torch.argmax(probabilities, dim=-1).item()

    labels = ['not_phishing', 'phishing']
    return jsonify({
        "prediction": labels[predicted_label],
        "confidence": float(probabilities[0][predicted_label])
    })

if __name__ == "__main__":
    app.run(debug=True)
