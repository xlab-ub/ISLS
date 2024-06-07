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
                                <div className="homepage-titlepack">
                                    <div className="homepage-logo">
                                        <Logo width={120} />
                                    </div>
                                    <div className="title homepage-title">
                                        <p>ISLS-Workshop</p>
                                        <p>AI Augmented Learning for All: Challenges and Opportunities</p>
                                        <small>Sunday, June 9, 2024</small>
                                        <div style={{ fontSize: 'smaller', color: 'grey' }}>
                                            <small>Diefendorf Hall - University at Buffalo, 140 Diefendorf Loop, Buffalo, NY 14214</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="subtitle homepage-subtitle">
                                    {INFO.homepage.description}
                                </div>
                                <div className="register-link">
									<p>
										Ready to explore the future of AI in education? Join us at the ISLS-Workshop!
										Secure your spot now through the <a href="https://2024.isls.org/workshops-tutorials/" target="_blank" rel="noopener noreferrer">official ISLS website</a>.
										Don’t miss this unique opportunity to connect with experts and like-minded peers!
									</p>
								</div>
                            </div>
                        </div>
                        <div>
                            <p></p>
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
                        <div className="homepage-projects">
                            <div className="section-title">
                                {INFO.homepage.subtitle1}
                            </div>
                            <AllProjects />
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
