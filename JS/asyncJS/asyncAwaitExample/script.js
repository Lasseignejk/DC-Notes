const pokemon = "Pikachu";
const pokemonList = ["Pikachu", "Squirtle", "Charmander", "Bulbasaur"];

const onePokeBtn = document.querySelector(".onePokeBtn");
const manyPokeBtn = document.querySelector(".manyPokeBtn");
const pokeContainer = document.querySelector(".pokeContainer");

onePokeBtn.addEventListener("click", () => fetchOnePoke(pokemon));
manyPokeBtn.addEventListener("click", () => fetchManyPoke(pokemonList));

const fetchOnePoke = async (pokemon) => {
	try {
		const response = await fetch(
			`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`
		);

		const data = await response.json();
		pokeContainer.innerHTML = "";

		pokeCard = document.createElement("div");
		pokeName = document.createElement("h1");
		pokeImgDiv = document.createElement("div");
		pokeImg = document.createElement("img");
		pokeMovesDiv = document.createElement("div");
		pokeType = document.createElement("div");

		pokeCard.classList.add("pokeCard");
		pokeName.innerHTML = capitalizeFirstLetter(data.name);
		pokeImgDiv.classList.add("pokeImgDiv");
		pokeImg.src = data.sprites.front_default;
		pokeImg.classList.add("pokeImg");
		pokeMovesDiv.classList.add("pokeMovesDiv");
		pokeType.classList.add("pokeType");
		pokeType.innerHTML = data.types[0].type.name;

		for (let i = 0; i < 4; i++) {
			pokeMove = document.createElement("p");
			pokeMove.innerHTML = capitalizeFirstLetter(data.moves[i].move.name);
			pokeMovesDiv.append(pokeMove);
		}

		pokeImgDiv.append(pokeImg);
		pokeCard.append(pokeName, pokeImgDiv, pokeMovesDiv, pokeType);
		pokeContainer.append(pokeCard);
	} catch (error) {
		const errorDiv = document.createElement("div");
		const errorStatus = document.createElement("h3");
		const errorMessage = document.createElement("p");

		errorStatus.innerHTML = "Uh oh! It looks like there was an issue.";
		errorMessage.innerHTML = error;
		pokeContainer.innerHTML = "";
		errorDiv.classList.add("errorDiv");

		errorDiv.append(errorStatus, errorMessage);
		pokeContainer.append(errorDiv);
	}
};

const capitalizeFirstLetter = (pokeName) => {
	firstLetter = pokeName[0].toUpperCase();
	return firstLetter + pokeName.slice(1);
};

const fetchManyPoke = async (pokemonList) => {
	pokeContainer.innerHTML = "";
	try {
		for (const pokemon of pokemonList) {
			const response = await fetch(
				`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`
			);
			const data = await response.json();

			pokeCard = document.createElement("div");
			pokeName = document.createElement("h1");
			pokeImgDiv = document.createElement("div");
			pokeImg = document.createElement("img");
			pokeMovesDiv = document.createElement("div");
			pokeType = document.createElement("div");

			pokeCard.classList.add("pokeCard");
			pokeName.innerHTML = capitalizeFirstLetter(data.name);
			pokeImgDiv.classList.add("pokeImgDiv");
			pokeImg.src = data.sprites.front_default;
			pokeImg.classList.add("pokeImg");
			pokeMovesDiv.classList.add("pokeMovesDiv");
			pokeType.classList.add("pokeType");
			pokeType.innerHTML = data.types[0].type.name;

			for (let i = 0; i < 4; i++) {
				pokeMove = document.createElement("p");
				pokeMove.innerHTML = capitalizeFirstLetter(
					data.moves[i].move.name
				);
				pokeMovesDiv.append(pokeMove);
			}

			pokeImgDiv.append(pokeImg);
			pokeCard.append(pokeName, pokeImgDiv, pokeMovesDiv, pokeType);
			pokeContainer.append(pokeCard);
		}
	} catch (error) {
		const errorDiv = document.createElement("div");
		const errorStatus = document.createElement("h3");
		const errorMessage = document.createElement("p");

		errorStatus.innerHTML = "Uh oh! It looks like there was an issue.";
		errorMessage.innerHTML = error;
		pokeContainer.innerHTML = "";
		errorDiv.classList.add("errorDiv");

		errorDiv.append(errorStatus, errorMessage);
		pokeContainer.append(errorDiv);
	}
};
