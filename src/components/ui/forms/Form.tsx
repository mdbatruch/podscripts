import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import { BLUE } from "styles/color";
import Button, { ButtonProps, ButtonType } from "../Button";
import InputText, { InputTextProps } from "./InputText";
import InputTextArea, { InputTextAreaProps } from "./InputTextArea";

/**
 * TODO - add input types
 */
type FormInputs = 'text' | 'textarea' | 'password';

type FormConfig = { type: FormInputs | ButtonType; settings: InputTextProps | InputTextAreaProps | ButtonProps}


/**
 * Have FormData interface dynamic indexing so when you add
 * new items to the forms it will update accordingly
 */
interface FormData {
    [key: string]: string;
}

interface FormProps {
    inputs: FormConfig[];
}

const Form = ({ inputs }: FormProps) => {

    const [formData, setFormData] = useState<FormData>({});
  
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        /**
         * TODO - handle formData
         */
        console.log('formData', formData);
    
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;

        setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value
        }));
    }


    const fields = useMemo(() => {

        /**
         * TODO - clean this up
         */
        return inputs.map(input => {

            console.log('type', input.type)
            if (input.type === 'text' || input.type == 'password') {
                
                const settings = input.settings as InputTextProps;

                return (                    
                    <InputText
                        key={`text-${settings.name}`}
                        type={input.type}
                        label={settings.label}
                        name={settings.name}
                        placeholder={settings.placeholder}
                        icon={settings.icon}
                        onChange={handleInputChange}
                        value={`formData.${settings.name}`}
                    />
                )
              }
              else if (input.type === 'textarea') {

                const settings = input.settings as InputTextAreaProps;

                return (
                    <InputTextArea
                        key={`textarea-${settings.name}`}
                        name={settings.name}
                        placeholder={settings.placeholder}
                        height={100}
                        onChange={handleInputChange}
                        value={formData.message}
                    />
                )
              } 
              else if (input.type === 'submit') {

                const settings = input.settings as ButtonProps;

                console.log('setting', settings);

                return (
                    <Button 
                        key={`button-${settings.label}`}
                        type={input.type}
                        label={settings.label}
                        backgroundColor={BLUE}
                        icon={!!settings.icon ? settings.icon : null}
                        reverse={settings.reverse}
                        fullWidth={settings.fullWidth}
                    />
                )
              } else {
                return null;
              }
        }
        );
    }, [inputs]);

    return (
        <form onSubmit={handleSubmit}>
            <>
            {fields}
            </>
        </form>
    )

}

export default Form;