

<main>
	<div class="search-block">
		<input type="text" placeholder="Search for gif" bind:value={searchTerm} />
		<button on:click={searchForGif}>Search</button>
	</div>
	<div class="gifs">
		{#if gifs.length > 0}
			<div class="gifs-grid">
				{#each gifs as gif}
					<Card gif="{gif}" />
				{/each}
			</div>
		{:else}
			No gifs to show yet
		{/if}
	</div>

</main>

<script>
	let gifs = [];
	let searchTerm = "";

	async function searchForGif(e) {
		try {
			const returnValue = await fetch(`/giphy?term=${searchTerm}`);
			const response = await returnValue.json();
			gifs = response.data;
		} catch (error) {
			console.error(error);
		}
	}

	import Card from './Card.svelte';


</script>