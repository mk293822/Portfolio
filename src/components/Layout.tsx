import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (window.location.hash) {
			const element = document.querySelector(window.location.hash);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}

		const handleHashChange = () => {
			const element = document.querySelector(window.location.hash);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		};

		window.addEventListener("hashchange", handleHashChange);

		return () => window.removeEventListener("hashchange", handleHashChange);
	}, []);

	useEffect(() => {
		const sections = document.querySelectorAll("section[id]");

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						history.replaceState(null, "", `#${entry.target.id}`);
					}
				});
			},
			{ threshold: 0.6 },
		);

		sections.forEach((section) => observer.observe(section));

		return () => observer.disconnect();
	}, []);

	const headers = [
		{ title: "Home", href: "#home" },
		{ title: "Projects", href: "#projects" },
		{ title: "Skills", href: "#skills" },
		{ title: "About", href: "#about" },
		{ title: "Contact", href: "#contact" },
	];
	return (
		<div className="h-screen overflow-y-scroll snap-y snap-mandatory snap-always scroll-smooth no-scrollbar">
			{/* Navbar */}
			<header className="bg-white shadow-lg fixed w-full z-10">
				<div className="container mx-auto px-4 py-4 flex flex-col">
					<div className="flex justify-between items-center">
						<div className="text-2xl sm:text-3xl font-radley">MyPortfolio</div>

						{/* Mobile Drawer Trigger */}
						<div className="sm:hidden">
							<Drawer
								open={open}
								onOpenChange={setOpen}
								direction="left"
							>
								<DrawerTrigger asChild>
									<Button
										variant="outline"
										aria-label="Open Menu"
									>
										<svg
											className="w-8 h-8"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M4 6h16M4 12h16M4 18h16"
											/>
										</svg>
									</Button>
								</DrawerTrigger>

								<DrawerContent className="bg-white p-6 w-64 sm:w-72">
									<DrawerHeader>
										<DrawerTitle className="text-2xl">Menu</DrawerTitle>
										<DrawerDescription>
											Navigate through the sections
										</DrawerDescription>
									</DrawerHeader>

									<nav className="flex flex-col mt-4 gap-3">
										{headers.map((header, index) => (
											<a
												key={index}
												href={header.href}
												onClick={() => setOpen(false)}
												className="flex items-center justify-between px-4 py-3 rounded-lg text-gray-800 font-medium hover:bg-gray-100 hover:text-gray-900 transition-all duration-200 shadow-sm hover:shadow-lg"
											>
												<span>{header.title}</span>
												<svg
													className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors duration-200"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M9 5l7 7-7 7"
													/>
												</svg>
											</a>
										))}
									</nav>
								</DrawerContent>
							</Drawer>
						</div>

						{/* Desktop Nav */}
						<nav className="hidden sm:flex space-x-6 text-lg items-center">
							{headers.map((header, index) => (
								<a
									key={index}
									href={header.href}
									className="text-gray-700 hover:underline hover:underline-offset-4 hover:text-gray-900 transition-colors duration-200"
								>
									{header.title}
								</a>
							))}
						</nav>
					</div>
				</div>
			</header>
			<main>{children}</main>
		</div>
	);
};

export default Layout;
