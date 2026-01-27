const About = () => {
	return (
		<section
			id="about"
			className="min-h-screen snap-start pt-[10vh]"
		>
			<div className=" hero h-[calc(90vh+2.5px)] flex flex-col justify-center items-center text-center px-6 bg-contain bg-no-repeat bg-bottom-right">
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
				<a
					href="CV-Form.pdf"
					download
					className="px-6 py-2 mt-6 hover:bg-gray-800 hover:text-white sm:mt-4 border border-gray-800 font-semibold lg sm:text-xl rounded-lg transition"
				>
					Download My Resume
				</a>
			</div>
		</section>
	);
};

export default About;
