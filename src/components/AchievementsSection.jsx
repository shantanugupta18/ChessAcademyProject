import React from "react";
import "../styles/AchievementsSection.css";
import { ACHIEVEMENTS } from "../constants/texts";



const AchievementsSection = () => (
	<section className="achievements-section">
		<h2>{ACHIEVEMENTS[0].heading}</h2>
    <p className="achievements-description">{ACHIEVEMENTS[0].description}</p>
		<div className="achievements-list">
			{ACHIEVEMENTS.slice(1).map((item, idx) => (
				<div
					className={`achievement-row ${
						idx % 2 === 0 ? "row-normal" : "row-reverse"
					}`}
					key={idx}
				>
					<div className="achievement-img-wrapper">
						<img
							src={item.img}
							alt={item.title}
							className="achievement-img"
						/>
					</div>
					<div className="achievement-info">
						<h3>{item.title}</h3>
						<p>{item.desc}</p>
					</div>
				</div>
			))}
		</div>
	</section>
);

export default AchievementsSection;
