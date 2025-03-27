from flask import Flask, request, jsonify
from flask_cors import CORS
import jwt
import datetime

app = Flask(__name__)
CORS(app)

SECRET_KEY = "examplekey" 

USERS = {"admin": "admin"}

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    if USERS.get(username) == password:
        token = jwt.encode(
            {"user": username, "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1)},
            SECRET_KEY,
            algorithm="HS256"
        )
        return jsonify({"token": token}), 200
    return jsonify({"message": "Credenciales inválidas"}), 401

@app.route('/ping', methods=['GET'])
def ping():
    auth_header = request.headers.get("Authorization")
    if not auth_header:
        return jsonify({"message": "No autorizado"}), 401

    try:
        token = auth_header.split(" ")[1]
        jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        return jsonify({"message": "Pong"}), 200
    except jwt.ExpiredSignatureError:
        return jsonify({"message": "Token expirado"}), 401
    except jwt.InvalidTokenError:
        return jsonify({"message": "Token inválido"}), 401

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
