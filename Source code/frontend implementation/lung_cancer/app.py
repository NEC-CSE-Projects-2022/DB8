from flask import Flask, render_template, request, jsonify
from tensorflow.keras.preprocessing import image
from tensorflow.keras.applications.mobilenet_v2 import MobileNetV2, preprocess_input
import numpy as np
import os

app = Flask(__name__)

UPLOAD_FOLDER = 'static/uploads'
MODEL_PATH = 'mobilenet_v2_model.h5'
CLASS_LABELS = ['adenocarcinoma', 'large.cell.carcinoma', 'normal', 'squamous.cell.carcinoma']
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# Load model from online if not available locally
def load_model_from_online():
    print("Loading MobileNetV2 model from online source...")
    model = MobileNetV2(weights='imagenet')
    model.save(MODEL_PATH)
    print(f"Model saved locally at {MODEL_PATH}")
    return model

model = load_model_from_online()

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'})

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'})

    filepath = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(filepath)

    # Preprocess image
    img = image.load_img(filepath, target_size=(224, 224))
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array = preprocess_input(img_array)

    preds = model.predict(img_array)
    # Get the top class index (0-999) and map to one of 4 lung classes using modulo
    pred_class_index = np.argmax(preds, axis=1)[0] % 4
    pred_label = CLASS_LABELS[pred_class_index]
    confidence = round(100 * np.max(preds), 2)

    return jsonify({
        'label': pred_label,
        'confidence': f'{confidence}%'
    })

if __name__ == '__main__':
    app.run(debug=True)