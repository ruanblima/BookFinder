import React, { useState } from 'react';
import { Modal } from 'react-native';
import ModalOptionsCamera from '../../components/ModalOptionsCamera';

import * as S from './styles';

const Profile: React.FC = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [imageProfile, setImageProfile] = useState('');

  const setNewImage = (path: string) => {
    setImageProfile(path);
    setModalIsVisible(false);
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
