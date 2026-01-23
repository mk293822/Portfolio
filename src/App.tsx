import { AnimatePresence } from "framer-motion";
import { Suspense, lazy } from "react";
import PageWrapper from "./components/PageWrapper";
import Layout from "./components/Layout";
import Loading from "./components/Loading";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const Skills = lazy(() => import("./pages/Skills"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));

const App = () => {
	return (
		<AnimatePresence mode="wait">
			<Suspense fallback={<Loading />}>
				<PageWrapper>
					<Layout>
						<Home />
						<Projects />
						<Skills />
						<About />
						<Contact />
					</Layout>
				</PageWrapper>
			</Suspense>
		</AnimatePresence>
	);
};

export default App;
