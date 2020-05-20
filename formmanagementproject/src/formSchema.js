import * as yup from 'yup'

const formSchema = yup.object().shape({
  name: yup.string()
    .required('Name is a required field'),
  email: yup.string()
    .email('The email must be a valid email address')
    .required('Email is a required field'),
  password: yup.string().required('Password is a required field'),
//   termsOfService: yup.string().required('Agreeing to terms of service is required'),
})

export default formSchema