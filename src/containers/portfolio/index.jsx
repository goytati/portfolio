import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsFillFolderSymlinkFill } from "react-icons/bs";
import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/image5.jpg";
import ImageSix from "../../images/image6.jpg";
import ImageSeven from "../../images/image7.jpg";
import ImageEight from "../../images/image8.jpg";
import ImageNine from "../../images/image9.jpg";
import "./styles.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const portfolioData = [
  {
    id: 2,
    name: "Baking Blog",
    image: ImageOne,
    link: "https://goytati.github.io/KazumiBlog/",
  },
  {
    id: 3,
    name: "Book-cover",
    link: "",
    image: ImageTwo,
  },
  {
    id: 3,
    name: "Magazine cover",
    image: ImageThree,
    link: "",
  },
  {
    id: 2,
    name: "miniGame-Whack-a-mole",
    image: ImageFour,
    link: "https://goytati.github.io/miniGame-whack-a-mole/",
  },
  {
    id: 3,
    name: "Magazine cover",
    image: ImageFive,
    link: "",
  },
  {
    id: 2,
    name: "miniGame-Love-calculator",
    image: ImageSix,
    link: "https://goytati.github.io/miniGame-love-calculator/",
  },
  {
    id: 2,
    name: "miniGame-Rock-Paper-Scissors",
    image: ImageSeven,
    link: "https://goytati.github.io/miniGame-rock-paper-scissors/",
  },
  {
    id: 2,
    name: "miniProjcect-hexagon-hover",
    image: ImageEight,
    link: "https://goytati.github.io/miniProjcect-hexagon-hover/",
  },
  {
    id: 2,
    name: "miniProjcect-hexagon-background",
    image: ImageNine,
    link: "https://goytati.github.io/miniProjcect-hexagon-background/",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Developement",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsFillFolderSymlinkFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                <img alt="project data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button onClick={Link}>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
