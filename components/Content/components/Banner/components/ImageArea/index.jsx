import React from "react";
import { Container, Img } from "./components";

const ImageArea = ({image}) => {
    return (
        <Container>
            <Img img={image}/>
        </Container>
    );
};

export default ImageArea;
