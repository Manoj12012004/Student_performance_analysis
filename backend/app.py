from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np

app = Flask(__name__)
CORS(app)  # Enable CORS
application=app
# Load the model
with open('linear_model.pkl', 'rb') as f:
    model = pickle.load(f)
# Mapping of categorical features to numerical values
gender_mapping = {'male': 0, 'female': 1}
race_ethnicity_mapping = {
    'group A': 0,
    'group B': 1,
    'group C': 2,
    'group D': 3,
    'group E': 4
}
parental_level_of_education_mapping = {
    'some high school': 0,
    'high school': 1,
    'some college': 2,
    'associate\'s degree': 3,
    'bachelor\'s degree': 4,
    'master\'s degree': 5
}
lunch_mapping = {'standard': 0, 'free/reduced': 1}
test_preparation_course_mapping = {'none': 0, 'completed': 1}

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    print(f"Received data: {data}")  # Debugging statement
    try:
        features = [
            gender_mapping[data['gender']],
            parental_level_of_education_mapping[data['parental_level_of_education']],
            test_preparation_course_mapping[data['test_preparation_course']],
            float(data['math_score']),
            float(data['reading_score'])
        ]
        print(f"Features: {features}")  # Debugging statement
    except KeyError as e:
        return jsonify({'error': f"Invalid key: {str(e)}"}), 400
    except ValueError as e:
        return jsonify({'error': f"Invalid value: {str(e)}"}), 400

    # Convert features to a numpy array and reshape for a single prediction
    features = np.array(features).reshape(1, -1)
    prediction = model.predict(features)[0]
    print(f"Prediction: {prediction}")  # Debugging statement
    return jsonify({'prediction': float(prediction)})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
