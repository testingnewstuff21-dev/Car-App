import { ArrowRight, Camera, Flame, Heart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BuildCard } from './components/BuildCard';
import { EventCard } from './components/EventCard';
import { NewsCard } from '../news/components/NewsCard';

const featuredBuilds = [
	{
		id: 'build-1',
		title: 'Widebody Supra MK4',
		owner: 'Mia Tanaka',
		imageUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
		tags: ['JDM', '2JZ', 'Stance'],
		likes: 1280,
		stars: 4.9,
	},
	{
		id: 'build-2',
		title: 'Track-Ready Porsche 911 GT3',
		owner: 'Aiden Clarke',
		imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop',
		tags: ['Track', 'NA', 'Euro'],
		likes: 990,
		stars: 4.8,
	},
	{
		id: 'build-3',
		title: 'Tesla Model 3 Sleeper',
		owner: 'Zara Chen',
		imageUrl: 'https://images.unsplash.com/photo-1541447271487-09612b3f49c9?q=80&w=1600&auto=format&fit=crop',
		tags: ['EV', 'Sleeper', 'Daily'],
		likes: 612,
		stars: 4.6,
	},
];

const upcomingEvents = [
	{
		id: 'event-1',
		title: 'Cars & Coffee — Bay Area',
		date: 'Sat, Nov 23',
		location: 'San Jose, CA',
		imageUrl: 'https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1600&auto=format&fit=crop',
	},
	{
		id: 'event-2',
		title: 'Track Day — Laguna Seca',
		date: 'Sun, Dec 1',
		location: 'Monterey, CA',
		imageUrl: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1600&auto=format&fit=crop',
	},
];

const latestNews = [
	{
		id: 'news-1',
		slug: 'bmw-m3-csl-returns',
		title: 'BMW revives the M3 CSL with hybrid power',
		excerpt: 'Iconic badge meets modern tech in a 600hp track-focused sedan.',
		imageUrl: 'https://images.unsplash.com/photo-1549921296-3c6b550fd0c6?q=80&w=1600&auto=format&fit=crop',
	},
	{
		id: 'news-2',
		slug: 'tesla-roadster-updates',
		title: 'New Tesla Roadster teases record 0-60 time',
		excerpt: 'Elon hints sub-1.9s sprint with next-gen battery tech.',
		imageUrl: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1600&auto=format&fit=crop',
	},
];

export function HomePage() {
	return (
		<div>
			<section className="container-responsive">
				<div className="grid lg:grid-cols-2 gap-10 py-14 lg:py-20 items-center">
					<div>
						<div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 ring-1 ring-inset ring-brand-200">
							<Flame className="h-4 w-4" /> Built for enthusiasts
						</div>
						<h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">Share builds. Find events. Fuel your passion.</h1>
						<p className="mt-4 text-lg text-zinc-600 max-w-prose">RevHaus is the community hub for JDM, Euro, muscle, off-road, and EV lovers. Showcase your ride, follow creators, and plan the next meet.</p>
						<div className="mt-6 flex items-center gap-3">
							<Link to="/explore" className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-white shadow-sm hover:bg-brand-700">
								Explore builds <ArrowRight className="h-4 w-4" />
							</Link>
							<Link to="/garage" className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-zinc-800 ring-1 ring-inset ring-zinc-300 hover:bg-zinc-50">
								Create your garage
							</Link>
						</div>
						<div className="mt-8 flex items-center gap-6 text-sm text-zinc-600">
							<div className="inline-flex items-center gap-2"><Users className="h-4 w-4" /> 42k members</div>
							<div className="inline-flex items-center gap-2"><Camera className="h-4 w-4" /> 120k photos</div>
							<div className="inline-flex items-center gap-2"><Heart className="h-4 w-4" /> 2.3M likes</div>
						</div>
					</div>
					<div className="relative">
						<div className="card overflow-hidden">
							<img src="https://images.unsplash.com/photo-1518112166137-85f9979a43a5?q=80&w=1680&auto=format&fit=crop" alt="Hero car" className="h-[420px] w-full object-cover" />
						</div>
						<div className="absolute -bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
							{featuredBuilds.slice(0,3).map((b) => (
								<div key={b.id} className="card overflow-hidden">
									<img src={b.imageUrl} alt="car" className="h-28 w-full object-cover" />
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="container-responsive mt-16 lg:mt-24">
				<div className="flex items-center justify-between">
					<h2 className="text-xl font-semibold">Featured builds</h2>
					<Link to="/explore" className="text-sm text-brand-700 hover:underline inline-flex items-center gap-1">See all <ArrowRight className="h-4 w-4" /></Link>
				</div>
				<div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{featuredBuilds.map((build) => (
						<BuildCard key={build.id} build={build} />
					))}
				</div>
			</section>

			<section className="container-responsive mt-16 lg:mt-24">
				<div className="flex items-center justify-between">
					<h2 className="text-xl font-semibold">Upcoming events</h2>
					<Link to="/events" className="text-sm text-brand-700 hover:underline inline-flex items-center gap-1">Browse events <ArrowRight className="h-4 w-4" /></Link>
				</div>
				<div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{upcomingEvents.map((event) => (
						<EventCard key={event.id} event={event} />
					))}
				</div>
			</section>

			<section id="news" className="container-responsive mt-16 lg:mt-24 mb-16 lg:mb-24">
				<div className="flex items-center justify-between">
					<h2 className="text-xl font-semibold">Latest news</h2>
					<Link to="/explore#news" className="text-sm text-brand-700 hover:underline inline-flex items-center gap-1">More news <ArrowRight className="h-4 w-4" /></Link>
				</div>
				<div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{latestNews.map((n) => (
						<NewsCard key={n.id} news={n} />
					))}
				</div>
			</section>
		</div>
	);
}