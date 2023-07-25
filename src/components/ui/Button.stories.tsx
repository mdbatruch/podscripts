import Button from "./Button"
import { BLUE, WHITE } from "styles/color";
import PlusIcon from "./icons/PlusIcon";

export default {
    title: 'Buttons',
    component: Button
}

export const defaultButton = {
    args: {
        label: 'Click Here',
        backgroundColor: BLUE,
        rounded: false
    }
};

export const defaultRoundedButton = {
    args: {
        label: 'Click Here',
        backgroundColor: BLUE,
        rounded: true
    }
};

export const defaultButtonWithIcon = {
    args: {
        label: 'Click Here',
        backgroundColor: BLUE,
        icon: <PlusIcon height={20} width={20} fill={`${WHITE}`} />
    }
};