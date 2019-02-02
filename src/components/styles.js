import styled from 'styled-components';
import { Row, Input, H1, H2, Button, Textarea } from "@bootstrap-styled/v4";

export const StyledH1 = styled(H1)`
    margin: 1em auto;
    text-align: center;
    font-size: 2em;
    font-weight: 600;
    font-family: ${p => p.theme.fontFamily}
`;

export const StyledH2 = styled(H2)`
    && {
        text-align: center;
        font-size: 1em;
        font-weight: 700;
        font-family: ${p => p.theme.fontFamily}
    }
`;


export const StyledButton = styled(Button)`
    margin: 1em auto 1em 6px;
`;

export const StyledTextarea = styled(Textarea)`
    width: 100%;
    height: 5.5em;
    padding: 1em;
    line-height: 1.5em;
`;

export const StyledItemList = styled.div`
    margin-top: 50px;
    width: 100%;
`;


const itemHeight = "5em";

export const StyledItem = styled.div`
    width: 100%;
    height: ${itemHeight};
`;

export const StyledCheckboxWrapper = styled.div`
    width: 100%;
    display: flex;
`;

export const StyledCheckbox = styled(Input)`
    width: 25px;
    height: 25px;
    margin: 1.8em auto;
    cursor: pointer;
`;

export const StyledItemRow = styled(Row)`
    && {
        margin: 20px;
    }
`;