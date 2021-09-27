import Yup from '~/shared/utils/yup';

const validationSchema = Yup.object().shape({
  imageProfile: Yup.string().label('Image'),

  name: Yup.string().required().label('Nome'),

  email: Yup.string().email('Email inválido').required().label('Email'),

  birthDate: Yup.string().required().label('Data de Nascimento'),

  password: Yup.string()
    .min(6, 'minCharacters')
    .required('required_field')
    .label('Senha'),

  confirmNewPassword: Yup.string()
    .min(6, 'minCharacters')
    .required()
    .oneOf([Yup.ref('password'), null], 'As senhas estão diferentes'),
});

export default validationSchema;
