import { UIEvent, ReactNode } from "react";
import styled from "styled-components";
import PodScriptsLogo from "./ui/icons/logos/PodScriptsLogo";
import SearchToggle from "./SearchToggle";


const SearchContainer = styled.div`
    padding: 20px;
    display: flex;
    align-items: center;
`;

export interface SearchLogoProps {
    content: ReactNode;
    onClick: (e: UIEvent<HTMLElement>) => void;
}

 const SearchLogo = (props:{bleh: any}) => {
    // const [, setValue] = useState('');

    // const handleChange = (e: any ) => {
    //     if (e.target.value === '') {
    //         return;
    //     }

    //     setValue(e.target.value);
    // }

    return (
        <SearchContainer>
            <PodScriptsLogo />
                {/* <input type="text" placeholder="search" value={value} onChange={handleChange} /> */}
            <SearchToggle bleh={props.bleh}/>
        </SearchContainer>
    );
};

export default SearchLogo;