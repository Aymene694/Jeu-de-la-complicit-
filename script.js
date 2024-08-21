let teams = {
    team1: { name: "", players: [], score: 0, passes: 2 },
    team2: { name: "", players: [], score: 0, passes: 2 }
};

let currentPlayerIndex = 0;
const footballers = [
    "Lionel Messi", "Cristiano Ronaldo", "Neymar", "Kylian Mbappé", "Zlatan Ibrahimović",
    "Moussa Dembélé", "Kenny Lala", "Mario Balotelli", "Wissam Ben Yedder", "Rachid Ghezzal",
    "Houssem Aouar", "Alassane Pléa", "Gaëtan Laborde", "Jimmy Briand", "Valère Germain",
    "Benjamin André", "Ismaïla Sarr", "Eduardo Camavinga", "Ludovic Blas", "Randal Kolo Muani",
    "Jordan Veretout", "Benjamin Lecomte", "Hilton", "Rémy Cabella", "Marcus Thuram",
    "Andy Delort", "Gaël Kakuta", "Seko Fofana", "Jean-Kévin Augustin", "Stephy Mavididi",
    "Ludovic Ajorque", "Romain Hamouma", "Habib Diallo", "Lucas Paquetá", "Malcom",
    "Serhou Guirassy", "Téji Savanier", "Bakambu", "Benoît Costil", "Alban Lafont",
    "Lassana Diarra", "Jonathan Ikoné", "Gaël Clichy", "Giovani Lo Celso", "Tanguy Ndombele",
    "Youssouf Koné", "Maxwell Cornet", "Pape Gueye", "Bruno Guimarães", "Karl Toko Ekambi",
    "Amine Gouiri", "Kylian Mbappé", "Erling Haaland", "Vinícius Júnior", "Jude Bellingham",
    "Pedri", "Bukayo Saka", "Jamal Musiala", "Phil Foden", "Rodrygo", "Gavi",
    "Federico Valverde", "Khvicha Kvaratskhelia", "Declan Rice", "Josko Gvardiol",
    "Victor Osimhen", "Rafael Leão", "Mohamed Salah", "Harry Kane", "Jadon Sancho",
    "Martin Ødegaard", "Mason Mount", "Aurélien Tchouaméni", "Federico Chiesa",
    "Alphonso Davies", "João Félix", "Antony", "Ansu Fati", "Kai Havertz",
    "Enzo Fernández", "Jules Koundé", "Josip Stanišić", "William Saliba", "Pedrinho",
    "Lautaro Martínez", "Christopher Nkunku", "Ferran Torres", "Matthijs de Ligt",
    "Rúben Dias", "Bernardo Silva", "Trent Alexander-Arnold", "Marcus Rashford",
    "Leandro Trossard", "Diogo Jota", "Giovanni Reyna", "Sandro Tonali", "Bruno Guimarães",
    "Mykhailo Mudryk", "Eder Militão", "Sven Botman", "Youssoufa Moukoko", "Leroy Sané",
    "Raphinha", "Moussa Diaby", "Jérémy Doku", "Thiago Almada", "Pau Torres",
    "Dusan Vlahovic", "Randal Kolo Muani", "Rodri", "Lucas Paquetá", "Gabriel Martinelli",
    "Achraf Hakimi", "André Onana", "Ryan Gravenberch", "Alessandro Bastoni", "Nico Williams",
    "Sergino Dest", "Pedro Porro", "Cody Gakpo", "Benjamin Sesko", "Dominik Szoboszlai",
    "Mikel Oyarzabal", "James Maddison", "Giovanni Simeone", "Manuel Ugarte", "Mohammed Kudus",
    "Jeremie Frimpong", "Wilfried Gnonto", "Florian Wirtz", "Lucas Hernández", "Luka Modrić",
    "Marquinhos", "Kalvin Phillips", "Dani Olmo", "Gianluigi Donnarumma", "Jan Oblak",
    "David Alaba", "Ivan Toney", "Paul Pogba", "Milan Skriniar", "Adrien Rabiot",
    "Jorginho", "Sergej Milinković-Savić", "Philippe Coutinho", "Zinedine Zidane",
    "Lionel Messi", "Cristiano Ronaldo", "Ronaldinho", "Thierry Henry", "David Beckham",
    "Kaka", "Xavi Hernandez", "Andrea Pirlo", "Iker Casillas", "Steven Gerrard",
    "Francesco Totti", "Paolo Maldini", "Didier Drogba", "Zlatan Ibrahimović", "Arjen Robben",
    "Frank Lampard", "Gianluigi Buffon", "Wayne Rooney", "Samuel Eto'o", "Sergio Ramos",
    "Luis Figo", "Andres Iniesta", "Roberto Carlos", "Cafu", "Alessandro Del Piero",
    "Fabio Cannavaro", "Ruud van Nistelrooy", "Ryan Giggs", "Paul Scholes", "Michael Ballack",
    "Fernando Torres", "Raul Gonzalez", "Clarence Seedorf", "Petr Čech", "Michael Owen",
    "Rio Ferdinand", "Kolo Touré", "Patrick Vieira", "Gennaro Gattuso", "Miroslav Klose",
    "Philipp Lahm", "Franck Ribéry", "Deco", "David Villa", "Diego Forlán", "Javier Zanetti",
    "Roberto Baggio", "Francesco Toldo", "Nemanja Vidić", "Patrice Evra", "Dani Alves",
    "Ashley Cole", "Emmanuel Adebayor", "Wesley Sneijder", "Robin van Persie", "Hernan Crespo",
    "Juan Román Riquelme", "Carlos Tevez", "Romário", "Diego Maradona", "Hristo Stoichkov",
    "Gheorghe Hagi", "Peter Schmeichel", "Eric Cantona", "Marcel Desailly", "Oliver Kahn",
    "Ronaldo Nazário", "Rivaldo", "Javier Mascherano", "Diego Simeone", "Roy Keane",
    "Guti", "David Trezeguet", "Esteban Cambiasso", "Henrik Larsson", "Fernando Hierro",
    "Claude Makélélé", "Marco Materazzi", "Christian Vieri", "Gheorghe Popescu", "Jay-Jay Okocha",
    "Hakan Şükür", "Claudio López", "Juan Sebastián Verón", "Gabriel Batistuta", "Antonio Conte",
    "Rui Costa", "Fernando Redondo", "Rafael Márquez", "Pavel Nedvěd", "Luca Toni", "Andriy Shevchenko",
    "Igor Akinfeev", "Antoine Griezmann", "Sergio Aguero", "Luka Modrić", "Harry Kane", "Eden Hazard",
    "Kevin De Bruyne", "Mohamed Salah", "Virgil van Dijk", "Pierre-Emerick Aubameyang", "Cesc Fàbregas",
    "Sadio Mané", "Paulo Dybala", "Robert Lewandowski", "Karim Benzema", "N'Golo Kanté", "Mesut Özil",
    "Toni Kroos", "Manuel Neuer", "Hugo Lloris", "Thomas Müller", "David de Gea", "Thiago Silva",
    "Edinson Cavani", "Blaise Matuidi", "Dani Carvajal", "Jordi Alba", "Gerard Piqué", "Keylor Navas",
    "James Rodríguez", "Angel Di María", "Javier Hernández", "Claudio Bravo", "Arturo Vidal",
    "Gonzalo Higuain", "Ivan Rakitic", "Mario Mandzukic", "Pepe", "John Terry", "Gary Neville",
    "Diego Costa", "Thibaut Courtois", "Cesar Azpilicueta", "Anderson", "Adriano", "Fernando Gago",
    "Matías Fernández", "Roberto Soldado", "Raul Albiol", "David Silva", "Juan Mata", "Javi Martínez",
    "Álvaro Morata", "Isco", "Marco Reus", "Mats Hummels", "Ilkay Gundogan", "Shinji Kagawa",
    "Henrikh Mkhitaryan", "Mario Götze", "Gonzalo Castro", "Olivier Giroud", "Serge Gnabry",
    "Joao Moutinho", "Nani", "Ricardo Carvalho", "William Carvalho", "Héctor Bellerín", "Lucas Moura",
    "Marquinhos", "Loris Karius", "Alexandre Lacazette", "Lucas Digne", "Tanguy Ndombélé",
    "Lucas Torreira", "Juan Cuadrado", "Sergi Roberto", "Beto", "João Félix", "Arthur Melo",
    "Luka Jovic", "Eder Militão", "Aritz Aduriz", "Raúl García", "Sergi Roberto", "Álvaro González",
    "Luis Alberto", "José Callejón", "Sergio Canales", "Javi García", "Mario Suárez", "Kiko Femenía",
    "Álvaro Borja Morata", "Suso", "Iago Aspas", "Óscar Rodríguez", "Rodrigo Moreno", "Álvaro Odriozola",
    "David López", "Carlos Soler", "Mikel Merino", "Fernando Llorente", "Diego Llorente", "Rui Patricio",
    "Antonio Rüdiger", "Niklas Sule", "Jérôme Boateng", "Raphaël Varane", "Mats Hummels", "Julian Brandt",
    "Kai Havertz", "Leon Goretzka", "Joshua Kimmich", "Leroy Sane", "Julian Draxler", "Nadiem Amiri",
    "Emre Can", "Marius Wolf", "Karim Demirbay", "Florian Neuhaus", "Lukas Klostermann", "Marcus Thuram",
    "Jonas Hofmann", "Ritsu Doan", "Takumi Minamino", "Kubo", "Donyell Malen", "Nuno Mendes",
    "Jude Bellingham", "Pedri", "Gavi", "Jadon Sancho", "Bukayo Saka", "Jude Bellingham",
    "Mason Mount", "Tammy Abraham", "Declan Rice", "Phil Foden", "Jack Grealish", "Reece James",
    "Ben Chilwell", "Trent Alexander-Arnold", "Aaron Wan-Bissaka", "Dean Henderson", "Marcus Rashford",
    "Raheem Sterling", "Dominic Calvert-Lewin", "Riyad Mahrez", "Kyle Walker", "Aymeric Laporte",
    "João Cancelo", "Bernardo Silva", "Gabriel Jesus", "Lucas Digne", "Richarlison", "João Félix",
    "André Silva", "Ricardo Pereira", "Nélson Semedo", "Rui Patrício", "José Fonte", "Diogo Jota",
    "Rúben Dias", "Renato Sanches", "Danilo Pereira", "André Gomes", "Jesús Navas", "Pablo Fornals",
    "Inaki Williams", "Mikel Merino", "Alexander Isak", "Nacho Fernández", "Álvaro Odriozola",
    "Carlos Soler", "Gonçalo Guedes", "Kevin Gameiro", "Neymar Jr.", "Kylian Mbappé", "Marco Verratti",
    "Mauro Icardi", "Javier Pastore", "Hatem Ben Arfa", "Dimitri Payet", "Alexandre Lacazette",
    "Radamel Falcao", "Anthony Martial", "Benjamin Mendy", "Youri Tielemans", "Rafael", "Nabil Fekir",
    "Memphis Depay", "Steve Mandanda", "Adil Rami", "Florian Thauvin", "Boubacar Kamara", "André-Pierre Gignac",
    "Clément Grenier", "Corentin Tolisso", "Maxime Gonalons", "Alexis Sánchez", "Loïc Rémy",
    "Mathieu Valbuena", "Yohan Cabaye", "Nicolas Pépé", "Victor Osimhen"
];

