import {s} from './styles'

function FormLabel({htmlFor,label}){

    return(
        <s.FormLabel htmlFor={htmlFor}>
            <s.FormLabelP>{label}</s.FormLabelP>
        </s.FormLabel>
    )
}

export default FormLabel