import { NavPageItem } from "./core/navigation/NavPageItem";
import { TestId } from "../enums/testing";

import { MenuItems } from "enums/menuItems";

 const Nav = () => {
    return (
        <div data-testid={TestId.NAV_CONTAINER}>
            {Object.values(MenuItems).map((item) => {
                return (
                    <NavPageItem key={item.label} to={item.url}>
                        {item.label}
                    </NavPageItem>
                );
            })}
        </div>
    );
 }

export default Nav;