function startGame() {
    teams.team1.name = document.getElementById('team1').value;
    teams.team1.players = [
        document.getElementById('team1-player1').value,
        document.getElementById('team1-player2').value
    ];

    teams.team2.name = document.getElementById('team2').value;
    teams.team2.players = [
        document.getElementById('team2-player1').value,
        document.getElementById('team2-player2').value
    ];

    document.getElementById('team1-name').textContent = teams.team1.name;
    document.getElementById('team2-name').textContent = teams.team2.name;

    updateScores();

    document.getElementById('setup').style.display = 'none';
    document.getElementById('game').style.display = 'block';

    nextRound();
}

function nextRound() {
    if (teams.team1.score >= 3 || teams.team2.score >= 3) {
        endGame();
        return;
    }

    currentTeam = (currentPlayerIndex % 2 === 0) ? teams.team1 : teams.team2;
    drawPlayer();
}

function drawPlayer() {
    const footballer = footballers[Math.floor(Math.random() * footballers.length)];
    document.getElementById('footballer-name').textContent = `Joueur tiré au sort : ${footballer}`;
    document.getElementById('passes-left').textContent = `Passes restantes : ${currentTeam.passes}`;
    document.getElementById('player-action').style.display = 'block';
    document.getElementById('pass-player').disabled = currentTeam.passes <= 0;
    document.getElementById('next-round').style.display = 'none';
}

