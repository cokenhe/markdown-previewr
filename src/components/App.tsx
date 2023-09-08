import React, { useState } from "react";
import { styled } from "styled-components";
import Header from "./Header";
import MarkdownGuide from "./MarkdownGuide";
import MarkdownInput from "./MarkdownInput";
import MarkdownOutput from "./MarkdownOutput";

const Container = styled.div`
    justify-content: space-between;
    align-items: center;
    background-color: #f2f2f2;
    width: 100vw;
    height: 100vh;
`;

const MarkdownContainer = styled.div`
    display: flex;
    justify-content: space-between;

    height: calc(100vh - 64px);
`;

const App: React.FC = () => {
    const [markdown, setMarkdown] = useState(`# Hello World`);
    const [showGuide, setShowGuide] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMarkdown(event.target.value);
    };

    const handleToggleGuide = () => {
        setShowGuide(!showGuide);
    };

    return (
        <Container>
            <Header onToggleGuide={handleToggleGuide} />
            {showGuide && <MarkdownGuide dismiss={() => handleToggleGuide()} />}
            <MarkdownContainer>
                <MarkdownInput value={markdown} onChange={handleChange} />
                <div style={{ width: "1px", backgroundColor: "#1A1A1A" }} />
                <MarkdownOutput markdown={markdown} />
            </MarkdownContainer>
        </Container>
    );
};

export default App;
