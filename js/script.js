// MILESTONE 1
// La prima cosa fondamentale è sapere quali libri abbiamo in libreria. Quindi mostriamoli sulla pagina.
// [IMPORTANTE] In questa fase, non focalizziamoci sul layout (quello possiamo farlo in un secondo momento). Limitiamoci a stamparli in una ul o in dei paragrafi con degli hr come separatori.

// MILESTONE 2
// Abbiamo la lista di libri, perfetto!
// Proviamo ad aggiungere manualmente un nuovo libro nella libreria.

// MILESTONE 3
// I libri cominciano ad essere un bel po'. Abbiamo bisogno di poter effettuare una ricerca!
// Creiamo un input in cui poter inserire il nome di un autore. Al click su un pulsante "Cerca", andiamo a filtrare i libri da visualizzare.


let books = [
	{
		title: "Il vecchio e il mare",
		author: "Ernest Hemingway",
		year: 1951
	},
	{
		title: "La forma dell'acqua",
		author: "Andrea Camilleri",
		year: 1994
	},
	{
		title: "Elogio della follia",
		author: "Henri Laborit",
		year: 1976
	},
	{
		title: "La camera azzurra",
		author: "George Simenon",
		year: 1964
	}
];


const appArray = ["titolo", "autore", "anno"];

$("#add-button").click(
  function (){

		books = addElement(books);
		print(books);

		$("#input-title").val("");
		$("#input-author").val("");
		$("#input-year").val("");

	}
);

$(".input").keydown(
	function(event){
		if(event.which == 13){

			books = addElement(books);
			print(books);

			$("#input-title").val("");
			$("#input-author").val("");
			$("#input-year").val("");

		}
	}
);


// $("#search-button").click(
// 	function(){
// 		let searchedBooks = [];
// 		books.forEach(
// 			(element) => {
// 				let search = $("#input-search").val();
// 				search = letterFix(search);
// 				console.log(search);
// 				if(search == element.author || search == element.title){
// 					searchedBooks = [
// 						...searchedBooks,
// 						element
// 					];
// 				}
// 			}
// 		);
// 		print(searchedBooks);
// 	}
// );

$("#input-search").keyup(
	function(event){
		let searchedBooks = [];
		books.forEach(
			(element) => {
				let search = $("#input-search").val();
				if(element.author.toUpperCase().includes(search.toUpperCase()) || element.title.toUpperCase().includes(search.toUpperCase())){
					searchedBooks = [
						...searchedBooks,
						element
					];
				}
			}
		);
		print(searchedBooks);
		if(searchedBooks == ""){
			$("#container").html("Nessun libro trovato con i parametri di ricerca indicati.");
		}
	}
);

print(books);


//--------------------------------------------------
// FUNZIONI
function print(array){
  $("#container").html("");
  array.forEach(
    (element) => {
      $("#container").append(
        `
        <div class="book">
          <div class="title">${element.title}</div>
          <div class="author">${element.author}</div>
          <div class="year">${element.year}</div>

        </div>
        `
      );
    }
  );
}

function addElement(array){
	const inputArray = [$("#input-title").val(), $("#input-author").val(), $("#input-year").val()];

	const [title, author, year] = inputArray;

	if(title != "" && author != "" && year != ""){
		const newBook = {
			title,
			author,
			year
		}
		var i = 0;
		var trovato = false;
		while(i < array.length && trovato == false){
			if(array[i].title == newBook.title && array[i].author == newBook.author && array[i].year == newBook.year){
				trovato = true;
				alert("Libro già inserito");
			}
			else{
				i++;
			}
		}

		if(trovato == false){
			array = [
				...array,
				newBook
			];
		}
	} else {
		alert("Inserisci tutti i dati")
	}
	return array;
}
