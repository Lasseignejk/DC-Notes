const pokemon = "Clefairy";
const pokemonList = ["Ponyta", "Vulpix", "Onix", "eevee"];

const onePokeBtn = document.querySelector(".onePokeBtn");
const manyPokeBtn = document.querySelector(".manyPokeBtn");
const pokeContainer = document.querySelector(".pokeContainer");

onePokeBtn.addEventListener("click", () => fetchOnePoke(pokemon));
manyPokeBtn.addEventListener("click", () => fetchManyPoke(pokemonList));

const fetchOnePoke = async (pokemon) => {
	fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)
		.then((response) => {
			if (!response.ok) {
				const errorDiv = document.createElement("div");
				const errorStatus = document.createElement("h3");
				const errorMessage = document.createElement("p");

				errorStatus.innerHTML = response.status;
				errorMessage.innerHTML =
					"Uh oh! It looks like there was an issue.";
				pokeContainer.innerHTML = "";
				errorDiv.classList.add("errorDiv");

				errorDiv.append(errorStatus, errorMessage);
				pokeContainer.append(errorDiv);
			}
			return response;
		})
		.then(async (response) => {
			data = await response.json();
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
				pokeMove.innerHTML = capitalizeFirstLetter(
					data.moves[i].move.name
				);
				pokeMovesDiv.append(pokeMove);
			}

			pokeImgDiv.append(pokeImg);
			pokeCard.append(pokeName, pokeImgDiv, pokeMovesDiv, pokeType);
			pokeContainer.append(pokeCard);
		})
		.catch((error) => {
			console.log(error);
		});
};

const capitalizeFirstLetter = (pokeName) => {
	firstLetter = pokeName[0].toUpperCase();
	return firstLetter + pokeName.slice(1);
};

const fetchManyPoke = async (pokemonList) => {
	pokeContainer.innerHTML = "";
	for (const pokemon of pokemonList) {
		fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)
			.then((response) => {
				if (!response.ok) {
					const errorDiv = document.createElement("div");
					const errorStatus = document.createElement("h3");
					const errorMessage = document.createElement("p");

					errorStatus.innerHTML = response.status;
					errorMessage.innerHTML =
						"Uh oh! It looks like there was an issue.";
					pokeContainer.innerHTML = "";
					errorDiv.classList.add("errorDiv");

					errorDiv.append(errorStatus, errorMessage);
					pokeContainer.append(errorDiv);
				}
				return response;
			})
			.then(async (response) => {
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
			})
			.catch((error) => {
				console.log(error);
			});
	}
};
