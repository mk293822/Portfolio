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
					href="mailto:mkt293822@gmail.com"
					className="hover:underline underline-offset-4"
				>
					mkt293822@gmail.com
				</a>

				<a
					href="https://github.com/mk293822"
					target="_blank"
					rel="noopener"
					className="hover:underline underline-offset-4"
				>
					GitHub
				</a>

				<a
					href="https://www.linkedin.com/in/min-khant-thaw-7037a3364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
