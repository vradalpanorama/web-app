import React from "react";
import { Container, Img } from "./components";

const ImageArea = ({imgObj}) => {
    const {img, alt} = imgObj
    return (
        <Container>
            <Img alt={alt} src={img}/>
        </Container>
    );
};

export default ImageArea;
