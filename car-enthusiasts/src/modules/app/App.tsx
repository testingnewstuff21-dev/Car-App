import { Routes, Route } from 'react-router-dom';
import { AppLayout } from './components/AppLayout';
import { HomePage } from '../home/HomePage';
import { ExplorePage } from '../explore/ExplorePage';
import { GaragePage } from '../garage/GaragePage';
import { EventsPage } from '../events/EventsPage';
import { ArticlePage } from '../news/ArticlePage';

export default function App() {
	return (
		<AppLayout>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/explore" element={<ExplorePage />} />
				<Route path="/garage" element={<GaragePage />} />
				<Route path="/events" element={<EventsPage />} />
				<Route path="/news/:slug" element={<ArticlePage />} />
			</Routes>
		</AppLayout>
	);
}