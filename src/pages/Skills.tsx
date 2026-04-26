import GitHubIcon from "../assets/github-142-svgrepo-com.svg";
import DockerIcon from "../assets/docker-mark-ocean-blue.svg";
import PythonIcon from "../assets/python-logo.svg";
import PythonanywhereIcon from "../assets/pythonanywhere-logo.svg";
import LaravelIcon from "../assets/laravel-svgrepo-com.svg";
import PostgreSqlLogo from "../assets/postgresql-logo.svg";
import PHPIcon from "../assets/php-svgrepo-com.svg";
import ReactIcon from "../assets/react-svgrepo-com.svg";
import RenderIcon from "../assets/render-logo.svg";
import TSIcon from "../assets/typescript-svgrepo-com.svg";
import DjangoIcon from "../assets/django-logo.svg"
import MySqlLogo from "../assets/mysql-logo.svg"

const Skills = () => {
	const skills = [
		// DevOps / Tools
		{
			name: "GitHub",
			icon: <img src={GitHubIcon} alt="GitHub" className="w-12 h-12" />,
		},
		{
			name: "Docker",
			icon: <img src={DockerIcon} alt="Docker" className="w-12 h-12" />,
		},
		// Platforms
		{
			name: "Render",
			icon: <img src={RenderIcon} alt="Render" className="w-12 h-12" />,
		},
		{
			name: "PythonAnywhere",
			icon: <img src={PythonanywhereIcon} alt="PythonAnywhere" className="w-12 h-12" />,
		},
		// Database
		{
			name: "PostgreSQL",
			icon: <img src={PostgreSqlLogo} alt="PostgreSQL" className="w-12 h-12" />,
		},
		{
			name: "MySQL",
			icon: <img src={MySqlLogo} alt="MySQL" className="w-12 h-12" />,
		},
		// Backend
		{
			name: "Laravel",
			icon: <img src={LaravelIcon} alt="Laravel" className="w-12 h-12" />,
		},
		{
			name: "Django",
			icon: <img src={DjangoIcon} alt="Django" className="w-12 h-12" />,
		},
		{
			name: "PHP",
			icon: <img src={PHPIcon} alt="PHP" className="w-12 h-12" />,
		},
		{
			name: "Python",
			icon: <img src={PythonIcon} alt="Python" className="w-12 h-12" />,
		},
		// Frontend
		{
			name: "React",
			icon: <img src={ReactIcon} alt="React" className="w-12 h-12" />,
		},
		{
			name: "TypeScript",
			icon: <img src={TSIcon} alt="TS" className="w-12 h-12" />,
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

			<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-8 max-w-5xl w-full">
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
