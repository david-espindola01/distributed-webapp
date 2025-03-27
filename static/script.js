"use strict";
const API_URL = "https://distributed-webapp-production.up.railway.app";
const button = document.getElementById("pingButton");
const result = document.getElementById("result");

// Verifica autenticación antes de hacer la solicitud
button.addEventListener("click", async () => {
    const token = localStorage.getItem("token");
    if (!token) {
        window.location.href = "login.html"; 
        return;
    }

    try {
        const startTime = performance.now(); 
        const response = await fetch(`${API_URL}/ping`, {
            headers: { "Authorization": `Bearer ${token}` }
        });

        const endTime = performance.now();
        const pingTime = Math.round(endTime - startTime); 

        const data = await response.json();
        if (response.ok) {
            result.innerText = `${data.message} (${pingTime} ms)`;
        } else {
            result.innerText = data.message;
        }
    } catch (error) {
        result.innerText = "Error al conectar con el backend";
    }
});
