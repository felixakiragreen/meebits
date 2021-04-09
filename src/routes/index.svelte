<script lang="ts">
	import "tailwindcss/tailwind.css"

	import Layout from "./$layout.svelte"
</script>

<main>
	
	<section>
		<p>👋 if you are who we think you are</p>
		<p>then this domain is yours<br /> & we’ll hand it over ($0)</p>
		<p>we just wanted to say hello 😊</p>
		<p>💚</p>
		<a href="https://ambition.wtf">ambition.wtf</a>
	</section>

</main>

<style lang="postcss">
	main {
		@apply flex justify-center items-center;
		@apply w-screen h-screen;
		@apply bg-gray-100 dark:bg-gray-900;
		@apply text-gray-900 dark:text-gray-100;
	}

	section {
		@apply text-center;
	}

	p {
		@apply max-w-xs;
		@apply my-8 mx-auto;
		@apply leading-snug;
	}

	a {
		@apply text-felix;
		@apply no-underline;
		@apply border-b-2 border-felix;
		@apply py-2;
		@apply transition-all;
		@apply hover:px-2 hover:-mx-2 hover:bg-felix hover:text-gray-900;
	}

</style>
