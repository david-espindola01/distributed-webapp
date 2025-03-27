document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const errorMsg = document.getElementById("errorMsg");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Simulación de credenciales
        if (username === "admin" && password === "1234") {
            localStorage.setItem("loggedIn", "true"); 
            window.location.href = "index.html";
        } else {
            errorMsg.innerText = "Usuario o contraseña incorrectos";
        }
    });
});
