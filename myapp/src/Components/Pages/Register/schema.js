import * as yup from "yup"

export const  schema = yup.object().shape({
    firstName: yup.string().firstName().required(),
    lastName: yup.string().lastName().required(),
    email: yup.string().email().required(),
    password: yup.string().required()
})