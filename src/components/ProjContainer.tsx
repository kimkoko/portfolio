import React from "react";
import "./ProjContainer.scss";

// Import Splide
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

interface ProjContainerProps {
  title: string;
  images: string[];
  content: React.ReactNode;
  links: string[][];
}

const ProjContainer: React.FC<ProjContainerProps> = ({
  title,
  images,
  content,
  links,
}) => {
  return (
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">{title}</h3>
      </div>

      <div className="project-body">
        <div className="project-gallery">
          <Splide
            options={{
              rewind: true,
              width: "100%",
              gap: "1rem",
              arrows: true,
              pagination: true,
            }}
          >
            {images.map((image, index) => (
              <SplideSlide key={index}>
                <div className="image-wrapper">
                  <img src={image} alt={`${title} screenshot ${index + 1}`} />
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>

        <div className="project-info">
          <div className="project-content">{content}</div>

          <div className="project-links">
            {links.map((link, index) => (
              <a
                key={index}
                href={link[0]}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                {link[1]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjContainer;
