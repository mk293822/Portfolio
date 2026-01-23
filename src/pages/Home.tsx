// [calc(90vh+2.5px)]

const Home = () => {
	return (
		<section
			id="home"
			className="flex h-screen flex-col snap-start"
		>
			{/* Navbar */}
			<header className="bg-white shadow-md">
				<div className="container mx-auto px-2 py-4 flex justify-between items-center">
					<div className="text-3xl font-radley">MyPortfolio</div>
					<nav className="space-x-6 text-lg">
						<a
							href="#home"
							className={
								"text-gray-700 hover:text-gray-900 transition-colors duration-200"
							}
						>
							Home
						</a>

						<a
							href="#projects"
							className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
						>
							Projects
						</a>
						<a
							href="#skills"
							className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
						>
							Skills
						</a>

						<a
							href="#about"
							className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
						>
							About
						</a>
						<a
							href="#contact"
							className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
						>
							Contact
						</a>
					</nav>
				</div>
			</header>

			<div className="flex flex-col items-center justify-center h-[calc(90vh+2.5px)] bg-contain bg-no-repeat bg-right flex-1 xl:hero">
				<div className="text-gray-800 text-center flex-1 items-center flex flex-col justify-center">
					{/* Hero Section */}
					<div className="text-center max-w-3xl mx-auto">
						<h1 className="text-4xl md:text-6xl mb-6 font-radley italic">
							Hi, I&apos;m Minkhant!
						</h1>
						<p className="text-xl md:text-2xl mb-6">
							I design and build scalable web applications with a focus on
							<br />
							clean code, performance, and great user experiences.
						</p>
					</div>
					<a
						href="#contact"
						className="text-lg md:text-2xl relative flex flex-col items-center"
					>
						Contact me
						{/* Hand-drawn curved underline */}
						<svg
							className="-mt-1 stroke-current md:hidden transition-draw"
							width="80" // default small screen
							height="8"
							viewBox="0 0 80 8"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M0 4 Q40 8 80 4"
								strokeWidth="2"
								strokeLinecap="round"
							/>
						</svg>
						{/* Large screens */}
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
				<footer className="mt-auto py-6">
					<div className="container mx-auto px-4 text-center text-gray-600">
						© 2026 Min Khant Thaw's Portfolio. All rights reserved.
					</div>
				</footer>
			</div>
		</section>
	);
};

export default Home;
