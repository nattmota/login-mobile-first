function verificar() {
    let inputUser = document.getElementById("user");
    let inputPassword = document.getElementById("password").value

    if (inputUser === "" || inputPassword === "") {
        alert("Preencha todos os campos!");
    } 
    else if (inputUser !== "admin" && inputPassword !== "admin") {
        alert("Senha incorreta!");
    } else{
        alert("Bem-Vindo!");
        window.location.href = "./pages/poke-page.html";
    }
}