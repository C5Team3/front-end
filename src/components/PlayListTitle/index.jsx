import React from "react";
import {
  StyledPlaylistItemDark,
  StyledSongDescription,
  StyledContainerButton,
} from "./style";
import "../../assets/fonts/coolicons.css";
import Song from "../../assets/images/SongCoverFullPlayer.svg";

const PlaylistTitle = (props) => {
  const {} = props;
  return (
    <StyledContainerButton type="button">
      <StyledPlaylistItemDark>
        <img src={Song} alt="Song Cover" />
        <StyledSongDescription>
          <h6>Playlist title</h6>
        </StyledSongDescription>
      </StyledPlaylistItemDark>
    </StyledContainerButton>
  );
};
export default PlaylistTitle;