document.getElementById('give-point-team1').onclick = function() {
    givePoint('team1');
};

document.getElementById('give-point-team2').onclick = function() {
    givePoint('team2');
};

function givePoint(team) {
    teams[team].score++;
    teams[team].passes = 2;  // Réinitialisation des passes
    updateScores();
    document.getElementById('player-action').style.display = 'none';
    document.getElementById('next-round').style.display = 'block';
}

function passPlayer() {
    if (currentTeam.passes > 0) {
        currentTeam.passes--;
        drawPlayer();
    }
}

function updateScores() {
    document.getElementById('team1-score').textContent = `${teams.team1.name} : ${teams.team1.score} points`;
    document.getElementById('team2-score').textContent = `${teams.team2.name} : ${teams.team2.score} points`;
}

function endGame() {
    const winner = (teams.team1.score >= 3) ? teams.team1.name : teams.team2.name;
    document.getElementById('round-info').textContent = `Victoire de ${winner} !`;
    document.getElementById('player-action').style.display = 'none';
    document.getElementById('next-round').style.display = 'none';
    document.getElementById('replay').style.display = 'block';
    document.getElementById('restart').style.display = 'block';
}

document.getElementById('next-round').onclick = function() {
    document.getElementById('player-action').style.display = 'none';
    currentPlayerIndex++;
    nextRound();
};

document.getElementById('replay').onclick = function() {
    resetGame();
};

document.getElementById('restart').onclick = function() {
    resetGame();
    document.getElementById('game').style.display = 'none';
    document.getElementById('setup').style.display = 'block';
};

function resetGame() {
    teams.team1.score = 0;
    teams.team2.score = 0;
    teams.team1.passes = 2;
    teams.team2.passes = 2;
    currentPlayerIndex = 0;
    updateScores();
    document.getElementById('replay').style.display = 'none';
    document.getElementById('restart').style.display = 'none';
    nextRound();
}

// Initialisation du bouton pour commencer le jeu
document.getElementById('start-game').onclick = function() {
    startGame();
};

// Initialisation du bouton pour passer le joueur
document.getElementById('pass-player').onclick = function() {
    passPlayer();
};
