import React, { useContext } from "react";
import {
  PageContainer,
  MainContainer,
} from "../../containers/LayoutContainers";
import { TopBar } from "../Globals/GlobalStyle";
import { UserAvatarBox, SettingsButtonsBox } from "./style";
import Header from "../../components/Header";
import {
  ChangePassButton,
  SingOutButton,
  StatsButton,
} from "../../components/Buttons";
import UserCard from "../../components/UserCard";
import { Context } from "../../utils/Context";

const Settings = () => {
  const { setIsAuth } = useContext(Context);
  return (
    <PageContainer>
      <TopBar>
        <Header />
      </TopBar>
      <MainContainer>
        <UserAvatarBox>
          <UserCard />
        </UserAvatarBox>
        <SettingsButtonsBox>
          <ChangePassButton />
          <StatsButton />
          <SingOutButton onClick={() => setIsAuth(false)} />
        </SettingsButtonsBox>
      </MainContainer>
    </PageContainer>
  );
};

export default Settings;
