const Contact = () => {
	return (
		<section
			id="contact"
			className="h-screen snap-start flex flex-col justify-center items-center text-center px-6"
		>
			<h1 className="text-4xl md:text-6xl mb-6 font-radley italic">Contact</h1>

			<p className="text-lg md:text-xl max-w-xl text-gray-700 mb-10">
				If you’d like to work together or just say hello, feel free to reach
				out.
			</p>

			<div className="flex flex-col gap-4 text-lg">
				<a
					href="mailto:youremail@example.com"
					className="hover:underline underline-offset-4"
				>
					youremail@example.com
				</a>

				<a
					href="https://github.com/yourusername"
					target="_blank"
					rel="noopener"
					className="hover:underline underline-offset-4"
				>
					GitHub
				</a>

				<a
					href="https://linkedin.com/in/yourusername"
					target="_blank"
					rel="noopener"
					className="hover:underline underline-offset-4"
				>
					LinkedIn
				</a>
			</div>
		</section>
	);
};

export default Contact;
