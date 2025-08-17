import { Link, NavLink } from 'react-router-dom';
import { Car, Compass, Newspaper, Calendar, Wrench } from 'lucide-react';
import { PropsWithChildren } from 'react';

export function AppLayout({ children }: PropsWithChildren) {
	return (
		<div className="min-h-full flex flex-col">
			<header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-zinc-200">
				<div className="container-responsive flex h-16 items-center justify-between gap-4">
					<Link to="/" className="flex items-center gap-2 font-semibold">
						<Car className="h-6 w-6 text-brand-600" />
						<span>RevHaus</span>
					</Link>
					<nav className="hidden md:flex items-center gap-6 text-sm">
						<NavLink to="/explore" className={({ isActive }) => isActive ? 'text-brand-600' : 'text-zinc-600 hover:text-zinc-900'}>
							<div className="inline-flex items-center gap-2"><Compass className="h-4 w-4" /> Explore</div>
						</NavLink>
						<NavLink to="/garage" className={({ isActive }) => isActive ? 'text-brand-600' : 'text-zinc-600 hover:text-zinc-900'}>
							<div className="inline-flex items-center gap-2"><Wrench className="h-4 w-4" /> Garage</div>
						</NavLink>
						<NavLink to="/events" className={({ isActive }) => isActive ? 'text-brand-600' : 'text-zinc-600 hover:text-zinc-900'}>
							<div className="inline-flex items-center gap-2"><Calendar className="h-4 w-4" /> Events</div>
						</NavLink>
						<NavLink to="/explore#news" className={({ isActive }) => isActive ? 'text-brand-600' : 'text-zinc-600 hover:text-zinc-900'}>
							<div className="inline-flex items-center gap-2"><Newspaper className="h-4 w-4" /> News</div>
						</NavLink>
					</nav>
				</div>
			</header>

			<main className="flex-1">
				{children}
			</main>

			<footer className="border-t border-zinc-200">
				<div className="container-responsive py-10 text-sm text-zinc-600">
					<div className="flex items-center gap-2 font-semibold text-zinc-900">
						<Car className="h-5 w-5 text-brand-600" /> RevHaus
					</div>
					<p className="mt-2">Built for car enthusiasts. Share builds, discover events, and stay up to speed.</p>
					<p className="mt-6">© {new Date().getFullYear()} RevHaus. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
}