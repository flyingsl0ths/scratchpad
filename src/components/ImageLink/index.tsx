import React from "react";

interface ImageLinkProps {
  id?: string;
  imageDescription: string;
  image: string;
  url: string;
}

export default function ImageLink(props: ImageLinkProps): JSX.Element {
  return (
    <a id={props.id} href={props.url} target="_blank" rel="noopener noreferrer">
      <img src={props.image} alt={props.imageDescription} />
    </a>
  );
}
