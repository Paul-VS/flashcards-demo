Video to Flashcards

This project is a Svelte demo app that allows a user to input a video URL and receive flashcards with information from that video.
Prerequisites

    Node.js (v14 or higher)
    npm or yarn

Installation

    Clone the repo
    Run npm install or yarn install
    Run npm run dev or yarn dev to start the development server.

Usage

After running the development server, navigate to http://localhost:port to see the demo app in action.

    Enter a video URL in the input field.
    Click the "Submit" button.
    The flashcards generated from the video will be displayed on the page.

Code Breakdown

page.svelte:
This file contains the main logic for the Svelte demo app. It imports the Card component from "Card.svelte" and includes a form for the user to input a video URL. When the user submits the form, a function called createFlashcards makes a POST request to the server at "/api/video-to-flashcards". If the request is successful, the response data is used to update the flashcards array, which is used to render the Card components on the page.

Card.svelte:
This file contains the logic for the individual flashcard component. It takes in a card prop with front and back properties. It uses a CSS flip animation to display the front and back of the flashcard.

api/video-to-flashcards/+server.js:
This file contains the code for the server's "/api/video-to-flashcards" endpoint. It receives a POST request with a URL in the request body, and it returns a JSON object with six cards as a response for demo purposes.
