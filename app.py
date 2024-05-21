from flask import Flask, request, jsonify
from transformers import pipeline
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
# Load the pipeline
pipe = pipeline("token-classification", model="mirfan899/uner-bert-ner")

def convert_to_native_types(result):
    for item in result:
        item['score'] = float(item['score'])
    return result

@app.route('/classify', methods=['POST'])
def classify():
    # Get the text from the request
    data = request.json
    text = data.get('text', '')

    # Perform token classification
    results = pipe(text)
    results = convert_to_native_types(results)

    return jsonify(results)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)

