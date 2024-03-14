import React from "react";
import { Container, Img } from "./components";

const ImageArea = ({bannerImg}) => {
    const {caption} = bannerImg
    return (
        <Container>
            <Img alt={caption} src={bannerImg}/>
        </Container>
    );
};

export default ImageArea;
