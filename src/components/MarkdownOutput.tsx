import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

interface MarkdownOutputProps {
    markdown: string;
}

const OutputContainer = styled.div`
    width: 50%;
    background-color: #333;
    overflow: auto;
`;

const MarkdownOutput: React.FC<MarkdownOutputProps> = ({ markdown }) => {
    return (
        <OutputContainer>
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </OutputContainer>
    );
};

export default MarkdownOutput;
