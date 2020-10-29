import React from "react";
import { ArtistSearchCard, PlaylistSearchCard } from "../../components/Cards";
import Footer from "../../components/Footer";
<<<<<<< HEAD
import Header from "../../components/Header";
import MinimizedPlayer from "../../components/MinimizedPlayer";
=======
import Header from "../../components/header";
import SearchBar from "../../components/SearchBar";
import MinimizedPlayer from "../../components/minimizedPlayer";
>>>>>>> 35bcb5e809c381139379b02314e25d74291b59fe
import PlaylistItem from "../../components/PlaylistItem";
import {
  MainContainer,
  PageContainer,
} from "../../containers/LayoutContainers";
import { MiniPlayerAndNavContainer, TopBar } from "../Globals/GlobalStyle";
import { SearchBox } from "../Search/style";
import SearchResultsBox from "./style";

const SearchResults = () => {
  return (
    <PageContainer>
      <TopBar>
        <Header />
      </TopBar>
      <MainContainer>
        <SearchBox>
          <SearchBar />
        </SearchBox>
        <h3>Songs</h3>
        <SearchResultsBox>
          <PlaylistItem />
          <PlaylistItem />
          <PlaylistItem />
        </SearchResultsBox>
        <h3>Artists</h3>
        <SearchResultsBox>
          <ArtistSearchCard />
          <ArtistSearchCard />
          <ArtistSearchCard />
          <ArtistSearchCard />
        </SearchResultsBox>
        <h3>Playlists</h3>
        <SearchResultsBox>
          <PlaylistSearchCard />
          <PlaylistSearchCard />
          <PlaylistSearchCard />
          <PlaylistSearchCard />
        </SearchResultsBox>
      </MainContainer>
      <MiniPlayerAndNavContainer>
        <MinimizedPlayer />
        <Footer />
      </MiniPlayerAndNavContainer>
    </PageContainer>
  );
};

export default SearchResults;
