from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Permitir conexión desde otras máquinas

@app.route('/ping', methods=['GET'])
def ping():
    return jsonify({"message": "Pong"}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)