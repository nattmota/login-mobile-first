function loadpk () {
    let url = 'https://pokeapi.co/api/v2/pokemon/';
    fetch(url + search.value.trim())
        .then((response) =>  {
            return response.json();
        })
        .then((data) => {
            console.clear();
            console.log(data);
            document.getElementById('nome').innerHTML = data['name'];
            document.getElementById('numero').innerHTML = data['id'];
            let pic = data['sprites']['back_default'];
            document.getElementById('pic').setAttribute('src', pic);
            document.getElementById('altura').innerHTML = data['height'];
            document.getElementById('peso').innerHTML = data['weight'];
            console.log(pic);
        })

        .catch((erro) => {
            console.log("Erro: " + erro);
        });
}

document.getElementById('btn1').onclick = loadpk;