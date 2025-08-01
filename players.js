// players.js

// This object stores players for each team.
const teamRosters = {
  "Atlanta United FC": [
    "Miguel Almirón", "Emmanuel Latte Lath", "Brad Guzan", "Aleksei Miranchuk",
    "Luke Brennan", "Enea Mihaj", "Luis Abram", "Saba Lobzhanidze", "Bartosz Slisz",
    "Brooks Lennon", "Cayman Togashi", "Stian Rode Gregersen", "Will Reilly",
    "Jamal Thiaré", "Jayden Hibbert", "Ajani Fortune", "Ronald Hernández",
    "Pedro Amador", "Tristan Muyumba", "Dominik Chong-Qui", "Adyn Torres",
    "Derrick Williams", "Rodrigo Neri", "Cooper Wyatt Sanchez", "Nykolas Sessock",
    "Matthew Edwards", "Josh Cohen", "Ashton J'Kingston Gordon", "Leo Afonso"
  ],
  "DC United": [
    "Christian Benteke", "Aaron Herrera", "Hosei Kijima", "João Peglow", "Luis Barraza",
    "Jacob Murrell", "Gabriel Pirani", "Kye Rowles", "Jackson Hopkins", "Kim Jun-hong",
    "Kristian Fletcher", "Dominique Badji", "Lucas Bartlett", "David Schnegg",
    "Matti Peltola", "Lukas MacNaughton", "Jared Stroud", "Randall Leal", "Boris Enow",
    "Brandon Servania", "Derek Dodson", "Rida Zouhir", "Garrison Tubbs",
    "Jordan Farr", "William Conner Antley"
  ],
  "Toronto FC": [
    "Theo Corbeanu", "Matty Longstaff", "Zane Monlouis", "Ola Brynhildsen",
    "Jonathan Osorio", "Maxime Dominguez", "Richie Laryea", "Deiby Flores",
    "Deandre Kerr", "Markus Cimermancic", "Lazar Stefanovic", "Charlie Sharp",
    "Adisa De Rosario", "Kevin Long", "Alonso Coello", "Tyrese Spicer",
    "Sean Johnson", "Derrick Etienne Jr.", "Raoul Petretta", "Kosi Thompson",
    "Reid Fisher", "Luka Gavran", "Kobe Franklin", "Sigurd Rosted", "Nicksoen Gomis",
    "Nathaniel Edwards", "Henry Wingo", "Dékwon Barrow", "Michael Sullivan", "Malik Henry"
  ],
  "New England Revolution": [
    "Leonardo Campana", "Carles Gil", "Luca Langoni", "Alhassan Yusuf",
    "Allan Oyirwoth", "Peyton Miller", "Tomás Chancalay", "Ilay Feingold", "Alex Bono",
    "Aljaž Ivačič", "Mamadou Fofana", "Maximiliano Urruti", "Brandon Bye",
    "Andrew Farrell", "Jackson Yueill", "Keegan Hughes", "Tanner Beason",
    "Will Sands", "Malcolm Fry", "Eric Klein", "Gevork Diarbian", "Matt Polster",
    "Brayan Ceballos", "Ignatius Ganago", "Cristiano Paulo Santos Oliveira",
    "Wyatt Omsberg", "Damario McIntosh", "Donovan Parisian", "Liam Butts",
    "Luis Díaz", "John David Gunn", "Alex Monis", "Marcos Dias", "Joao Victor Souza",
    "Hesron Barry", "Gabriel Walter"
  ],
  "New York Red Bulls": [
    "Emil Forsberg", "Eric Maxim Choupo-Moting", "Marcelo Morales", "Julian Hall",
    "Lewis Morgan", "Mohammed Sofo", "Wiktor Bogacz", "Carlos Coronel", "Omar Valencia",
    "Daniel Edelman", "Andy Rojas", "Sean Nealis", "Cameron Harper", "Serge Ngoma",
    "Tim Parker", "Alexander Hack", "Raheem Edwards", "Roald Mitchell", "Adri Mehmeti",
    "Noah Eile", "Dylan Nealis", "Dennis Gjengaar", "Tanner Rosborough",
    "Ronald Donkor", "Wikelman Carmona", "Aidan Stokes", "Aiden Jarvis", "Kyle Duncan",
    "Gustav Berggren", "Peter Stroud", "Davi Alexandre", "Curtis Ofori",
    "Juan José Mina", "Austin Causey", "Nehuén Benedetti", "Rafael Mosquera",
    "Anthony Joseph Marcucci Jr."
  ],
 
  "Chicago Fire FC": [
    // Goalkeepers
    "Chris Brady", "Jeff Gal",

    // Defenders
    "Leonardo Barroso", "Jack Elliott", "Carlos Terán", "Sam Rogers",
    "Andrew Gutman", "Mauricio Pineda", "Jonathan Dean", "Omar González",
    "Justin Reynolds", "Christopher Cupps", "Chase Gasper",

    // Midfielders
    "Rominigue Kouamé", "Maren Haile-Selassie", "Brian Gutiérrez",
    "Kellyn Acosta", "Dylan Borso", "Sergio Oregel", "Robert Turdean",
    "Djé D’Avilla", "Harold Osorio", "Sam Williams", "David Poreba",
    "Omari Glasgow",

    // Forwards
    "Chris Mueller", "Hugo Cuypers", "Philip Zinckernagel", "Tom Barlow",
    "Jonathan Bamba", "Dean Boltz"
  ],
 
  "Orlando City SC": [
  "Pedro Gallese",
  "Luis Muriel",
  "Facundo Torres",
  "César Araújo",
  "Dagur Dan Þórhallsson",
  "Martin Ojeda",
  "Robin Jansson",
  "Wilder Cartagena",
  "Iván Angulo",
  "Kyle Smith",
  "Mikey Halliday"
],

  "Inter Miami CF": [
    // Goalkeepers
    "Drake Callender", "Óscar Ustari", "Rocco Ríos Novo", "William Yarbrough",

    // Defenders
    "Gonzalo Luján", "Tomás Avilés", "Ryan Sailor", "Ian Fray", "Jordi Alba",
    "Tyler Hall", "Noah Allen", "Maximiliano Falcón", "Marcelo Weigandt", "Israel Boatwright",

    // Midfielders
    "Sergio Busquets", "Telasco Segovia", "Baltasar Rodríguez", "Tadeo Allende",
    "Benjamin Cremaschi", "David Ruiz", "Yannick Bright", "Federico Redondo", "Santiago Morales",

    // Forwards
    "Fafà Picault", "Luis Suárez", "Lionel Messi", "Leo Afonso", "Allen Obando"
  ],
  "Columbus Crew": [
    // Goalkeepers
    "Eloy Room", "Patrick Schulte", "Zack Steffen",

    // Defenders
    "Milton Valenzuela", "Miloš Degenek", "Steven Moreira", "Mohammed Farsi",
    "Alexandru Mățan", "Derrick Etienne Jr.", "Josh Williams", "Isaiah Parente",

    // Midfielders
    "Lucas Zelarayán", "Darlington Nagbe", "Aidan Morris", "James Igbekeme",
    "Sean Zawadzki", "Youness Mokhtar", "Marco Micaletto",

    // Forwards
    "Christian Ramirez", "Gustavo Vallecilla", "Cucho Hernández",
    "Diego Rossi", "Miguel Berry"
  ],
 
  "Nashville SC": [
    "Joe Willis",
    "Brian Schwake",
    "Xavier Valdez",
    "Daniel Lovitz",
    "Jeisson Andres Palacios",
    "Jack Maher",
    "Josh Bauer",
    "Taylor Washington",
    "Walker Zimmerman",
    "Wyatt Meyer",
    "Julian Gaines",
    "Andy Najar",
    "Christopher Applewhite",
    "Bryan Acosta",
    "Gaston Brugman",
    "Patrick Yazbek",
    "Hany Mukhtar",
    "Matthew Corcoran",
    "Alex Muyl",
    "Edvard Tagseth",
    "Jonathan Pérez",
    "Isaiah Jones",
    "Christian Koffi",
    "Ethan O’Brien",
    "Sam Surridge",
    "Tyler Boyd",
    "Teal Bunbury",
    "Jacob Shaffelburg",
    "Maximus Ekk",
    "Ahmed Qasem",
    "Adem Sipic"
  ],
  "New York City FC": [
    { name: "Matthew Freese", number: 49, position: "Goalkeeper" },
    { name: "Tomás Romero", number: 30, position: "Goalkeeper" },
    { name: "Gregory Ranjitsingh", number: 18, position: "Goalkeeper" },
    { name: "Alex Rando", number: 44, position: "Goalkeeper" },
    { name: "Tayvon Gray", number: 24, position: "Defender" },
    { name: "Thiago Martins", number: 13, position: "Defender" },
    { name: "Mitja Ilenič", number: 35, position: "Defender" },
    { name: "Strahinja Tanasijević", number: 19, position: "Defender" },
    { name: "Justin Haak", number: 80, position: "Defender" },
    { name: "Andrew Baiera", number: 38, position: "Defender" },
    { name: "Kevin O’Toole", number: 22, position: "Defender" },
    { name: "Prince Amponsah", number: 33, position: "Defender" },
    { name: "Max Murray", number: 23, position: "Defender" },
    { name: "Nico Cavallo", number: 2, position: "Defender" },
    { name: "Hannes Wolf", number: 17, position: "Midfielder" },
    { name: "Nicolás Fernández", number: 10, position: "Midfielder" },
    { name: "Julián Fernández", number: 11, position: "Midfielder" },
    { name: "Agustin Ojeda", number: 26, position: "Midfielder" },
    { name: "Maxi Moralez", number: 10, position: "Midfielder" },
    { name: "Máximo Carrizo", number: 29, position: "Midfielder" },
    { name: "Keaton Parks", number: 55, position: "Midfielder" },
    { name: "Aiden O’Neill", number: 21, position: "Midfielder" },
    { name: "Andrés Perea", number: 8, position: "Midfielder" },
    { name: "Jonathan Shore", number: 32, position: "Midfielder" },
    { name: "Jacob Arroyave", number: 47, position: "Midfielder" },
    { name: "Monsef Bakrar", number: 9, position: "Forward" },
    { name: "Alonso Martínez", number: 16, position: "Forward" },
    { name: "Zidane Yañez", number: 36, position: "Forward" },
    { name: "Malachi Jones", number: 88, position: "Forward" },
    { name: "Seymour Garfield-Reid", number: 99, position: "Forward" }
  ],
  "Orlando City SC": [
    { name: "Pedro Gallese", number: 1, position: "Goalkeeper" },
    { name: "Mason Stajduhar", number: 31, position: "Goalkeeper" },
    { name: "Javier Otero", number: 50, position: "Goalkeeper" },
    { name: "Abdi Salim", number: 3, position: "Defender" },
    { name: "Rodrigo Schlegel", number: 15, position: "Defender" },
    { name: "David Brekalo", number: 6, position: "Defender" },
    { name: "Kyle Smith", number: 24, position: "Defender" },
    { name: "Rafael Santos", number: 3, position: "Defender" },
    { name: "Robin Jansson", number: 6, position: "Defender" },
    { name: "Michael Halliday", number: 26, position: "Defender" },
    { name: "Wilder Cartagena", number: 16, position: "Midfielder" },
    { name: "César Araújo", number: 5, position: "Midfielder" },
    { name: "Nico Lodeiro", number: 14, position: "Midfielder" },
    { name: "Felipe Martins", number: 8, position: "Midfielder" },
    { name: "Juninho", number: 19, position: "Midfielder" },
    { name: "Facundo Torres", number: 17, position: "Forward" },
    { name: "Duncan McGuire", number: 13, position: "Forward" },
    { name: "Iván Angulo", number: 77, position: "Forward" },
    { name: "Ramiro Enrique", number: 7, position: "Forward" },
    { name: "Jack Lynn", number: 27, position: "Forward" },
    { name: "Luis Muriel", number: 9, position: "Forward" }
  ],
  "Inter Miami CF": [
    { name: "Drake Callender", number: 1, position: "Goalkeeper" },
    { name: "Óscar Ustari", number: 19, position: "Goalkeeper" },
    { name: "Rocco Ríos Novo", number: 34, position: "Goalkeeper" },
    { name: "William Yarbrough", number: null, position: "Goalkeeper" },
    { name: "Gonzalo Luján", number: 2, position: "Defender" },
    { name: "Tomás Avilés", number: 6, position: "Defender" },
    { name: "Ryan Sailor", number: 15, position: "Defender" },
    { name: "Ian Fray", number: 17, position: "Defender" },
    { name: "Jordi Alba", number: 18, position: "Defender" },
    { name: "Tyler Hall", number: 26, position: "Defender" },
    { name: "Noah Allen", number: 32, position: "Defender" },
    { name: "Maximiliano Falcón", number: 37, position: "Defender" },
    { name: "Marcelo Weigandt", number: 57, position: "Defender" },
    { name: "Israel Boatwright", number: 62, position: "Defender" },
    { name: "Sergio Busquets", number: 5, position: "Midfielder" },
    { name: "Telasco Segovia", number: 8, position: "Midfielder" },
    { name: "Baltasar Rodríguez", number: 11, position: "Midfielder" },
    { name: "Tadeo Allende", number: 21, position: "Midfielder" },
    { name: "Benjamin Cremaschi", number: 30, position: "Midfielder" },
    { name: "David Ruiz", number: 41, position: "Midfielder" },
    { name: "Yannick Bright", number: 42, position: "Midfielder" },
    { name: "Federico Redondo", number: 55, position: "Midfielder" },
    { name: "Santiago Morales", number: 81, position: "Midfielder" },
    { name: "Fafà Picault", number: 7, position: "Forward" },
    { name: "Luis Suárez", number: 9, position: "Forward" },
    { name: "Lionel Messi", number: 10, position: "Forward" },
    { name: "Leo Afonso", number: 22, position: "Forward" },
    { name: "Allen Obando", number: 29, position: "Forward" }
  ],
  "Nashville SC": [
    { name: "Joe Willis", number: 1, position: "Goalkeeper" },
    { name: "Brian Schwake", number: 99, position: "Goalkeeper" },
    { name: "Xavier Valdez", number: 13, position: "Goalkeeper" },
    { name: "Daniel Lovitz", number: 2, position: "Defender" },
    { name: "Jeisson Andres Palacios", number: 4, position: "Defender" },
    { name: "Jack Maher", number: 5, position: "Defender" },
    { name: "Josh Bauer", number: 22, position: "Defender" },
    { name: "Taylor Washington", number: 23, position: "Defender" },
    { name: "Walker Zimmerman", number: 25, position: "Defender" },
    { name: "Wyatt Meyer", number: 28, position: "Defender" },
    { name: "Julian Gaines", number: 29, position: "Defender" },
    { name: "Andy Najar", number: 31, position: "Defender" },
    { name: "Christopher Applewhite", number: 33, position: "Defender" },
    { name: "Bryan Acosta", number: 6, position: "Midfielder" },
    { name: "Gaston Brugman", number: 7, position: "Midfielder" },
    { name: "Patrick Yazbek", number: 8, position: "Midfielder" },
    { name: "Hany Mukhtar", number: 10, position: "Midfielder" },
    { name: "Matthew Corcoran", number: 16, position: "Midfielder" },
    { name: "Alex Muyl", number: 19, position: "Midfielder" },
    { name: "Edvard Tagseth", number: 20, position: "Midfielder" },
    { name: "Jonathan Pérez", number: 24, position: "Midfielder" },
    { name: "Isaiah Jones", number: 47, position: "Midfielder" },
    { name: "Christian Koffi", number: 50, position: "Midfielder" },
    { name: "Ethan O’Brien", number: 55, position: "Midfielder" },
    { name: "Sam Surridge", number: 9, position: "Forward" },
    { name: "Tyler Boyd", number: 11, position: "Forward" },
    { name: "Teal Bunbury", number: 12, position: "Forward" },
    { name: "Jacob Shaffelburg", number: 14, position: "Forward" },
    { name: "Maximus Ekk", number: 21, position: "Forward" },
    { name: "Ahmed Qasem", number: 37, position: "Forward" },
    { name: "Adem Sipic", number: 77, position: "Forward" }
  ],
"Philadelphia Union": [
  "Andre Blake", "Oliver Semmle", "Andrew Rick",
  "Jakob Glesnes", "Kai Wagner", "Olivier Mbaizo", "Nathan Harriel",
  "Ian Glavinovich", "Olwethu Makhanya", "Isaiah LeFlore",
  "Francis Westfield", "Neil Pierre",
  "Alejandro Bedoya", "Jesus Bueno", "Danley Jean-Jacques", "Indiana Vassilev",
  "Jeremy Rafanello", "Jovan Lukic", "Quinn Sullivan", "Cavan Sullivan",
  "Nick Pariano", "Christopher Olney Jr.",
  "Mikael Uhre", "Tai Baribo", "Bruno Damiani", "Chris Donovan",
  "David Vazquez", "Markus Anderson", "Sal Olivas", "Stas Korzeniowski",
  "Eddy Davis III"
]
};

// ✅ Make available globally for league.js
window.teamRosters = teamRosters;
