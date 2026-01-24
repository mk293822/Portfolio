// Home.tsx
const Home = () => {
	return (
		<section
			id="home"
			className="min-h-screen snap-start pt-[10vh]"
		>
			{/* Hero Section */}
			<div className="hero flex flex-col items-center justify-center h-[calc(90vh+2.5px)] bg-contain bg-no-repeat bg-right">
				<div className="text-gray-800 text-center flex flex-col items-center justify-center flex-1 px-4 sm:px-0">
					<div className="text-center max-w-xl sm:max-w-3xl mx-auto">
						<h1 className="text-3xl sm:text-4xl md:text-6xl mb-4 sm:mb-6 font-radley italic">
							Hi, I&apos;m Minkhant!
						</h1>
						<p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6">
							I design and build scalable web applications with a focus on
							<br className="hidden sm:block" />
							clean code, performance, and great user experiences.
						</p>
					</div>

					<a
						href="#contact"
						className="text-lg sm:text-xl md:text-2xl relative flex flex-col items-center mt-2 sm:mt-4"
					>
						Contact me
						{/* Hand-drawn curved underline */}
						<svg
							className="-mt-1 stroke-current md:hidden transition-draw"
							width="60" // smaller for mobile
							height="6"
							viewBox="0 0 60 6"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0 3 Q30 6 60 3"
								strokeWidth="2"
								strokeLinecap="round"
							/>
						</svg>
						<svg
							className="-mt-1 stroke-current hidden md:block transition-draw"
							width="120"
							height="10"
							viewBox="0 0 120 10"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0 5 Q60 12 120 5"
								strokeWidth="2"
								strokeLinecap="round"
							/>
						</svg>
					</a>
				</div>

				{/* Footer */}
				<footer className="mt-auto py-6 w-full">
					<div className="container mx-auto px-4 text-center text-gray-600 text-sm sm:text-base">
						© 2026 Min Khant Thaw's Portfolio. All rights reserved.
					</div>
				</footer>
			</div>
		</section>
	);
};

export default Home;
