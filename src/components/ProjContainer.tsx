import React, { ReactNode } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "./ProjContainer.scss";
import "@splidejs/react-splide/css";

interface ProjContainerProps {
  title: string;
  images: string[];
  content: ReactNode;
  links: [string[], string[]];
}

const ProjContainer: React.FC<ProjContainerProps> = ({
  title,
  images,
  content,
  links,
}) => {
  return (
    <div className="proj-detail-container">
      <div className="proj-detail-title">{title}</div>
      <div className="proj-detail-content">
        <div className="proj-detail-img">
          <Splide
            options={{
              rewind: true,
              perPage: 1,
            }}
          >
            {images.map((image, index) => (
              <SplideSlide key={index}>
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="proj-slide-img"
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
        <div className="proj-detail-left">
          <div className="proj-detail-text">{content}</div>
          <div className="proj-detail-link">
            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link[0]} target="_blank" rel="noreferrer">
                    {link[1]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjContainer;
