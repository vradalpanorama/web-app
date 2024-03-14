const notDrafts = '!(_id in path("drafts.**"))';

const typeExtenalLink = `
_type == "externalLink" => {
    ...
}
`

const typeModal = `
_type == "modal"  => {
    _type, settings
}`;

const typePage = `
_type == "page"  => {
    _type, settings{
        namePage, pathname{
            ...,
            section->{
                slug
            }
        }
    }
}`;

const typeSection = ` 
_type == "section" => {
    _type, slug, title, pagesSection[]->{
        ${typeModal},
        ${typePage},
        ${typeExtenalLink}
    }
}`;

const typeSectionWithoutPagesSection = `
_type == "section" => {
    _type, slug, title
}
`;



const secondNavigation = `
secondNavigation->{
   ${typeSection},
   ${typePage},
   ${typeModal},
   ${typeExtenalLink}
}
`;

const mainNavigationList = `
mainNavigation[]-> {
    ${typeSection},
    ${typePage},
    ${typeModal},
    ${typeExtenalLink}
}
`;

const menuSettings = `
menuSettings {
    ...,
    ${mainNavigationList},
    ${secondNavigation},
}
`;

const footerSettings = `
footerSettings {
    navigation[] {
        rows[] {
            ...,
            pagesSection[]-> {
                ${typeSectionWithoutPagesSection},
                ${typePage},
                ${typeModal},
                ${typeExtenalLink}
            }
        }
    }
}
`;

const siteSettings = `
{
    "siteSettings": *[_type == 'siteSettings' && _id == 'siteSettings' && ${notDrafts}][0]{
        ...,
        ${menuSettings},
        ${footerSettings}
    }
}
`;

export default siteSettings;
