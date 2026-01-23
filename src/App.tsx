import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Suspense, lazy } from "react";
import PageWrapper from "./components/PageWrapper";
import Layout from "./components/Layout";
import Loading from "./components/Loading";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));

const App = () => {
	const location = useLocation();

	return (
		<AnimatePresence mode="wait">
			<Suspense fallback={<Loading />}>
				<Routes
					location={location}
					key={location.pathname}
				>
					<Route
						path="/"
						element={
							<PageWrapper>
								<Layout>
									<Home />
									<Projects />
									<About />
									<Contact />
								</Layout>
							</PageWrapper>
						}
					/>
				</Routes>
			</Suspense>
		</AnimatePresence>
	);
};

export default App;
