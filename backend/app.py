from flask import Flask, jsonify
from flask_cors import CORS
import time

app = Flask(__name__)
CORS(app)

@app.route('/ping', methods=['GET'])
def ping():
    start_time = time.time()  # Captura el tiempo de inicio
    response = jsonify({"message": "Pong", "ping": round((time.time() - start_time) * 1000, 2)})  # Calcula el ping en ms
    return response, 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
