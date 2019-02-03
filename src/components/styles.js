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
    height: 100%;
    padding: 1em;
    line-height: 1.5em;
`;

export const StyledItemList = styled.div`
    margin-top: 50px;
    width: 100%;
`;

export const StyledCheckboxWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

export const StyledCheckbox = styled(Input)`
    width: 25px;
    height: 25px;
    margin: auto;
    cursor: pointer;
`;

export const StyledItemHeader = styled(Row)`
    && {
        margin: 20px;
    }
`;

export const StyledItemRow = styled(Row)(props => ({
    margin: '20px !important',
    backgroundColor: props.remind ? '#41A3E2' : GLOBAL_STYLE.backgroundColor,
    border: props.remind ? '10px solid #41A3E2' : 'none'
}));



export const StyledDatetimeWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

export const StyledDatetime = styled.div`
    margin: auto;
`;

export const StyledDisabledDatetime = styled.div`
    margin: auto;
`;

export const StyledDisabledInput = styled.input`
    background-color: #EBEBE4;
    border: 1px solid darkgrey;
`;