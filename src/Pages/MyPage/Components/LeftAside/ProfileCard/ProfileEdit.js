import React from "react";
import { KakaoIcon } from "../../../../SignUp/SocialIcons";
import styled from "styled-components";
import { Icon, Avatar } from '@class101/ui';

function ProfileEdit() {
  return (
    <ProfileEditContainer>
      <ProfileImageContainer>
        <Avatar
          size={64}
          src={"/images/profileImg.png"}
          icon={<Icon.Edit size={12} />}
        />
      </ProfileImageContainer>
      <ProfileName>배정규<KakaoIcon /></ProfileName>
      <ProfileEmail>bae_jk@kakao.com</ProfileEmail>
    </ProfileEditContainer>
  );
}

const ProfileEditContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px;
  margin-top: 40px;

  .sc-fzqOul {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(248, 248, 249);
    width: 20px;
    height: 20px;
    border-radius: 17.6px;

    svg {
      width: 12px;
      height: 12px;
    }
  }
`;
const ProfileImageContainer = styled.span`
  margin-bottom: 8px;
`;
const ProfileName = styled.h4`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: rgb(27, 28, 29);
  font-weight: bold;
  line-height: 24px;

    svg {
      width: 18px;
    }
`;
const ProfileEmail = styled.div`
  font-size: 11px;
  line-height: 16px;
  color: rgb(133, 138, 141);
  margin-top: 2px;
`;

export default ProfileEdit;