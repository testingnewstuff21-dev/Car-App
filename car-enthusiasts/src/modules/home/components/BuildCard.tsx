import { Heart, Star } from 'lucide-react';

export type Build = {
	id: string;
	title: string;
	owner: string;
	imageUrl: string;
	tags: string[];
	likes: number;
	stars: number;
};

export function BuildCard({ build }: { build: Build }) {
	return (
		<div className="card overflow-hidden">
			<img src={build.imageUrl} alt={build.title} className="h-48 w-full object-cover" />
			<div className="p-4">
				<h3 className="font-semibold">{build.title}</h3>
				<p className="mt-1 text-sm text-zinc-600">by {build.owner}</p>
				<div className="mt-3 flex flex-wrap gap-2">
					{build.tags.map((t) => (
						<span key={t} className="badge">{t}</span>
					))}
				</div>
				<div className="mt-4 flex items-center justify-between text-sm text-zinc-600">
					<div className="inline-flex items-center gap-1"><Heart className="h-4 w-4 text-rose-500" /> {build.likes.toLocaleString()}</div>
					<div className="inline-flex items-center gap-1"><Star className="h-4 w-4 text-amber-500" /> {build.stars}</div>
				</div>
			</div>
		</div>
	);
}