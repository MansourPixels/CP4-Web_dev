import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Check, Heart, ListPlus, Play, Star } from "lucide-react";
import { dateOf, image, titleOf, tmdb } from "../api/tmdb";
import { ErrorMessage } from "./HomePage";

function ActionButton({
	active,
	icon: Icon,
	label,
	onClick,
	activeClass = "bg-amber text-canvas",
}) {
	return (
		<button
			type="button"
			onClick={onClick}
			className={`inline-flex h-11 items-center gap-2 rounded-xl px-4 font-bold transition ${active ? activeClass : "bg-elevated text-ink hover:bg-white/15"}`}
		>
			<Icon
				size={18}
				fill={active && Icon === Heart ? "currentColor" : "none"}
			/>
			{label}
		</button>
	);
}

export default function DetailPage({ library }) {
	const { mediaType, id } = useParams();
	const [media, setMedia] = useState(null);
	const [providerData, setProviderData] = useState(null);
	const [season, setSeason] = useState(null);
	const [error, setError] = useState("");
	const [commentDraft, setCommentDraft] = useState("");
	const [editingComment, setEditingComment] = useState(false);
	const validType = mediaType === "movie" || mediaType === "tv";
	useEffect(() => {
		if (!validType) return;
		setMedia(null);
		setError("");
		setSeason(null);
		Promise.all([tmdb.details(mediaType, id), tmdb.providers(mediaType, id)])
			.then(([details, providers]) => {
				setMedia(details);
				setProviderData(providers.results?.BR);
			})
			.catch((err) => setError(err.message));
	}, [mediaType, id, validType]);
	const normalized = useMemo(
		() =>
			media && {
				id: media.id,
				mediaType,
				title: titleOf(media),
				posterPath: media.poster_path,
				date: dateOf(media),
				voteAverage: media.vote_average || 0,
			},
		[media, mediaType],
	);
	const saved = normalized && library.find(normalized);
	useEffect(() => {
		setCommentDraft(saved?.comment || "");
	}, [saved?.comment]);
	const seasons =
		media?.seasons?.filter((item) => item.season_number > 0) || [];
	const loadSeason = useCallback(
		(number) =>
			tmdb
				.season(id, number)
				.then(setSeason)
				.catch((err) => setError(err.message)),
		[id],
	);
	const firstSeasonNumber = seasons[0]?.season_number;
	useEffect(() => {
		if (mediaType === "tv" && firstSeasonNumber) loadSeason(firstSeasonNumber);
	}, [mediaType, firstSeasonNumber, loadSeason]);
	if (!validType)
		return (
			<div className="page">
				<ErrorMessage message="Tipo de mídia inválido." />
			</div>
		);
	if (error)
		return (
			<div className="page">
				<ErrorMessage message={error} />
			</div>
		);
	if (!media)
		return (
			<div className="page">
				<div className="h-96 animate-pulse rounded-2xl bg-elevated" />
			</div>
		);
	const year = dateOf(media).slice(0, 4);
	const watchedEpisodes =
		season?.episodes.filter(
			(episode) =>
				library.episodes[
					`${id}:${season.season_number}:${episode.episode_number}`
				],
		).length || 0;
	return (
		<>
			<section className="relative isolate overflow-hidden border-b border-white/10">
				<div
					className="absolute inset-0 -z-10 bg-cover bg-center opacity-25"
					style={{
						backgroundImage: media.backdrop_path
							? `url(${image(media.backdrop_path, true)})`
							: undefined,
					}}
				/>
				<div className="absolute inset-0 -z-10 bg-gradient-to-t from-canvas via-canvas/85 to-canvas/40" />
				<div className="page grid gap-8 py-10 lg:grid-cols-[280px_1fr] lg:py-16">
					<div className="mx-auto w-52 lg:mx-0 lg:w-full">
						{media.poster_path ? (
							<img
								className="aspect-[2/3] w-full rounded-2xl object-cover shadow-2xl"
								src={image(media.poster_path)}
								alt={`Pôster de ${titleOf(media)}`}
							/>
						) : (
							<div className="aspect-[2/3] rounded-2xl bg-elevated" />
						)}
					</div>
					<div className="self-center">
						<p className="text-sm font-bold uppercase tracking-widest text-amber">
							{mediaType === "tv" ? "Série" : "Filme"} · {year || "sem data"}
						</p>
						<h1 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">
							{titleOf(media)}
						</h1>
						<div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted">
							<span className="flex items-center gap-1 text-amber">
								<Star size={17} fill="currentColor" />
								{media.vote_average?.toFixed(1)}
							</span>
							<span>
								{media.number_of_seasons
									? `${media.number_of_seasons} temporadas`
									: `${media.runtime || "—"} min`}
							</span>
							{media.genres?.slice(0, 3).map((genre) => (
								<span key={genre.id} className="chip">
									{genre.name}
								</span>
							))}
						</div>
						<p className="mt-6 max-w-3xl leading-7 text-muted">
							{media.overview || "Sinopse não disponível em português."}
						</p>
						<div className="mt-7 flex flex-wrap gap-3">
							<ActionButton
								active={saved?.saved}
								icon={ListPlus}
								label={saved?.saved ? "Na minha lista" : "Quero assistir"}
								onClick={() => library.toggle(normalized, "saved")}
							/>
							<ActionButton
								active={saved?.watched}
								icon={Check}
								label={saved?.watched ? "Assistido" : "Marcar como assistido"}
								onClick={() => library.toggle(normalized, "watched")}
								activeClass="bg-emerald text-canvas"
							/>
							<ActionButton
								active={saved?.favorite}
								icon={Heart}
								label="Favorito"
								onClick={() => library.toggle(normalized, "favorite")}
								activeClass="bg-red-400 text-canvas"
							/>
						</div>
						<div className="mt-6 flex items-center gap-2">
							<span className="text-sm text-muted">Sua nota:</span>
							{[1, 2, 3, 4, 5].map((rating) => (
								<button
									type="button"
									key={rating}
									aria-label={`${rating} estrelas`}
									onClick={() => library.setRating(normalized, rating)}
									className={
										rating <= (saved?.rating || 0) ? "text-amber" : "text-muted"
									}
								>
									<Star size={22} fill="currentColor" />
								</button>
							))}
						</div>
						<section className="mt-6 max-w-2xl">
							<div className="flex items-center justify-between gap-3">
								<div>
									<h2 className="font-display text-lg font-bold">
										Seu comentário
									</h2>
									<p className="mt-1 text-sm text-muted">
										Registre uma impressão pessoal sobre este título.
									</p>
								</div>
								{saved?.comment && !editingComment && (
									<button
										type="button"
										onClick={() => setEditingComment(true)}
										className="rounded-lg bg-elevated px-3 py-2 text-sm font-bold hover:bg-white/15"
									>
										Editar comentário
									</button>
								)}
							</div>
							{saved?.comment && !editingComment ? (
								<blockquote className="mt-4 rounded-xl border border-amber/20 bg-amber/5 p-4 text-sm leading-6 text-ink">
									“{saved.comment}”
								</blockquote>
							) : (
								<>
									<textarea
										id="personal-comment"
										aria-label="Seu comentário"
										value={commentDraft}
										onChange={(event) => setCommentDraft(event.target.value)}
										maxLength={1000}
										placeholder="O que você achou?"
										className="mt-3 min-h-28 w-full rounded-xl border border-white/10 bg-surface p-3 text-sm placeholder:text-muted"
									/>
									<div className="mt-2 flex items-center justify-between">
										<span className="text-xs text-muted">
											{commentDraft.length}/1000
										</span>
										<button
											type="button"
											onClick={() => {
												library.setComment(normalized, commentDraft.trim());
												setEditingComment(false);
											}}
											className="rounded-lg bg-amber px-4 py-2 text-sm font-bold text-canvas hover:bg-yellow-300"
										>
											Salvar comentário
										</button>
									</div>
								</>
							)}
						</section>
					</div>
				</div>
			</section>
			<div className="page grid gap-8 lg:grid-cols-[1fr_320px]">
				<div>
					{mediaType === "tv" && (
						<section className="panel p-5 sm:p-6">
							<div className="flex flex-wrap items-center justify-between gap-3">
								<div>
									<h2 className="font-display text-2xl font-bold">
										Progresso de episódios
									</h2>
									<p className="mt-1 text-sm text-muted">
										{season
											? `${watchedEpisodes} / ${season.episodes.length} episódios vistos nesta temporada`
											: "Carregando episódios..."}
									</p>
								</div>
								<select
									aria-label="Selecionar temporada"
									onChange={(e) => loadSeason(e.target.value)}
									className="rounded-lg border border-white/10 bg-elevated px-3 py-2 text-sm"
								>
									{seasons.map((item) => (
										<option key={item.id} value={item.season_number}>
											{item.name}
										</option>
									))}
								</select>
							</div>
							{season && (
								<div className="mt-5 divide-y divide-white/10">
									{season.episodes.map((episode) => {
										const key = `${id}:${season.season_number}:${episode.episode_number}`;
										const watched = library.episodes[key];
										return (
											<div key={episode.id} className="flex gap-3 py-4">
												<button
													type="button"
													aria-label={`Marcar ${episode.name} como ${watched ? "não assistido" : "assistido"}`}
													onClick={() => {
														library.ensure(normalized);
														library.toggleEpisode(
															id,
															season.season_number,
															episode.episode_number,
														);
													}}
													className={`mt-1 h-7 w-7 shrink-0 rounded-full border ${watched ? "border-emerald bg-emerald text-canvas" : "border-muted text-transparent"}`}
												>
													<Check size={16} className="mx-auto" />
												</button>
												<div className="min-w-0">
													<p className="font-bold">
														E{episode.episode_number} · {episode.name}
													</p>
													<p className="mt-1 text-sm text-muted">
														{episode.air_date || "Sem data"}{" "}
														{episode.runtime ? `· ${episode.runtime} min` : ""}
													</p>
													<p className="mt-2 line-clamp-2 text-sm text-muted">
														{episode.overview || "Sinopse indisponível."}
													</p>
												</div>
											</div>
										);
									})}
								</div>
							)}
						</section>
					)}
					{media.recommendations?.results?.length > 0 && (
						<section className="mt-8">
							<h2 className="font-display text-2xl font-bold">
								Você também pode gostar
							</h2>
							<div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
								{media.recommendations.results.slice(0, 4).map((item) => (
									<Link
										key={item.id}
										to={`/${mediaType}/${item.id}`}
										className="text-sm font-bold hover:text-amber"
									>
										{item.poster_path && (
											<img
												src={image(item.poster_path)}
												alt=""
												className="mb-2 aspect-[2/3] w-full rounded-xl object-cover"
												loading="lazy"
											/>
										)}
										{titleOf(item)}
									</Link>
								))}
							</div>
						</section>
					)}
				</div>
				<aside className="space-y-5">
					<section className="panel p-5">
						<h2 className="font-display text-lg font-bold">Onde assistir</h2>
						{providerData?.flatrate?.length ? (
							<div className="mt-4 flex flex-wrap gap-3">
								{providerData.flatrate.map((provider) => (
									<div
										key={provider.provider_id}
										className="w-16 text-center text-xs text-muted"
									>
										{provider.logo_path && (
											<img
												className="mx-auto h-10 w-10 rounded-lg"
												src={image(provider.logo_path)}
												alt={provider.provider_name}
											/>
										)}
										{provider.provider_name}
									</div>
								))}
							</div>
						) : (
							<p className="mt-3 text-sm text-muted">
								Não há provedores de streaming informados pelo TMDB para o
								Brasil.
							</p>
						)}
					</section>
					{media.videos?.results?.find((video) => video.site === "YouTube") && (
						<a
							className="flex items-center justify-center gap-2 rounded-xl bg-elevated px-4 py-3 font-bold hover:bg-white/15"
							target="_blank"
							rel="noreferrer"
							href={`https://www.youtube.com/watch?v=${media.videos.results.find((video) => video.site === "YouTube").key}`}
						>
							<Play size={18} fill="currentColor" />
							Assistir trailer
						</a>
					)}
				</aside>
			</div>
		</>
	);
}
