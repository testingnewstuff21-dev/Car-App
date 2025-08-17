export type EventItem = {
	id: string;
	title: string;
	date: string;
	location: string;
	imageUrl: string;
};

export function EventCard({ event }: { event: EventItem }) {
	return (
		<div className="card overflow-hidden">
			<img src={event.imageUrl} alt={event.title} className="h-44 w-full object-cover" />
			<div className="p-4">
				<h3 className="font-semibold">{event.title}</h3>
				<p className="mt-1 text-sm text-zinc-600">{event.date} • {event.location}</p>
			</div>
		</div>
	);
}