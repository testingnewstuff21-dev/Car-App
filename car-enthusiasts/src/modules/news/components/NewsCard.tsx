import { Link } from 'react-router-dom';

export type News = {
	id: string;
	slug: string;
	title: string;
	excerpt: string;
	imageUrl: string;
};

export function NewsCard({ news }: { news: News }) {
	return (
		<Link to={`/news/${news.slug}`} className="card overflow-hidden block">
			<img src={news.imageUrl} alt="" className="h-40 w-full object-cover" />
			<div className="p-4">
				<h3 className="font-semibold">{news.title}</h3>
				<p className="mt-1 text-sm text-zinc-600">{news.excerpt}</p>
			</div>
		</Link>
	);
}