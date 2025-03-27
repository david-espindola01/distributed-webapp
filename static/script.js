"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const API_URL = "https://distributed-webapp-production.up.railway.app/ping";
const button = document.getElementById("pingButton");
const result = document.getElementById("result");

button.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const start = Date.now(); // Mide el tiempo antes del request
        const response = yield fetch(API_URL);
        const end = Date.now(); // Mide el tiempo después de recibir la respuesta

        if (!response.ok) {
            throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = yield response.json();
        const pingTime = end - start; // Calcula el tiempo transcurrido

        result.innerText = `${data.message} - Ping: ${pingTime} ms`;
    }
    catch (error) {
        console.error("Fetch error:", error);
        result.innerText = `Error: ${error.message}`;
    }
}));
