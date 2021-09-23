import React, { useState } from 'react';
import { Modal } from 'react-native';
import { useDispatch } from 'react-redux';

import ButtonGlobal from '~/shared/components/ButtonGlobal';
import ModalOptionsCamera from '../../components/ModalOptionsCamera';

import { logoutUserAction } from '~/shared/store/ducks/user/actions';

import * as S from './styles';

const Profile: React.FC = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [imageProfile, setImageProfile] = useState('');

  const dispatch = useDispatch();

  const setNewImage = (path: string) => {
    setImageProfile(path);
    setModalIsVisible(false);
  };

  const logout = () => {
    dispatch(logoutUserAction());
  };

  return (
    <S.Container>
      <S.ContainerImage>
        <S.Touchable onPress={() => setModalIsVisible(true)}>
          {imageProfile ? (
            <S.Image source={{ uri: imageProfile }} />
          ) : (
            <S.IconPerson />
          )}
          <S.ContainerIcon>
            <S.IconEdit />
          </S.ContainerIcon>
        </S.Touchable>
      </S.ContainerImage>

      <S.ContainerButton>
        <ButtonGlobal action={() => {}} title="SALVAR" />
      </S.ContainerButton>

      <S.ContainerButton>
        <ButtonGlobal
          buttonType="outline"
          action={() => logout()}
          title="DESCONECTAR"
        />
      </S.ContainerButton>
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
