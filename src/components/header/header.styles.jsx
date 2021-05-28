import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

// LogoContainer is a Link, so the link is wrapped in a bracket
export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  
`;

// // We can call a similar style component in another
//  Or share styles among 2 compnents like below
export const OptionLink = styled(Link)`
padding: 10px 15px;
cursor: pointer;
`;
