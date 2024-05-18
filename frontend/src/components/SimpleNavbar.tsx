import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
  headerName: string;
};

const SimpleNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackButton = styled(Link)`
  position: absolute;
  left: 2rem;
`;

const SimpleNavbar = ({ headerName }: Props) => {
  return (
    <SimpleNav>
      <BackButton to="/">
        <span className="material-symbols-rounded">arrow_back_ios</span>
      </BackButton>
      <h2>{headerName}</h2>
    </SimpleNav>
  );
};

export default SimpleNavbar;
