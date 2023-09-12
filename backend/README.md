##NB: Disse stegene er i backend mappe

package.json er for å holde styr på dependencies i tillegg til å registrere egne scripst

`npm install express`
`npm install -g nodemon`

dersom du moter feil i nodemon: `sudo chown -R $USER /usr/local/lib/node_modules`


starte server: `npm run dev`
avslutte server/en prosess: `ctrl + C`

.env filen lagrer alle environment variabler, eksempelvis portnummer til server
#TODO: legge til .env i gitignore filen, denne er privat
Disse variablene aksesseres ved en npm pakke

run `npm install dotenv` for at denne filen kan gjore jobben sin

## Foreslåtte API endepunkter

Henter alle øvelser:

`GET /exercise`

Henter en øvelse

`GET /exercise/:id`

Lager en ny øvelse

`POST /exercise`
{
  "tittel": "Benk",
  "sett": 2,
  "repetisjoner": 2,
  "vekt": 300
}

response: 
{
  "tittel": "Benk",
  "sett": 2,
  "repetisjoner": 2,
  "vekt": 300,
  "_id": "63de85f61be0fe13117db866",
  "createdAt": "2023-02-04T16:21:10.018Z",
  "updatedAt": "2023-02-04T16:21:10.018Z",
  "__v": 0
}

Sletter en øvelse

`DELTETE  /exercise/:id`

Oppdaterer en øvelse

`PATCH  /exercise/:id`


mongoose legger til et ekstra lag med struktur til databasen som mongoDB ikke lar ogss gjore

### Eksempel på session POST request http://localhost:5553/api/sessions

{
  "title": "Chest Day",
  "exercises": [
    {
      "title": "Bench Press",
      "sets": 3,
      "reps": 10,
      "weight": 100
    },
    {
      "title": "Incline Press",
      "sets": 3,
      "reps": 10,
      "weight": 80
    }
  ]
}

### Eksempel på respons du vil få ved session POST request

{
  "title": "Chest Day",
  "exercises": [
    {
      "title": "Bench Press",
      "sets": 3,
      "reps": 10,
      "weight": 100,
      "_id": "63f63168079e1379c6787584",
      "createdAt": "2023-02-22T15:14:48.768Z",
      "updatedAt": "2023-02-22T15:14:48.768Z"
    },
    {
      "title": "Incline Press",
      "sets": 3,
      "reps": 10,
      "weight": 80,
      "_id": "63f63168079e1379c6787585",
      "createdAt": "2023-02-22T15:14:48.769Z",
      "updatedAt": "2023-02-22T15:14:48.769Z"
    }
  ],
  "_id": "63f63168079e1379c6787583",
  "createdAt": "2023-02-22T15:14:48.770Z",
  "updatedAt": "2023-02-22T15:14:48.770Z",
  "__v": 0
}

### Eksempel på session POST request http://localhost:5553/api/sessions

{
  "title": "Chest Day",
  "exercises": [
    {
      "title": "Bench Press",
      "sets": 3,
      "reps": 10,
      "weight": 100
    },
    {
      "title": "Incline Press",
      "sets": 3,
      "reps": 10,
      "weight": 80
    }
  ]
}

### Eksempel på respons du vil få ved session POST request

{
  "title": "Chest Day",
  "exercises": [
    {
      "title": "Bench Press",
      "sets": 3,
      "reps": 10,
      "weight": 100,
      "_id": "63f63168079e1379c6787584",
      "createdAt": "2023-02-22T15:14:48.768Z",
      "updatedAt": "2023-02-22T15:14:48.768Z"
    },
    {
      "title": "Incline Press",
      "sets": 3,
      "reps": 10,
      "weight": 80,
      "_id": "63f63168079e1379c6787585",
      "createdAt": "2023-02-22T15:14:48.769Z",
      "updatedAt": "2023-02-22T15:14:48.769Z"
    }
  ],
  "_id": "63f63168079e1379c6787583",
  "createdAt": "2023-02-22T15:14:48.770Z",
  "updatedAt": "2023-02-22T15:14:48.770Z",
  "__v": 0
}

## Autentisering

Vi bruker JWT


### Endepunkt for å hente alle treningsøkter

http://localhost:5553/api/sessions

### Sletter en treningsokt

`DELTETE  /exercise/:id`

### Oppdaterer en treningsøkt

`PATCH  /exercise/:id`


### Endepunkt for å hente alle treningsøkter

http://localhost:5553/api/sessions

### Sletter en treningsokt

`DELTETE  /exercise/:id`

### Oppdaterer en treningsøkt

`PATCH  /exercise/:id`


## Grupper

### Eksempel på group POST request http://localhost:5553/api/groups

{
  "groupName": "Streve gruppen",
  "description": "Vi gir oss aldri dersom vi setter et milepele! Alle som vil kan delta i denne gruppen.",
  "administrator": "63ecbaa2efd240931c78c49d",
  "members": ["6406657134a64d6672e7cc5a", "64083e9e0d932884a574fb08"],
  "image": "https://assets.newatlas.com/dims4/default/59b2f26/2147483647/strip/true/crop/2000x1335+0+0/resize/2880x1922!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Fde%2Fd2%2F0133f194417d8762b5211d9af176%2Fsex-diff-exercise.jpg"
}



