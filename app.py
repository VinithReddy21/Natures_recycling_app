from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/upload', methods=['POST'])
def upload_waste():
    try:
        image = request.files.get('image')
        location = request.form.get('location')

        if not image or not location:
            return jsonify({"message": "Missing image or location"}), 400

        image_path = os.path.join(UPLOAD_FOLDER, image.filename)
        image.save(image_path)

        return jsonify({"message": "Waste data submitted successfully!"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/fundraiser', methods=['POST'])
def upload_fundraiser():
    try:
        cash_amount = request.form.get('cashAmount')
        receipt_image = request.files.get('receiptImage')

        if not cash_amount or not receipt_image:
            return jsonify({"message": "Missing cash amount or receipt image"}), 400

        receipt_path = os.path.join(UPLOAD_FOLDER, receipt_image.filename)
        receipt_image.save(receipt_path)

        return jsonify({"message": "Fundraiser data submitted successfully!"}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
