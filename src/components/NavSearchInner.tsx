import styled from "styled-components";
import { WHITE } from "styles/color";

const InnerForm = styled.div`
    padding: 20px;
    background-color: ${WHITE};
    box-shadow: 0 7px 0 5px rgba(0,0,0,.2);
    left: 0;
    margin: 0 auto;
    width: 400px;
    right: 0;
    top: 0px;
`;

const NavSearchInner = () => {
    return (
        <InnerForm className="header-search vis-header-search">
            <form className="header-search-form">
                <div className="header-search-left search-cell pod-search">
                    <div className="input-field ">
                        <input type="text" name="search-city-input" placeholder="Type your query" className="form-control search-input" /> 
                        <span className="search-clear-button">
                            <i aria-hidden="true" className="fa fa-times-circle"></i>
                        </span>
                    </div>
                </div> 
            <div className="search-type-selector search-cell">
                <input type="radio" id="rdo1" 
                // checked="checked" 
                name="radio-group" className="radio-input" /> 
                <label className="radio-label">
                    <span className="radio-border"></span>
                    Basic Search
                </label> 
                <input type="radio" id="rdo2" name="radio-group" className="radio-input" />
                <label>
                    <span className="radio-border"></span>Advanced Search
                </label>
            </div> 
            <div className="header-search-mid search-cell">
                <input type="text" placeholder="Select Podcast First" 
                // disabled="disabled" 
                className="search-input" />
            </div> 
            <div className="header-search-end search-cell">
                <button type="submit" 
                // disabled={disabled} 
                className="header-search-button button-disabled">Search</button>
                </div>
            </form>
        </InnerForm>
    );
};

export default NavSearchInner;