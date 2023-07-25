import styled from "styled-components";
import { Menu as MenuIcon } from "@mui/icons-material";

const MenuIconContainer = styled.div`
    @media screen and (min-width:768px) {
        display: none;
    }
`;

const ToggleIcon = (props: any) => {

    return (
        <MenuIconContainer>
            <MenuIcon onClick={() => props.sidebarToggle()} />
        </MenuIconContainer>
    );
};

export default ToggleIcon;