import { json } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function POST({ request }) {
	try {
		const url = await request.json();
		console.log('URL: ', url);

		// Create the JSON object with six cards
		const response = {
			cards: [
				{ front: 'Card 1 Front', back: 'Card 1 Back' },
				{ front: 'Card 2 Front', back: 'Card 2 Back' },
				{ front: 'Card 3 Front', back: 'Card 3 Back' },
				{ front: 'Card 4 Front', back: 'Card 4 Back' },
				{ front: 'Card 5 Front', back: 'Card 5 Back' },
				{ front: 'Card 6 Front', back: 'Card 6 Back' }
			]
		};

		// Return the JSON object as the response

		return json({ response: response });
	} catch (error) {
		// Handle any errors that occur during the request handling
		console.error('Error handling POST request:', error);

		// Return an error response
		return {
			status: 500,
			body: {
				error: 'Internal Server Error'
			}
		};
	}
}
