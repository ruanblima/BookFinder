import React, { useState } from 'react';
import { Modal, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import ButtonGlobal from '~/shared/components/ButtonGlobal';
import ModalOptionsCamera from '../../components/ModalOptionsCamera';
import Input from '~/shared/components/Input';
import RadioButtonList from '~/shared/components/RadioButton/RadioButtonList';

import {
  logoutUserAction,
  saveInformationUserAction,
} from '~/shared/store/ducks/user/actions';

import { ApplicationState } from '~/shared/store';
import { GenderProps, LIST_GENDERS } from '../../constants';

import validationSchema from './validations';
import { mask } from '~/modules/profile/utils';

import * as S from './styles';

interface DataProps {
  imageProfile: string;
  email: string;
  password: string;
  name: string;
  birthDate: string;
  confirmNewPassword: string;
  gender: GenderProps;
}

const Profile: React.FC = () => {
  const { currentUser } = useSelector((state: ApplicationState) => state.user);

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [showGender, setShowGender] = useState(false);

  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutUserAction());
  };

  const saveInformationUser = (dataForm: DataProps, actions: any) => {
    dispatch(
      saveInformationUserAction({
        imageProfile: dataForm.imageProfile,
        name: dataForm.name,
        email: dataForm.email,
        birthDate: dataForm.birthDate,
        password: dataForm.password,
        gender: dataForm.gender,
      }),
    );
    actions.resetForm({ values: dataForm });
    Alert.alert('Informações salvas');
  };

  const { handleSubmit, dirty, handleChange, setFieldValue, values, errors } =
    useFormik({
      initialValues: {
        imageProfile: currentUser.imageProfile,
        name: currentUser.name,
        email: currentUser.email,
        birthDate: currentUser.birthDate,
        password: currentUser.password,
        confirmNewPassword: currentUser.password,
        gender: currentUser.gender,
      },
      validationSchema,
      onSubmit: saveInformationUser,
      validateOnChange: false,
    });

  const setNewImage = (path: string) => {
    setFieldValue('imageProfile', path);
    setModalIsVisible(false);
  };

  return (
    <S.Container>
      <S.ContainerImage>
        <S.Touchable onPress={() => setModalIsVisible(true)}>
          {values.imageProfile ? (
            <S.Image source={{ uri: values.imageProfile }} />
          ) : (
            <S.IconPerson />
          )}
          <S.ContainerIcon>
            <S.IconEdit />
          </S.ContainerIcon>
        </S.Touchable>
      </S.ContainerImage>

      <S.Form>
        <S.ContainerInput>
          <Input
            iconLeft="tooltip-account"
            placeholder="Digite seu nome"
            value={values.name}
            onChangeText={handleChange('name')}
            error={errors.name}
          />
        </S.ContainerInput>

        <S.ContainerInput>
          <Input
            iconLeft="tooltip-account"
            placeholder="Digite sua data de nascimento"
            value={values.birthDate}
            onChangeText={(value) => {
              setFieldValue('birthDate', value ? mask.birthdate(value) : value);
            }}
            error={errors.birthDate}
          />
        </S.ContainerInput>

        <S.ContainerSelect>
          <S.IconSelect name="tooltip-account" />
          <S.Select>
            <S.HeaderSelect>
              <S.GenderSelected>
                {values.gender ? values.gender.label : 'Selecione o gênero'}
              </S.GenderSelected>
              <S.Button onPress={() => setShowGender(!showGender)}>
                <S.IconSelect
                  name={showGender ? 'chevron-up' : 'chevron-down'}
                  type="ionicons"
                  iconShow
                />
              </S.Button>
            </S.HeaderSelect>
            {showGender && (
              <RadioButtonList
                selected={values.gender}
                checkRadio={(value) => {
                  setFieldValue('gender', value);
                  setShowGender(false);
                }}
                data={LIST_GENDERS}
              />
            )}
          </S.Select>
        </S.ContainerSelect>

        <S.ContainerInput>
          <Input
            iconLeft="email"
            placeholder="Digite seu email"
            value={values.email}
            onChangeText={handleChange('email')}
            error={errors.email}
          />
        </S.ContainerInput>

        <S.ContainerInput>
          <Input
            iconLeft="lock"
            placeholder="Digite sua senha"
            value={values.password}
            onChangeText={handleChange('password')}
            error={errors.password}
          />
        </S.ContainerInput>

        {values.password !== currentUser.password && (
          <S.ContainerInput>
            <Input
              iconLeft="lock"
              placeholder="Confirme sua senha"
              value={values.confirmNewPassword}
              onChangeText={handleChange('confirmNewPassword')}
              error={errors.confirmNewPassword}
            />
          </S.ContainerInput>
        )}
      </S.Form>

      <S.ContainerButtons>
        <S.ContainerButton>
          <ButtonGlobal
            disabled={!dirty}
            action={() => handleSubmit()}
            title="SALVAR"
          />
        </S.ContainerButton>

        <S.ContainerButton>
          <ButtonGlobal
            buttonType="outline"
            action={() => logout()}
            title="DESCONECTAR"
          />
        </S.ContainerButton>
      </S.ContainerButtons>
      <Modal
        transparent
        visible={modalIsVisible}
        onRequestClose={() => setModalIsVisible(true)}>
        <ModalOptionsCamera
          closeModal={() => setModalIsVisible(false)}
          setNewImage={setNewImage}
        />
      </Modal>
    </S.Container>
  );
};

export default Profile;
