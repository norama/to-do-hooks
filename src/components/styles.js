import styled from 'styled-components';
import { Row, Input, H1, H2, Button, Textarea } from "@bootstrap-styled/v4";

export const GLOBAL_STYLE = {
    backgroundColor: "lightgrey",
    bodyColor: "#222"
};

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
    && {
        font-weight: 600;
    }
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

const itemHeightUnits = 5;
const itemHeight = "" + itemHeightUnits + "em";
const panelHeight = "" + (10 * itemHeightUnits) + "em";

export const StyledScrollPanel = styled.div`
    width: 100%;
    height: ${panelHeight};
    overflow-y: auto;
`;

export const StyledScrollContent = styled.div`
    margin-right: 10px;
    margin-left: 10px;
`;

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

export const StyledItemHeader = styled(Row)`
    && {
        margin: 10px 20px;
        width: 96%;
    }
`;

export const StyledItemRow = styled(Row)(props => ({
    margin: '20px',
    backgroundColor: props.remind ? '#41A3E2' : GLOBAL_STYLE.backgroundColor
}));



export const StyledDatetimeWrapper = styled.div`
    width: 100%;
    display: flex;
`;

export const StyledDatetime = styled.div`
    margin: 1.7em auto;
`;

export const StyledDisabledDatetime = styled.div`
    margin: 1.5em auto;
`;

export const StyledDisabledInput = styled.input`
    background-color: #EBEBE4;
    border: 1px solid darkgrey;
`;