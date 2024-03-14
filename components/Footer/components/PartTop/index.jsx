import React from "react";
import { BrandSection, Container, NavigationSection } from "./components";

const PartTop = ({ navigation }) => {
    return (
        <Container>
            <BrandSection />
            <NavigationSection navigation={navigation} />
        </Container>
    );
};

export default PartTop;
