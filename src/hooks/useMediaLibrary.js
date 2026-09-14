import { useCallback, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

const KEY = "watchlist:v1";
const EPISODES_KEY = "watchlist:episodes:v1";

export function useMediaLibrary() {
	const [items, setItems] = useLocalStorage(KEY, []);
	const [episodes, setEpisodes] = useLocalStorage(EPISODES_KEY, {});
	const keyFor = (media) => `${media.mediaType}:${media.id}`;
	const find = (media) => items.find((item) => keyFor(item) === keyFor(media));
	const hasProgress = useCallback(
		(media) =>
			media.mediaType === "tv" &&
			Object.keys(episodes).some(
				(id) => id.startsWith(`${media.id}:`) && episodes[id],
			),
		[episodes],
	);
	const shouldKeep = useCallback(
		(media) =>
			Boolean(
				media.saved ||
					media.favorite ||
					media.watched ||
					media.rating ||
					media.comment ||
					hasProgress(media),
			),
		[hasProgress],
	);
	const update = (media, changes) =>
		setItems((current) => {
			const existing = current.find((item) => keyFor(item) === keyFor(media));
			const next = {
				...existing,
				...media,
				...changes,
				updatedAt: new Date().toISOString(),
			};
			if (!shouldKeep(next))
				return current.filter((item) => keyFor(item) !== keyFor(media));
			return existing
				? current.map((item) => (keyFor(item) === keyFor(media) ? next : item))
				: [...current, next];
		});
	const toggle = (media, field) =>
		update(media, { [field]: !find(media)?.[field] });
	const ensure = (media) => update(media, {});
	const setRating = (media, rating) => update(media, { rating });
	const setComment = (media, comment) => update(media, { comment });
	const toggleEpisode = (showId, season, episode) =>
		setEpisodes((current) => {
			const id = `${showId}:${season}:${episode}`;
			return { ...current, [id]: !current[id] };
		});
	useEffect(() => {
		setItems((current) => current.filter(shouldKeep));
	}, [shouldKeep, setItems]);
	return {
		items,
		episodes,
		find,
		toggle,
		ensure,
		setRating,
		setComment,
		toggleEpisode,
	};
}
