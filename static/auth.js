const API_URL = "https://distributed-webapp-production.up.railway.app";

document.getElementById("loginForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch(`${API_URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();
        if (response.ok) {
            localStorage.setItem("token", data.token);
            window.location.href = "index.html";  // Redirige tras login exitoso
        } else {
            document.getElementById("error").innerText = data.message;
        }
    } catch (error) {
        document.getElementById("error").innerText = "Error en la conexión";
    }
});
