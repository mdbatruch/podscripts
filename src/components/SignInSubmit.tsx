import styled from "styled-components";
import { BLUE, WHITE } from "styles/color";
import { Link } from "react-router-dom";
import PlusIcon from "./ui/icons/PlusIcon";
import DoorIcon from "./ui/icons/DoorIcon";
import { SPACE_10 } from "styles/spacing";
import Button from "./ui/Button";


const SignInSubmitContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: ${SPACE_10};
`;

const Submit = () => {
    return (
        <Link to="/submit" style={{ textDecoration: 'none'}}>
            <Button label={'Submit Podcast'} backgroundColor={`${BLUE}`} rounded={true} icon={<PlusIcon height={20} width={20} fill={`${WHITE}`}/>} />
        </Link>
    );
}

const SignIn = () => {

    return (
        <Link to="/loginregister" style={{
            display: 'flex',
            alignItems: 'center',
            color: `${WHITE}`,
            textDecoration: 'none'}}>                    
            <DoorIcon height={20} width={20} fill={`${WHITE}`}/> 
            
            Sign In
        </Link>
    );
}

const SignInSubmit = () => {

    return (
        <SignInSubmitContainer>
            <SignIn />
            <Submit />
        </SignInSubmitContainer>
    );
}

export default SignInSubmit;