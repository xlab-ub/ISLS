import React from "react";
import New from "./news";

import INFO from "../../data/user";

import "./styles/allNews.css";


const AllNews = () => {
	return (
		<div className="all-news-container">
			{INFO.news.map((news_item, index) => (
				<div className="all-news-new" key={index}>
					<New
						date={news_item.date}
						description={news_item.description}
						moderators={news_item.moderators}
						speakers={news_item.speakers}
						link={news_item.link}
					/>
				</div>
			))}
		</div>
	);
};

export default AllNews;
