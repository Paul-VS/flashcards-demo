<script>
	import Card from './Card.svelte';

	let url = '';
	/**
	 * @type {any[]}
	 */
	let flashcards = []; // variable to hold the response data

	const createFlashcards = async () => {
		try {
			const response = await fetch('/api/video-to-flashcards', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ url: 'your-url' })
			});

			if (!response.ok) {
				throw new Error(`Request failed with status ${response.status}`);
			}

			if (response.headers.get('Content-Type') !== 'application/json') {
				throw new Error('Unexpected content type in server response');
			}

			const data = await response.json();

			flashcards = data.response.cards; // update flashcards with the received data
		} catch (error) {
			console.error(error);
		}
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<form on:submit|preventDefault={createFlashcards}>
	<label for="url">URL</label>
	<input type="text" name="url" id="url" bind:value={url} />
	<button type="submit">Submit</button>
</form>

<section>
	{#each flashcards as card}
		<Card {card} />
	{/each}
</section>

<style>
	form {
		margin-bottom: 2em;
	}

	label {
		font-weight: bold;
	}

	input[type='text'] {
		width: 70%;
		padding: 0.5em;
		margin-right: 0.5em;
		border: none;
		border-radius: 4px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	button {
		padding: 0.5em 1em;
		background-color: #007bff;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		transition: background-color 0.3s;
	}

	button:hover {
		background-color: #0056b3;
	}

	section {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		grid-gap: 2em;
		justify-items: center;
	}

	form {
		font-family: Verdana, Geneva, Tahoma, sans-serif;
	}
</style>
