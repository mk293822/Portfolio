const About = () => {
	return (
		<section
			id="about"
			className="min-h-screen snap-start pt-[10vh]"
		>
			<div className=" hero h-[calc(90vh+2.5px)] flex-col justify-center items-center text-center px-6 bg-contain bg-no-repeat bg-bottom-right">
				<h1 className="text-4xl md:text-6xl mb-6 font-radley italic">
					About Me
				</h1>

				<p className="text-lg md:text-xl max-w-2xl text-gray-700 leading-relaxed">
					I’m a web developer focused on building modern, scalable applications
					with clean architecture and thoughtful design.
					<br />
					<br />
					My main stack includes React, Tailwind, Django, and Laravel. I care
					deeply about performance, user experience, and writing code that is
					easy to maintain and extend.
				</p>
			</div>
		</section>
	);
};

export default About;
