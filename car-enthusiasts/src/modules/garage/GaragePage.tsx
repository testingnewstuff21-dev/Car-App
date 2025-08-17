import { useState } from 'react';
import { Plus } from 'lucide-react';

export function GaragePage() {
	const [cars, setCars] = useState<Array<{ id: string; make: string; model: string; year: number }>>([
		{ id: '1', make: 'Toyota', model: 'Supra', year: 1998 },
		{ id: '2', make: 'Porsche', model: '911 GT3', year: 2022 },
	]);

	function addCar() {
		const id = crypto.randomUUID();
		setCars([{ id, make: 'Honda', model: 'Civic Type R', year: 2021 }, ...cars]);
	}

	return (
		<div className="container-responsive py-10">
			<div className="flex items-center justify-between">
				<h1 className="text-2xl font-semibold">Your Garage</h1>
				<button onClick={addCar} className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-3 py-2 text-sm text-white">
					<Plus className="h-4 w-4" /> Add car
				</button>
			</div>
			<div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{cars.map((c) => (
					<div key={c.id} className="card p-4">
						<div className="text-sm text-zinc-600">{c.year}</div>
						<div className="mt-1 font-semibold">{c.make} {c.model}</div>
					</div>
				))}
			</div>
		</div>
	);
}