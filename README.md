# Publik webbapplikation, React + TypeScript + Vite

Repository för publik webbapplikation till projektuppgift

Skapat av Erika Vestin, 2024 

Webbutvecklingsprogrammet, Miun Sundsvall 

Kurs: DT162G - JavaScriptbaserad Webbutveckling 

## Om applikationen 

Applikationen är en företagspresentationssida för ett fiktivt café vid namn CoffeCake Café. Caféet presenterar information om företaget, sina kontaktuppgifter och sin meny i applikationen. Menyerna som finns lagras i en REST-webbtjänst.

Webbapplikationen har skapast med hjälp av frontend-ramverket React som har installerats med Vite. CSS är skapad med CSS-ramverket Bootstrap och minimalt med egenskriven CSS-kod. All kod är skriven i TypeScript och JSX och är komponentbaserad. 
Det finns komponenter för header, footer och för att skriva ut menyn.

### NPM-paket
- Vite (React installerades med Vite)
- TypeScript (följde med Vite)
- Boostrap för CSS
- React-dom för att arbeta med DOM
- React-router-dom för att använda React Router


## API som konsumeras

Menyerna som finns i applikationen finns lagrade i en REST-webbtjänst. Webbtjänsten har full CRUD-funktionalitet, dock är vissa delar av Webbtjänsten skyddade med autentisering. 

API:t är skapat med Node.js, ramverket Express och några installerade NPM-paket. Data från webbtjänsten lagras i en NoSQL-databas,

Kommunikation mellan API:t och applikationen sker med hjälpa av Ajax-anrop med metoden Fetch. Data hämtas från API:t i JSON-format.

## Endpoints och användning 

Metod           Ändpunkt                  Beskrivning


GET              /menu                    Hämtar alla poster i menyn


GET              /menu/id                 Hämtar en specifik post från menyn med hjälp av angivet ID. 


## Format på objekt 

### Menu

{

    "_id": "65900ddf931ba946be6a2744",
    
    "name": "Kanelbulle",
    
    "description": "Vetebulle med kanel, socker, kardemumma, pärlsocker",
    
    "category": "Frukost",
    
    "price": "25kr",
    
    "__v": 0
    
  }
