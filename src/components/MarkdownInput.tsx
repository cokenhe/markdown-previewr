import React from "react";
import styled from "styled-components";

interface MarkdownInputProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const InputContainer = styled.div`
    width: 50%;
    background-color: #fff;
`;

const StyledTextArea = styled.textarea`
    width: 100%;
    height: 100%;
    font-size: 1rem;
    border: none;
    background-color: #333;
`;

const MarkdownInput: React.FC<MarkdownInputProps> = ({ value, onChange }) => {
    return (
        <InputContainer>
            <StyledTextArea value={value} onChange={onChange} />
        </InputContainer>
    );
};

export default MarkdownInput;
