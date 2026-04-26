const Projects = () => {
	const projects = [
		{
			title: "Personal Portfolio",
			description:
				"A responsive website built to showcase my technical skills and projects, deployed using CI/CD workflows.",
			tech: "React • Tailwind CSS • TypeScript",
			github: "https://github.com/mk293822/Portfolio",
		},
		{
			title: "TwoDManager",
			description:
				"A cross-platform mobile application with a Django backend API, featuring seamless integration between mobile and cloud-deployed services.",
			tech: "React Native • Expo • Django",
			github: "https://github.com/mk293822/2DManager", // Adjusted based on standard naming
		},
		{
			title: "E-commerce (Laravel)",
			description:
				"A full-featured online store built with Laravel, featuring product management, payment integration, and an admin dashboard.",
			tech: "Laravel • React • Stripe",
			github: "https://github.com/mk293822/advance-laravel-ecommerce",
		},
		{
			title: "E-commerce (Django)",
			description:
				"A robust Django-based e-commerce platform with secure checkout, inventory management, and user authentication.",
			tech: "Django • React",
			github: "https://github.com/mk293822/DjangoEcommerce",
		},
	];

	return (
		<section
			id="projects"
			className="min-h-screen py-4 pt-[12vh] snap-start flex flex-col justify-center items-center text-center px-6"
		>
			<h1 className="text-4xl md:text-6xl mb-6 font-radley italic">Projects</h1>

			<p className="text-lg md:text-xl max-w-2xl text-gray-700 mb-6">
				A selection of projects where I focused on building clean, scalable
				systems with thoughtful UI and strong performance.
			</p>

			<div className="space-y-4"></div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
				{projects.map((project, index) => (
					<div
						key={index}
						className="p-4 border rounded-xl hover:shadow-lg transition hover:scale-105 flex flex-col justify-between"
					>
						<div>
							<h3 className="text-xl font-semibold mb-2">{project.title}</h3>
							<p className="text-gray-600 text-sm mb-3">
								{project.description}
							</p>
							<span className="text-sm text-gray-500">{project.tech}</span>
						</div>

						<div className="mt-2 flex gap-4 justify-end">
							{project.github && (
								<a
									href={project.github}
									target="_blank"
									rel="noreferrer"
									className="text-blue-600 hover:underline text-sm"
								>
									GitHub
								</a>
							)}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
