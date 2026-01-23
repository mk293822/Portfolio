import { motion, type Transition } from "framer-motion";

const pageVariants = {
	initial: { opacity: 0, y: 20 },
	in: { opacity: 1, y: 0 },
	out: { opacity: 0, y: -20 },
};

const pageTransition: Transition = {
	type: "tween",
	ease: "easeInOut",
	duration: 0.4,
};

type Props = {
	children: React.ReactNode;
};

const PageWrapper = ({ children }: Props) => (
	<motion.div
		initial="initial"
		animate="in"
		exit="out"
		variants={pageVariants}
		transition={pageTransition}
	>
		{children}
	</motion.div>
);

export default PageWrapper;
