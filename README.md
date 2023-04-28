# Hangman - Backend

API URI: https://hangman-backend.herokuapp.com/api/hangman

## API calls

### User:
  - https://hangman-backend.herokuapp.com/api/hangman/users     
      - (GET) Gets all the users from db. We can use this for ranking.
  - https://hangman-backend.herokuapp.com/api/hangman/users/:id 
      - (GET) Gets the user details of 'id'. We can use this to check if user already exists.
  - https://hangman-backend.herokuapp.com/api/hangman/users    
      - (POST) creates/adds a new user into DB. we can check if username exists else we add username during registration.
      - body should be a JSON object called 'userDetails' and will look something like below screenshot.
      ```
      {
    "userDetails": {
        "username": "gg",
        "score": 555
        }
    }
      
  
### Games:
  - https://hangman-backend.herokuapp.com/api/hangman/games     
      - (GET) Gets all the games from db. Game called 'Main' will be the user vs computer mode.
  -  https://hangman-backend.herokuapp.com/api/hangman/games/:id
      - (GET) Gets the game with that 'id'.
      - id = 'Main', user vs computer mode.
      - other ids are the games created by a user.
  - https://hangman-backend.herokuapp.com/api/hangman/games/:id
      - (DELETE) Deletes a game.
  - https://hangman-backend.herokuapp.com/api/hangman/games     
      - (POST)
      - We can have a random string generator which the other user will use to load the game. This string will be the unique key.
      - The words which the user wants the other player to guess is an Array[String].
      - body should be a JSON object called 'gameDetails' and will look something like below screenshot.
      ```
      {
    "gameDetails": {
        "id": "UXYG",
        "words": ["mango", "apple"]
        }
       }
      
 ## Screenshots of how the DB classes looks:
 
<img width="474" alt="image" src="https://user-images.githubusercontent.com/113155188/234490140-17a3dc86-c248-4751-a835-086509f09575.png">
<img width="592" alt="image" src="https://user-images.githubusercontent.com/113155188/234490196-26ec5c53-c5d6-451d-a94c-980c223c45f7.png">
