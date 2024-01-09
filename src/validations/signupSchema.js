import {object, string, ref} from 'yup'

export let signupSchema = object({
    email: string()
        .required({"empty_email": "Por favor, indica tu email"})
        .email({"invalid_email":"El formato de email no es válido"}),
    password: string()
     .required({"empty_password":"Por favor, indica tu contraseña"})
     .min(6, {"invalid_password":"La contraseña debe tener 6 caracteres como mínimo"}),
    confirmPassword: string()
        .required({"invalid_confirm_password":"Por favor, confirma la contraseña"})
        .oneOf([ref('password'), null], {"invalid_match_password":"Las contraseñas deben ser iguales"}),
})