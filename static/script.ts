const button = document.getElementById("pingButton") as HTMLButtonElement;
const result = document.getElementById("result") as HTMLDivElement;

button.addEventListener("click", async () => {
    try {
        const response = await fetch("http://localhost:5000/ping");
        const data = await response.json();
        result.innerText = data.message;
    } catch (error) {
        result.innerText = "Error al conectar con el backend";
    }
});
