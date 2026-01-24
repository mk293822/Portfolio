import GitHubIcon from "../assets/github-142-svgrepo-com.svg";
import HTMLIcon from "../assets/html-5-svgrepo-com.svg";
import CSSIcon from "../assets/css-svgrepo-com.svg";
import JSIcon from "../assets/javascript-svgrepo-com.svg";
import LaravelIcon from "../assets/laravel-svgrepo-com.svg";
import MySQLIcon from "../assets/mysql-logo-svgrepo-com.svg";
import PHPIcon from "../assets/php-svgrepo-com.svg";
import ReactIcon from "../assets/react-svgrepo-com.svg";
import TailwindIcon from "../assets/tailwind-svgrepo-com.svg";
import TSIcon from "../assets/typescript-svgrepo-com.svg";

const Skills = () => {
	const skills = [
		{
			name: "GitHub",
			icon: (
				<img
					src={GitHubIcon}
					alt="GitHub"
					className="w-12 h-12"
				/>
			),
		},
		{
			name: "HTML",
			icon: (
				<img
					src={HTMLIcon}
					alt="HTML"
					className="w-12 h-12"
				/>
			),
		},
		{
			name: "CSS",
			icon: (
				<img
					src={CSSIcon}
					alt="CSS"
					className="w-12 h-12"
				/>
			),
		},
		{
			name: "JavaScript",
			icon: (
				<img
					src={JSIcon}
					alt="JS"
					className="w-12 h-12"
				/>
			),
		},
		{
			name: "Laravel",
			icon: (
				<img
					src={LaravelIcon}
					alt="Laravel"
					className="w-12 h-12"
				/>
			),
		},
		{
			name: "MySQL",
			icon: (
				<img
					src={MySQLIcon}
					alt="MySQL"
					className="w-12 h-12"
				/>
			),
		},
		{
			name: "PHP",
			icon: (
				<img
					src={PHPIcon}
					alt="PHP"
					className="w-12 h-12"
				/>
			),
		},
		{
			name: "React",
			icon: (
				<img
					src={ReactIcon}
					alt="React"
					className="w-12 h-12"
				/>
			),
		},
		{
			name: "Tailwind",
			icon: (
				<img
					src={TailwindIcon}
					alt="Tailwind"
					className="w-12 h-12"
				/>
			),
		},
		{
			name: "TypeScript",
			icon: (
				<img
					src={TSIcon}
					alt="TS"
					className="w-12 h-12"
				/>
			),
		},
	];

	return (
		<section
			id="skills"
			className="min-h-screen snap-start flex flex-col justify-center items-center px-6 lg:pt-[6vh] pt-[12vh]"
		>
			<h1 className="text-4xl md:text-6xl mb-4 font-radley italic text-center">
				Skills
			</h1>

			<p className="text-lg md:text-xl max-w-2xl text-gray-700 mb-12 text-center leading-relaxed">
				I specialize in building modern, scalable, and efficient web
				applications.
				<br />
				These are the technologies I use regularly to deliver clean code and
				premium user experiences.
			</p>

			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-5xl w-full">
				{skills.map((skill, index) => (
					<div
						key={index}
						className="flex flex-col justify-center items-center gap-2 p-4 border rounded-xl hover:shadow-lg transition hover:scale-105"
					>
						{skill.icon}
						<span className="text-gray-700 font-semibold">{skill.name}</span>
					</div>
				))}
			</div>
		</section>
	);
};

export default Skills;
