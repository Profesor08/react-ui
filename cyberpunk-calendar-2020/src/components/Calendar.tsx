import React, { useState } from "react";
import styled from "styled-components";
import Lightbox from "react-image-lightbox";

const CalendarItem = styled.img`
  max-width: 100%;
  transition: ease all 0.5s;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const CalendarElement = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 10px;
  margin: 10px;
`;

export const Calendar = ({ images }: { images: string[] }) => {
  const [active, setActive] = useState(-1);

  return (
    <CalendarElement>
      {images.map((image, id) => (
        <CalendarItem
          key={id}
          src={image}
          onClick={() => {
            setActive(id);
          }}
        />
      ))}

      {active >= 0 ? (
        <Lightbox
          mainSrc={images[active]}
          prevSrc={images[(active + images.length - 1) % images.length]}
          nextSrc={images[(active + 1) % images.length]}
          onCloseRequest={() => {
            setActive(-1);
          }}
          onMovePrevRequest={() => {
            setActive((active + images.length - 1) % images.length);
          }}
          onMoveNextRequest={() => {
            setActive((active + 1) % images.length);
          }}
        />
      ) : null}
    </CalendarElement>
  );
};
