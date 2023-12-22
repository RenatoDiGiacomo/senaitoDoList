import styled from "styled-components";

const ListStyled = styled('div')`
    width:100%;
    display: flex;
    flex-direction:column;
`;

const ListItemStyled = styled('div')`
    width:100%;
    align-items:center;
    display: flex;
    border-bottom:1px solid #8080802e;
    padding: .5rem 0;
`;
const ListItemDataStyled = styled('div')`
    display: flex;
    align-items:center;
    width:100%;
    gap:21px
`
const ListItemDataCheckStyled = styled('input')``
const ListItemDataTextStyled = styled('p')`
text-decoration: ${({ styled }) => styled ? "line-through" : "none"};
opacity:${({ styled }) => styled ? .5 : 1};
padding: ${({ styled }) => styled ? ".5rem" : "auto"};
`
const ListItemIconStyled = styled('div')`
display:${({ styled }) => styled ? "none" : "block"};
    cursor:pointer;
    svg{
        fill:var(--red)
    }
`


export { ListStyled, ListItemStyled, ListItemDataStyled, ListItemDataCheckStyled, ListItemDataTextStyled, ListItemIconStyled }