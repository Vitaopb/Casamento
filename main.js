// Array com todos os nomes
const names = [
  "Pelado",
  "Giovana",
  "Miguel",
  "Tia Marta",
  "Suleni",
  "Joao Davi",
  "Nadir",
  "Ewerton",
  "Claudia",
  "Yan",
  "Franciny",
  "Ducarmo",
  "Cida",
  "Letícia",
  "Profeta",
  "Nal",
  "Geneci",
  "Taciana",
  "Léo",
  "Débora de Jão",
  "Miguel Justino",
  "Fransisco Lieuthier",
  "Lindinalva Lieuthier",
  "Guilherme Lieuthier",
  "Dudê (Tia Sandra)",
  "Neta (Tia Sandra)",
  "Renata Soares",
  "Maclaren Soares",
  "Daysa",
  "Dayane",
  "Dayane de Lucas",
  "Neto (Eduarda)",
  "João Gomes",
  "Bianca (Mãe de Lorena)",
  "Jandersson Campos",
  "Cleidinha",
  "Gabi",
  "Duda",
  "Vanessa",
  "Jair",
  "Luiza",
  "Tia Amanda",
  "Leonardo Pontes",
  "Alcione Pontes",
  "Sara",
  "Bruno Ulisses",
  "Diogo Vinicius",
  "Vando",
  "Dione",
  "Maraisa",
  "Donato",
  "Julia",
  "Alandreck",
  "Janice",
  "Irece",
  "Adriano",
  "Adrielen",
  "Joseane",
  "Pedro (Primo de Beatriz)",
  "Bruno",
  "Brenda",
  "Livinho",
  "Iraci",
  "Atilio",
  "Marcilene",
  "Inaldo",
  "Adilson",
  "Barbara",
  "Sabrina",
  "Ketily",
  "Alice",
  "Nara",
  "Ewelin",
  "Nilton",
  "Gustavo",
  "Maria Claudia",
  "Alicia Lais",
  "Luana",
  "Charamba",
  "Anabela",
  "Nauany",
  "Erick",
  "Mayra",
  "Marcos",
  "Daniele",
  "Ana Paula",
  "Anderson",
  "Jorginho",
  "Telma",
  "Tania",
  "Carlos",
  "Nando",
  "São",
  "Renata Freitas",
  "Vitória Freitas",
  "André Barros",
  "Hilmer",
  "Wind",
  "Pedro (Isabel)",
  "Isabel",
  "Edilene",
  "Carito",
  "Leninha",
  "Rubeli",
  "Janinho",
  "Adriana",
  "Gilson",
  "Lucia",
  "Mae de Erick",
  "Tio Anderson",
  "Vani",
  "Akila",
  "Genilson",
  "Givanildo",
  "Marily",
  "Vitor",
  "Airam",
  "Carlinhos",
  "Gilvan",
  "Givanilda",
  "Maysa",
  "William",
  "Anginha",
  "Refson",
  "Emilia",
  "Conrado",
  "Karol",
  "Diogo",
  "Karina",
  "Erivelton",
  "Elizangela",
  "Fatima",
  "Rayane",
  "Carol",
  "Vitor de Carol",
  "Mirto",
  "Cleiton Carlos",
  "Vitória Régia",
  "Lucas",
  "Eduarda",
  "Kleber Lucas",
  "Marcia Freitas",
  "Ronaldo Freitas",
  "Eliane",
  "Giliade",
  "Lucas de Dany",
  "Joelma Campos",
  "Janeton Campos",
  "Kennya",
  "Vaga",
  "Tio Junior",
  "Tia Ivania",
  "Tia Nara",
  "Flávio",
  "Kaue",
  "Bruno Soares",
  "Mãe de Luana",
  "Tia Mira",
  "Cosmo Lieuthier",
  "Eduarda Lieuthier",
  "João Lieuthier",
  "Ana Lice Lieuthier",
  "Graçinha",
  "Zezito",
  "Tia Rosa",
  "Tio Ró",
  "Tia Lita",
  "Tia Benon",
  "Tio Ricardo",
  "Tia Roseane",
  "Cauã Fernando",
  "Vaga",
  "Vaga",
  "Leonardo",
  "Lara Barros",
  "Edna Barros",
  "Ricardinho Barros",
  "Bia Barros",
  "Rafael Trajano",
  "Eliane Trajano",
  "July Soares",
  "Matuza Soares",
  "Samara Soares",
  "João Guilherme Soares",
  "Pedro Soares",
  "Armando Lieuthier",
  "Maria Lieuthier",
  "Nuninha Lieuthier",
  "Ana Lieuthier",
  "Ueliton Silva",
  "Amanda Lieuthier",
  "Silva",
  "Selma",
  "Diany Soares",
  "José Amaro",
  "Lídia Lieuthier",
  "Sarah Lieuthier",
  "Sandra Íris",
  "Maria Vitória",
  "Flameu",
  "Milena de Rhuan",
  "João Vitor",
  "Rhuan Sidney",
  "Ludmila Nobréga",
  "Gabriel Almeida",
  "Ítalo Gonçalves",
  "Ingrid Rangel",
  "Mércia",
  "Kamila Soares",
  "Robinho",
  "Rita Soares",
  "Ronaldo de Rita",
  "Bisa Rita",
  "Tio Fernando",
  "Esposa de Fernando",
  "Filho de Tio Fernando",
  "Esposa Filho - Fernando",
  "Conceição",
  "Tia Vandete",
  "Tia Mercia",
  "ZZA - Vaga 1",
  "ZZB - Vaga 2",
  "ZZC - Vaga 3",
  "ZZD - Vaga 4",
  "ZZE - Vaga 5",
  "ZZF - Vaga 6",
  "ZZG - Vaga 7",
  "ZZH - Vaga 8",
  "ZZI - Vaga 9",
  "ZZJ - Vaga 10",
  "ZZK - Vaga 11",
  "ZZL - Vaga 12",
  "ZZM - Vaga 13",
  "ZZN - Vaga 14",
  "ZZO - Vaga 15",
  "ZZP - Vaga 16",
  "ZZQ - Vaga 17",
  "ZZR - Vaga 18",
  "ZZS - Vaga 19",
];

const nameListElement = document.getElementById("nameList");
const nameFilterInput = document.getElementById("nameFilter");
const restPeoples = document.getElementsByTagName("restPeoples");
const totalValuePayment = document.getElementById("totalValuePayment");

restPeoples.innerHTML = `Pessoas restantes: 15`

// Função para exibir os nomes na lista
function displayNames(namesArray) {
  namesArray.sort((a, b) => a.localeCompare(b));
  nameListElement.innerHTML = "";
  namesArray.forEach((name, index) => {
    const nameItem = document.createElement("div");
    nameItem.classList.add("name-item");
    nameItem.textContent = `${index + 1}. ${name}`;
    nameListElement.appendChild(nameItem);
  });
}

// Inicialmente, exibe todos os nomes
displayNames(names);

// Adiciona um listener ao input para filtrar os nomes
nameFilterInput.addEventListener("input", function () {
  const filterValue = this.value.toLowerCase();
  const filteredNames = names.filter((name) =>
    name.toLowerCase().includes(filterValue)
  );
  displayNames(filteredNames);
});
