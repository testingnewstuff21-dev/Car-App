import { useParams, Link } from 'react-router-dom';

const mockArticles: Record<string, { title: string; body: string }> = {
	'bmw-m3-csl-returns': {
		title: 'BMW revives the M3 CSL with hybrid power',
		body: 'The legendary CSL badge returns with a lightweight chassis and a hybrid-assisted inline-six producing over 600 horsepower. Expect track-focused aero and a limited production run.',
	},
	'tesla-roadster-updates': {
		title: 'New Tesla Roadster teases record 0-60 time',
		body: 'Tesla hints at sub-1.9s 0-60 with next-gen battery tech and tri-motor setup. Production timelines remain fluid, but the hype is real.',
	},
};

export function ArticlePage() {
	const { slug } = useParams();
	const article = slug ? mockArticles[slug] : undefined;

	if (!article) {
		return (
			<div className="container-responsive py-10">
				<p>Article not found. <Link to="/explore#news" className="text-brand-700 underline">Go back</Link></p>
			</div>
		);
	}

	return (
		<article className="container-responsive py-10">
			<h1 className="text-3xl font-bold tracking-tight">{article.title}</h1>
			<p className="mt-4 text-zinc-700 max-w-prose">{article.body}</p>
		</article>
	);
}