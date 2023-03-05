var diceContainer = document.getElementById("dice-container");
var addDieButton = document.getElementById("add-die");
var rollDiceButton = document.getElementById("roll-dice");
var diceArray = [];

addDieButton.addEventListener("click", function() {
	if (diceArray.length < 5) {
		var newDie = document.createElement("div");
		newDie.className = "die";
		newDie.textContent = "0";
		newDie.style.backgroundColor = getRandomColor();
		newDie.addEventListener("click", function() {
			this.textContent = Math.floor(Math.random() * 6) + 1;
		});
		diceContainer.appendChild(newDie);
		diceArray.push(newDie);
	}

	function getRandomColor() {
		var letters = "0123456789ABCDEF";
		var color = "#";
		for (var i = 0; i < 6; i++) {
		  color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	  }  
	  
});

rollDiceButton.addEventListener("click", function() {
	var sum = 0;
	for (var i = 0; i < diceArray.length; i++) {
		var value = Math.floor(Math.random() * 6) + 1;
		diceArray[i].textContent = value;
		sum += value;
	}
	alert("La somme des Dés lancé est : " + sum);
});


// Tout d'abord, les trois premières lignes utilisent la méthode getElementById() pour récupérer les éléments HTML 
// correspondant aux identifiants "dice-container", "add-die" et "roll-dice" dans le document.
// Ces éléments seront utilisés plus tard dans le code pour manipuler le contenu HTML.

// Ensuite, l'événement click est ajouté au bouton "add-die" en utilisant la méthode addEventListener().
// Lorsque le bouton est cliqué, la fonction anonyme associée est exécutée.
// Cette fonction vérifie d'abord que le nombre de dés ajoutés n'a pas atteint la limite de 5
// (pour éviter de surcharger la page avec trop de dés). Si la limite n'a pas été atteinte,
// un nouveau dé est créé en utilisant la méthode createElement() pour créer un nouvel élément de div. 
// Ce div est ensuite configuré avec une classe CSS "die", un texte initial de "0", 
// et un événement click qui génère un nombre aléatoire entre 1 et 6 et met à jour le texte du div avec ce nombre. 
// Enfin, le nouveau div est ajouté à l'élément HTML "dice-container",
// et une référence à ce div est ajoutée au tableau diceArray.

// L'événement click est également ajouté au bouton "roll-dice".
// Lorsque ce bouton est cliqué, la fonction anonyme associée est exécutée. 
// Cette fonction commence par initialiser une variable "sum" à zéro.
// Ensuite, elle parcourt le tableau diceArray, génère un nombre aléatoire entre 1 et 6 pour chaque dé,
// met à jour le texte du dé avec ce nombre, et ajoute la valeur à la variable "sum".
// Enfin, la somme est affichée dans une boîte de dialogue "alert".
