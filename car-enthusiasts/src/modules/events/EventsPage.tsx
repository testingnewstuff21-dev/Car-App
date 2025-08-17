import { useState } from 'react';
import { CalendarDays, MapPin } from 'lucide-react';

const events = [
	{ id: 'e1', title: 'Cars & Coffee', date: 'Nov 23, 9:00 AM', location: 'San Jose, CA' },
	{ id: 'e2', title: 'Track Day — Laguna Seca', date: 'Dec 1, 8:00 AM', location: 'Monterey, CA' },
	{ id: 'e3', title: 'Detailing Workshop', date: 'Dec 8, 2:00 PM', location: 'Oakland, CA' },
];

export function EventsPage() {
	const [city, setCity] = useState('');
	const filtered = events.filter((e) => e.location.toLowerCase().includes(city.toLowerCase()));

	return (
		<div className="container-responsive py-10">
			<h1 className="text-2xl font-semibold">Events</h1>
			<div className="mt-4">
				<input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Filter by city" className="w-full sm:w-80 rounded-lg border border-zinc-300 px-3 py-2" />
			</div>
			<ul className="mt-6 space-y-3">
				{filtered.map((e) => (
					<li key={e.id} className="card p-4">
						<div className="font-medium">{e.title}</div>
						<div className="mt-1 text-sm text-zinc-600 inline-flex items-center gap-4">
							<span className="inline-flex items-center gap-1"><CalendarDays className="h-4 w-4" /> {e.date}</span>
							<span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {e.location}</span>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}