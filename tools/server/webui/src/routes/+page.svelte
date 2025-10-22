<script lang="ts">
	import { ChatScreen } from '$lib/components/app';
	import { chatStore, isInitialized } from '$lib/stores/chat.svelte';
	import { onMount } from 'svelte';
	import type {PageData} from "./$types";

	export let data: PageData;

	onMount(async () => {
		if (!isInitialized) {
			await chatStore.initialize();
		}

		chatStore.clearActiveConversation();

		if (data.q !== null) {
			await chatStore.createConversation()
			await chatStore.sendMessage(data.q)
		}
	});
</script>

<svelte:head>
	<title>llama.cpp - AI Chat Interface</title>
</svelte:head>

<ChatScreen showCenteredEmpty={true} />
