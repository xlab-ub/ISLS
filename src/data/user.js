import React from "react";

const INFO = {
	main: {
		title: "ISLS-Workshop",
		name: "ISLS",
		email: "jinjun@buffalo.edu",
		logo: "ISLS-logo.png",
	},

	socials: {
		twitter: "https://twitter.com/",
		github: "https://github.com/",
		linkedin: "https://linkedin.com/",
		instagram: "https://instagram.com/",
		stackoverflow: "https://stackoverflow.com/",
		facebook: "https://facebook.com/",
	},

	homepage: {
		title: "Workshop: AI Augmented Learning for All: Challenges and Opportunities",
		description:
			<span>As Artificial Intelligence (AI) becomes increasingly powerful, it is imperative for the
			general public to learn more about AI and how it can be utilized to address the society’s daily
			challenges. The National AI Institutes represent a cornerstone  of the U.S.  government’s
			commitment to fostering long-term fundamental research in AI. This workshop will introduce
			the National AI Institutes program to the Learning Sciences community, and, in particular, will
			focus on five of such AI Institutes related to the learnings science community, i.e.,  the National
			AI Institute for Adult Learning and Online Education (<b>AI-ALOE)</b>),  the National AI Institute for
			Engaged Learning (<b>EngageAI</b>), the National AI Institute for Student-AI Teaming (<b>iSAT</b>), the
			National AI Institute for Exceptional Education (<b>AI4ExceptionalEd</b>), and the National AI
			Institute for Inclusive Intelligent Technologies for Education (<b>INVITE</b>). The objectives are to
			introduce to the learning sciences community about the various education and learning related
			use cases being addressed by these AI Institutes, their AI research activities, the current status of
			AI advancement and limitations, and more importantly, how the learning sciences community
			can engage with these AI Institutes to shape their research programs to more strongly align with
			ongoing and emerging research in the field. Key research leaders from the AI Institutes will be
			invited to speak at the workshop along with other key players.</span>,
		subtitle1: "Here are some details about the five National AI Institutes:",
		subtitle2: "Agenda",
		subtitle3: "Organizers",
	},

	bio: {
		title: "About me",
		description:
			"Curiosity-driven AI Systems Research",
	},

	publications: {
		title: "Make Every Work Count.",
		description:
			"Chronological collection of all resources.",
	},

	projects: [
		{
			title: "01 The National AI Institute for Adult Learning and Online Education (AI-ALOE)",
			description:
				"The National AI Institute for Adult Learning and Online Education (AI-ALOE) develops novel AI assistants for learning and teaching to enhance the proficiency of adult reskilling and upskilling, and thereby transform workforce development. The AI assistants address known problems in online education (lack of cognitive engagement, teaching presence, and social interaction) as well as personalize adult learning at scale. AI-ALOE also develops new AI models and techniques for self-directed learning, data visualization, self-explanation, machine teaching, and theory of mind to make the AI assistants usable, learnable, teachable, and scalable. In addition, AI-ALOE is developing a unified technology and data architecture for deploying and evaluating AI assistants, collecting and analyzing data, and personalizing learning at scale. The Institute is led by Georgia Institute of Technology and includes partners from academia (Georgia State University, Harvard University, Technical College System of Georgia, University of North Carolina at Greensboro, Vanderbilt University), industry (Accenture, Boeing, IBM, Wiley), and non-profit organizations (1EdTech). The Technical College System of Georgia with more than 300,000 students in 22 2-year colleges provides a critical educational setting for co-designing and evaluating the AI assistants for learning and teaching.",
			logo: "AI-ALOE.png",
			link: "https://aialoe.org/",  // This should be the actual URL
		},

		{
			title: "02 The National AI Institute for Engaged Learning (EngageAI)",
			description:
				"The National AI Institute for Engaged Learning (EngageAI) is headquartered at North Carolina State University with the University of North Carolina at Chapel Hill, Indiana University, Vanderbilt University, and Digital Promise as lead partners, and it promises to harness the power of AI to revolutionize K-12 STEM education. The Institute’s cutting-edge learning environment technologies will create captivating STEM learning experiences featuring AI-generated narratives with dynamic plots, including interactive science problem-solving scenarios, characters, and dialogues, powered by advances in adaptive collaborative learning and multimodal learning analytics. The Institute’s work drives foundational AI breakthroughs in natural language processing, computer vision and machine learning tailored to specific educational settings. Ultimately, the Institute seeks to empower science educators by providing curriculum design support and innovative classroom practices that meet the needs of diverse students. The goal of the Institute is to ignite a passion for STEM in students and deepen their understanding of science through AI-enabled, narrative-centered learning, enhancing education in schools and after-school programs. Furthermore, the AI-enabled learning environments created by the Institute hold significant promise for promoting effective collaborative learning. These innovations adaptively support students as they explore STEM concepts, engage in problem-solving, and communicate.",
			logo: "EngageAI.png",
			link: "https://engageai.org/",
		},

		{
			title: "03 The National AI Institute for Student-AI Teaming (iSAT)",
			description:
				"The National AI Institute for Student-AI Teaming (iSAT) is led by the University of Colorado Boulder, and addresses a fundamental question, i.e., how can we foster effective, equitable and engaging learning experiences for all students? iSAT’s team is reimagining the role of AI in education as social and collaborative partners (AI Partners) supporting teachers and students to transform classrooms into knowledge-building communities. These communities are designed to promote deep reasoning and knowledge sharing as students collaboratively work to solve complex challenges that are authentic to their interests and societal needs. AI Partners help facilitate small group discussions, aiding students in constructing their own understanding and helping them develop their collaboration skills. They are socially sensitive and can communicate naturally by understanding students’ speech, facial expressions, eye gaze and gestures while avoiding the pitfalls of bias and inequity. They also prioritize the trust and comfort of students by avoiding behaviors that might be perceived as surveillance. Critically, AI Partners are not replacing teachers, but are co-designed in collaboration with educators to complement and augment what teachers do best: inspire, teach and nurture students.",
			logo: "iSAT.png",
			link: "https://www.colorado.edu/research/ai-institute/our-research/isat-lab",
		},

		{
			title: "04 The National AI Institute for Exceptional Education (AI4ExceptionalEd)",
			description:
				"The National AI Institute for Exceptional Education (AI4ExceptionalEd) is led by the University at Buffalo and aims to advance artificial intelligence to help speech language pathologists (SLP) practice at their full potential, ensuring no child in need of speech and language services is left behind. Currently, nearly 3.4 million children, more than half of those served under the Individuals with Disabilities Education Act, require speech and language services. These children face communication challenges that place them at risk for suboptimal social-emotional and academic outcomes. An alarming shortage of SLPs, combined with delays in identification of needs and unmet services during the COVID-19 pandemic, has likely exacerbated this gap. AI4ExceptionalEd aims to provide SLPs with time-saving tools and insights, allowing them to deliver tailored interventions to children during a fundamental period of growth. This approach mitigates the risk of them falling further behind in their academic and social development. The institute will develop AI technologies complemented by human expertise to inform two innovative solutions: the AI Screener and the AI Orchestrator. These solutions will not only enable the scaling of SLPs’ expertise but also provide culturally sensitive universal screening and ability-based intervention. By enhancing the quality of speech and language services for children, AI4ExceptionalEd seeks to instigate a fundamental shift in how these services are delivered. Ultimately, this investment in youth will create a pathway for long-term economic impact as they grow and contribute to the workforce.",
			logo: "AIException4Ed.png",
			link: "https://www.buffalo.edu/ai4exceptionaled.html",
		},

		{
			title: "05 The National AI Institute for Inclusive Intelligent Technologies for Education (INVITE)",
			description:
				"The National AI Institute for Inclusive Intelligent Technologies for Education (INVITE) is led by University of Illinois Urbana-Champaign, driven by a fundamental question, i.e., how can AI be leveraged to help achieve education for all? Just as exceptional educators adapt to the individual needs, behaviors and development of diverse learners, INVITE envisions technologies in school that are similarly adaptive. To realize this vision, INVITE is committed to developing AI tools and approaches that directly address the Education for All initiative. The institute will deliver a new generation of tools that will be radically more responsive to the needs of individual learners and educators. INVITE technologies seek to address key skills and underlying beliefs that are essential for successful learning, all while empowering teachers and families to support children in more nuanced and meaningful ways. INVITE aims to foster three pivotal skills crucial for effective learning: persistence, academic resilience and collaboration. INVITE’s use-inspired research focuses on how children learn to become effective collaborators, persist through challenging tasks and bounce back from struggle during learning. To accomplish this, INVITE teams will engage in research and outreach activities in partnership with the INVITE K-12 partner network to reach a community of learners of almost 96,000 students across 24 school districts and nonprofits across eight states.",
			logo: "INVITE.png",
			link: "https://invite.illinois.edu/",
		},
	],
	news : [
		{
			date: "09:00 - 09:30",
			description: "Intro to AI Institute Program",
			moderators: "Moderator: Venugopal Govindaraju",
			speakers: "Speakers: NSF Program Director (Fengfeng Ke), IES Program Director (Britta Bresina)"
		},
		{
			date: "09:30 - 10:30",
			description: "Overview of the five National AI Institutes",
			moderators: "Moderator: Steve Brown",
			speakers: "Speakers: Min Kyu Kim – AI-ALOE, Krista Glazewski – EngageAI, Jeffrey Bush – ISAT, Jinjun Xiong – AI4ExceptionalEd, Cheng Zhai – INVITE"
		},
		{
			date: "10:30 - 11:00",
			description: "Coffee Break"
		},
		{
			date: "11:00 – 12:00",
			description: "Demos and Discussion",
			moderators: "Speakers: All"
		},
		{
			date: "12:00 – 1:00",
			description: "Lunch Break"
		},
		{
			date: "1:00 – 1:45",
			description: "Interactive session: Multimodality understanding of a learning scenario",
			moderators: "Moderator: Joshua A. Danish, Junsong Yuan",
			speakers: "Speakers: All"
		},
		{
			date: "1:45 - 2:30",
			description: "Panel – connecting learning science careers and AI",
			moderators: "Moderator: Blair Lehman",
			speakers: "Speakers: Diego Zapata-Rivera, Ranga Setlur, Karthik Dantu, Robb Lindgren, Christine Wang"
		},
		{
			date: "2:30 – 3:00",
			description: "Coffee Break"
		},
		{
			date: "3:00 – 3:45",
			description: "Interactive session: Advancement of Natural Language Processing in the midst of Large Language Models",
			moderators: "Moderator: Cheng Zhai, Hari Subramonyam",
			speakers: "Speakers: All"
		},
		{
			date: "3:45 – 4:30",
			description: "Interactive session: Automatic Speech Translation for Children",
			moderators: "Moderator: Jinjun Xiong, Alison Hendricks",
			speakers: "Speakers: All"
		},
		{
			date: "4:30 – 5:00",
			description: "Closing Discussion"
		}
	],
};

export default INFO;
