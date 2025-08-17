import { useMemo, useState } from 'react';
import { Search, Settings2 } from 'lucide-react';
import { BuildCard, Build } from '../home/components/BuildCard';

const allBuilds: Build[] = [
	{
		id: 'b1', title: 'Nissan R34 GTR', owner: 'Kai', imageUrl: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=1600&auto=format&fit=crop', tags: ['JDM', 'Turbo'], likes: 2450, stars: 4.9,
	},
	{
		id: 'b2', title: 'Mustang GT Fastback', owner: 'Riley', imageUrl: 'https://images.unsplash.com/photo-1511300636408-a63a89df3482?q=80&w=1600&auto=format&fit=crop', tags: ['Muscle'], likes: 730, stars: 4.4,
	},
	{
		id: 'b3', title: 'Audi RS6 Avant', owner: 'Olivia', imageUrl: 'https://images.unsplash.com/photo-1611270629569-8b357cb88da1?q=80&w=1600&auto=format&fit=crop', tags: ['Euro'], likes: 980, stars: 4.7,
	},
	{
		id: 'b4', title: 'Subaru WRX Rally', owner: 'Diego', imageUrl: 'https://images.unsplash.com/photo-1541351122258-0ec939ed86ba?q=80&w=1600&auto=format&fit=crop', tags: ['Rally', 'AWD'], likes: 620, stars: 4.5,
	},
];

export function ExplorePage() {
	const [query, setQuery] = useState('');

	const filtered = useMemo(() => {
		return allBuilds.filter((b) => b.title.toLowerCase().includes(query.toLowerCase()) || b.tags.some(t => t.toLowerCase().includes(query.toLowerCase())));
	}, [query]);

	return (
		<div className="container-responsive py-10">
			<div className="flex items-center justify-between">
				<h1 className="text-2xl font-semibold">Explore</h1>
				<button className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm ring-1 ring-inset ring-zinc-300"><Settings2 className="h-4 w-4" /> Filters</button>
			</div>
			<div className="mt-6 relative">
				<Search className="absolute left-3 top-3 h-4 w-4 text-zinc-500" />
				<input value={query} onChange={(e) => setQuery(e.target.value)} className="w-full rounded-lg border border-zinc-300 pl-9 pr-3 py-2" placeholder="Search builds, tags..." />
			</div>
			<div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{filtered.map((b) => (
					<BuildCard key={b.id} build={b} />
				))}
			</div>
		</div>
	);
}