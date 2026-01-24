import GitHubIcon from "../assets/github-142-svgrepo-com.svg";

const Contact = () => {
	const contacts = [
		{
			title: "Phone",
			value: "+95 9123456789",
			href: "tel:+959123456789",
			icon: "📞",
			color: "text-blue-600",
		},
		{
			title: "Email",
			value: "mkt293822@gmail.com",
			href: "mailto:mkt293822@gmail.com",
			icon: "✉️",
			color: "text-blue-600",
		},
		{
			title: "GitHub",
			value: "github.com/mk293822",
			href: "https://github.com/mk293822",
			icon: (
				<img
					src={GitHubIcon}
					alt=""
					className="size-9"
				/>
			),
			color: "text-gray-800",
		},
		{
			title: "LinkedIn",
			value: "linkedin.com/in/min-khant-thaw",
			href: "https://www.linkedin.com/in/min-khant-thaw-7037a3364/",
			icon: "🔗",
			color: "text-blue-700",
		},
	];

	return (
		<section
			id="contact"
			className="min-h-screen snap-start flex pt-[12vh] flex-col justify-center items-center text-center px-6 py-12"
		>
			<h1 className="text-4xl md:text-6xl mb-4 font-radley italic">Contact</h1>

			<p className="text-lg md:text-xl max-w-xl text-gray-700 mb-6 leading-relaxed">
				If you’d like to work together on a project or just want to say hello,
				feel free to reach out. I’m always happy to connect and chat.
			</p>

			{/* Contact grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl w-full">
				{contacts.map((c, index) => (
					<a
						key={index}
						href={c.href}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-4 p-6 border rounded-xl hover:shadow-lg transition hover:scale-105"
					>
						<span className={`text-3xl ${c.color}`}>{c.icon}</span>
						<div className="flex flex-col text-left">
							<span className="font-semibold">{c.title}</span>
							<span className="text-gray-700">{c.value}</span>
						</div>
					</a>
				))}
			</div>
		</section>
	);
};

export default Contact;
