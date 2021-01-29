import * as yup from 'yup'

export default yup.object().shape({
    name: yup
        .string()
        .required('Name is required.')
        .min(2, 'Must have at least 2 characters in the "name" field.'),
    size: yup
        .string()
        .oneOf(['8"', '10"', '12"'], 'You must pick a pizza size.'),
    pepperoni: yup
        .boolean(),
    bacon: yup
        .boolean(),
    anchovies: yup
        .boolean(),
    pineapple: yup
        .boolean(),
    chicken: yup
        .boolean(),
    sausage: yup
        .boolean(),
    instructions: yup
        .string(),
})