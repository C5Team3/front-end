import React from "react";
import {
  FavoritesCard,
  PlaylistCard,
  NewPlaylistCard,
} from "../../components/Cards";
import Header from "../../components/Header";
import {
  MainContainer,
  PageContainer,
} from "../../containers/LayoutContainers";
import { TopBar } from "../Globals/GlobalStyle";
import { YourPlaylistsBox, NewAndFavoritesBox, PlaylistsBox } from "./style";

const PlaylistList = () => {
  return (
    <PageContainer>
      <TopBar>
        <Header />
      </TopBar>
      <MainContainer>
        <YourPlaylistsBox>
          <h1>Your playlists</h1>
        </YourPlaylistsBox>
        <NewAndFavoritesBox>
          <NewPlaylistCard />
          <FavoritesCard />
        </NewAndFavoritesBox>
        <PlaylistsBox>
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
        </PlaylistsBox>
      </MainContainer>
    </PageContainer>
  );
};

export default PlaylistList;
