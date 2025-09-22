import React from "react";
import "../styles/AchievementsSection.css";
import { ACHIEVEMENTS } from "../constants/texts";
import youngestChampImg from "../assets/youngest-champ.jpg";
import secondYoungestImg from "../assets/second-youngest.jpg";
import fideRatingChampImg from "../assets/fide-rating-champ.jpg";

const achievementsWithImg = ACHIEVEMENTS.map((item, idx) => {
  if (idx === 1) return { ...item, img: youngestChampImg };
  if (idx === 2) return { ...item, img: secondYoungestImg };
  if (idx === 3) return { ...item, img: fideRatingChampImg };
  return item;
});

const AchievementsSection = () => (
	<section className="achievements-section">
		<h2>{achievementsWithImg[0].heading}</h2>
    <p className="achievements-description">{achievementsWithImg[0].description}</p>
		<div className="achievements-list">
			{achievementsWithImg.slice(1).map((item, idx) => (
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
							style={{
								width: item.width || "340px",
								height: item.height || "380px"
							}}
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
