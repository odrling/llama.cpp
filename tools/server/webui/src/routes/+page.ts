import type { PageLoad } from './$types';
import { validateApiKey } from '$lib/utils/api-key-validation';

export const load: PageLoad = async ({ fetch, url }) => {
	await validateApiKey(fetch);

	return {
		q: url.searchParams.get('q')
	}
};
