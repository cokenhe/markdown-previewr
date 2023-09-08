import React from "react";
import styled from "styled-components";
import "./markdown-guide.css";

const GuideContainer = styled.div`
    padding: 1rem;
    border-radius: 5px;
    background-color: #333;
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: auto;
`;

const Modal = styled.div`
    background-color: white;
    padding: 1rem;
    border-radius: 5px;
    width: 75%;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1rem;

    th,
    td {
        padding: 0.5rem;
        text-align: left;
        border: 1px solid #ddd;
    }

    th {
        background-color: #333;
    }

    code {
        color: #333;
        background-color: #ddd;
        padding: 0.2rem 0.4rem;
        border-radius: 3px;
    }
`;

const StyledLink = styled.a`
    color: #fff;
    background-color: #333;
    padding: 5px 10px;
    border-radius: 5px;

    :hover {
        background-color: #fff;
        color: #333;
    }
`;

interface MarkdownGuideProps {
    dismiss: () => void;
}

const MarkdownGuide: React.FC<MarkdownGuideProps> = ({ dismiss }) => {
    return (
        <Overlay onClick={dismiss}>
            <Modal onClick={(e) => e.stopPropagation()}>
                <GuideContainer>
                    <Table>
                        <thead>
                            <tr>
                                <th>Markdown Code</th>
                                <th>Preview HTML Element</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <code># Heading 1</code>
                                </td>
                                <td>
                                    <h1 className="demo-text">
                                        Creates a top-level heading
                                    </h1>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <code>## Heading 2</code>
                                </td>
                                <td>
                                    <h2 className="demo-text">
                                        Creates a second-level heading
                                    </h2>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <code>### Heading 3</code>
                                </td>
                                <td>
                                    <h3 className="demo-text">
                                        Creates a third-level heading
                                    </h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <code>**Bold text**</code>
                                </td>
                                <td>
                                    <b>Makes text bold</b>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <code>*Italicized text*</code>
                                </td>
                                <td>
                                    <i>Makes text italicized</i>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <code>[link text](URL)</code>
                                </td>
                                <td>
                                    <StyledLink href="/">
                                        Creates a hyperlink
                                    </StyledLink>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <code>- list item</code>
                                </td>
                                <td>
                                    <ul>
                                        <li>Creates a bullet point</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <code>1. list item</code>
                                </td>
                                <td>
                                    <ol>
                                        <li>Creates a numbered list item</li>
                                    </ol>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <code>`Inline code`</code>
                                </td>
                                <td>
                                    <code>Formats text as Inline code</code>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <code>```Code block```</code>
                                </td>
                                <td>
                                    <code>Formats text as a code block</code>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <p>
                        Please find more guide in{" "}
                        <StyledLink href="https://github.com/tanabe/markdown-live-preview">
                            Markdown Guide
                        </StyledLink>
                    </p>
                </GuideContainer>
            </Modal>
        </Overlay>
    );
};

export default MarkdownGuide;
