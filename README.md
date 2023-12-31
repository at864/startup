# ScheJo
![ScheJo](https://github.com/at864/startup/assets/72633688/b9d36f20-5634-44d9-9314-d03be1060276)

## Description
ScheJo will be a web application that combines your schedule and journal into one convenient form of documentation. Users can log into their account to look at their weekly calendar with the weather included or switch to their journal entries that also include a mood tracker.

### Schedule
![schedule](https://github.com/at864/startup/assets/72633688/b3685b74-812a-46e9-b56f-e2c83d95e6c1)

### Journal
![journal](https://github.com/at864/startup/assets/72633688/aee2c3e2-4a6b-415c-8c52-93dc37ea89b9)

## Technologies
### Authentication
![login](https://github.com/at864/startup/assets/72633688/3a6ae337-6e6c-43f4-a710-9ae2848f185a)

In order for users to access their account, they need to first sign in with their username and password. New users can sign up for an account. Guest access doesn't require authentication but their input will be discarded once they exit the tab.
### Database Data
ScheJo stores user data such as events, special days, moods, and daily entries in an SQL database.
### WebSocket Data
The daily weather information shown on the schedule portion of ScheJo is retrieved from an API.


## HTML Deliverable
For this deliverable, I built out the structure of my application using HTML
* **HTML Pages** : Five HTML pages for the main, login, guest, journal, and schedule pages.
* **Text** : The application description, schedule events, and journal entries are represented by text blocks.
* **Images** : The GitHub logo is included in every footer next to its corresponding link. The weather and moods are also shown as images. Sizing will be fixed when CSS is incorporated.
* **Login** : Login has username and password input boxes and login or sign up buttons.
* **Database** : The tables on the schedule and journal page will hold information pulled from the database.
* **WebSocket** : The weather images will represent realtime weather.


## CSS Deliverable
For this deliverable I properly styled the application into its final appearance.
* **Header, footer, and main content body** - Added a color scheme and spaced them out so the header is at the top, footer is at the bottom, and main takes up most of the space.
* **Navigation elements** - I dropped the underlines and changed the color for anchor elements.
* **Responsive to window resizing** - Used flex so website fits multiple screen sizes.
* **Application elements** - Manipulated margins and padding to arrange whitespace and improve readability. Added borders to tables.
* **Application text content** - Used League Spartan for headers and Sanchez for text.
* **Application images** - Resized images to be smaller.


## JavaScript Deliverable
For this deliverable I implemented by JavaScript so that the application works for a single user. I also added placeholders for future technology.
* **Login** - When you click the login or sign up button it takes you to the schedule page. To login, one must use the previous username and password that was used for signing up.
* **Database** - Displayed the schedule events, journal entries, and moods. Currently this is stored and retrieved from local storage, but it will be replaced with the database data later.
* **WebSocket** - I used the setWeather function to randomly choose a weather. This will be replaced with WebSocket weather later.
* **Application logic** - The journal moods change based on the user's selections by clicking on the emoticon.


## Service Deliverable
For this deliverable I added backend enpoints that receives dates, calendar events, and journal entries and returns a daily weather forecast, all events, and all entries for the current week.
* **Node.js/Express HTTP service** - done!
* **Static middleware for frontend** - done!
* **Calls to third party endpoints** - I used Open-Meteo's weather forecast API and changed my weather icons accordingly to the fetched weather codes.
* **Backend service endpoints** - Created get functions for entries, events, and moods. Created a post function to update moods.
* **Frontend calls service endpoints** - I did this using the fetch function. The frontend calls service endpoints to get events, entries, and moods.


## DB Deliverable
For this deliverable I stored the events, entries, and moods in the database.
* **MongoDB Atlas database creaded** - done!
* **Endpoints for data** - My stubbed out endpoints now process the data and send it to Mongo.
* **Stores data in MongoDB** - done!


## Login Deliverable
For this deliverable I associate the moods with the logged in user.
* **User registration** - Creates a new account in the database.
* **Existing user** - Store the moods under the same user if the user already exists.
* **Use MongoDB to store credentials** - Store both user and their moods.
* **restricts functionality** - Your moods will not be stored until you have logged in.

## WebSocket deliverable
I haven't finished this deliverable yet, I just turned it in to work on the React assignments while my login deliverable is being graded.
* **Backend listens for WebSocket connection** - in progress
* **Frontend makes WebSocket connection** - in progress
* **Data sent over WebSocket connection** - in progress
* **WebSocket data displayed** - in progress