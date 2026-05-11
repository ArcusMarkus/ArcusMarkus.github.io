document.getElementById("animebtn").addEventListener("click", () =>{

    const anime = document.getElementById("animeInput").value;

    fetch (`https://api.jikan.moe/v4/anime?q=${anime}&limit=1`)
    .then(response => response.json())
    .then(data => {

        const animeInfo = data.data[0];

        document.getElementById("animeData").innerHTML = `
            <h3>${animeInfo.title}</h3>
            
            <img src="${animeInfo.images.jpg.image_url}" width="250">

            <p><strong>Score:</strong> ${animeInfo.score}</p>

            <p><strong>Episodes:</strong> ${animeInfo.episodes}</p>

            <p>${animeInfo.synopsis.substring(0, 300)}...</p>

            `;
    });
});
document.getElementById("pokemonbtn").addEventListener("click", () => {

    const pokemon = document.getElementById("pokemonInput").value.toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Pokemon not found");
            }
            return response.json();
        })
        .then(data => {

            document.getElementById("pokemonData").innerHTML = `
                <h3>${data.name.toUpperCase()}</h3>

                <img src="${data.sprites.front_default}" width="200">

                <p><strong>Height:</strong> ${data.height}</p>

                <p><strong>Weight:</strong> ${data.weight}</p>

                <p>
                    <strong>Type:</strong>
                    ${data.types[0].type.name}
                </p>
            `;
        })
        .catch(error => {

            document.getElementById("pokemonData").innerHTML = `
                <p>Pokemon not found.</p>
            `;

            console.log(error);
        });

});