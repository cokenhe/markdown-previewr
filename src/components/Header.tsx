import styled from "styled-components";

// Define styled container
const HeaderContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #333;
    width: 100wh;
    height: 60px;
    z-index: 1;
    border-bottom: 1px solid #1a1a1a;
`;

// Define styled title
const Title = styled.h1`
    font-size: 2rem;
    color: #ddd;
`;

// Define styled button
const Button = styled.button`
    background-color: #333;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #555;
    }
`;

// Define Header functional component
interface HeaderProps {
    onToggleGuide: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleGuide }) => {
    return (
        <HeaderContainer>
            <Title>Markdown Previewer</Title>
            <Button onClick={onToggleGuide}>Help</Button>
        </HeaderContainer>
    );
};

export default Header;
