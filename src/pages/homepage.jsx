import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import AllNews from "../components/news/allNews";
import AllProjects from "../components/projects/allProjects";
import AllProfiles from "../components/team/allProfile";
import INFO from "../data/user";
import SEO from "../data/seo";
import "./styles/team.css";
import "./styles/homepage.css";

const Homepage = () => {

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "home");

	return (
		<React.Fragment>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<div className="content-wrapper">
					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className = "homepage-titlepack">
									<div className="homepage-logo">
										<Logo width={120} />
									</div>
									<div className="title homepage-title">
										<p>ISLS-Workshop</p>
										<p>AI Augmented Learning for All: Challenges and Opportunities</p>
									</div>
								</div>
								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>
							</div>
						</div>
						<div className="homepage-projects">
						<div className="section-title">
							{INFO.homepage.subtitle1}
						</div>
							<AllProjects />
						</div>
						<div className="section-title">
							{INFO.homepage.subtitle2}
						</div>
						<div className="homepage-news">
							<AllNews />
						</div>
						<div className="section-title">
							{INFO.homepage.subtitle3}
						</div>
						<div className="team-wrapper">
							<AllProfiles />
						</div>
						<hr />
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
