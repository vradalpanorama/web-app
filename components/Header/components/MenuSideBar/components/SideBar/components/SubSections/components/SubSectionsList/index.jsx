import React from "react";
import { Container, ExploreAll, Item, List } from "./components";

const SubSectionsList = ({ activeSectionParams }) => {
    const { pagesSection, slug } = activeSectionParams;

    return (
        <Container>
            <List>
                {pagesSection.map((page, key) => (
                    <Item key={key} page={page} />
                ))}
            </List>
            <ExploreAll pathname={slug.current} />
        </Container>
    );
};

export default SubSectionsList;
