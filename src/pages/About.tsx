const About = () => {
	return (
		<section
			id="about"
			className="h-screen snap-start flex flex-col justify-center items-center text-center px-6 bg-contain bg-no-repeat bg-bottom-right xl:hero"
		>
			<h1 className="text-4xl md:text-6xl mb-6 font-radley italic">About Me</h1>

			<p className="text-lg md:text-xl max-w-2xl text-gray-700 leading-relaxed">
				I’m a web developer focused on building modern, scalable applications
				with clean architecture and thoughtful design.
				<br />
				<br />
				My main stack includes React, Tailwind, Django, and Laravel. I care
				deeply about performance, user experience, and writing code that is easy
				to maintain and extend.
			</p>
		</section>
	);
};

export default About;
