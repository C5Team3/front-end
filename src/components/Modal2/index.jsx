import React from "react";
import ReactDOM from "react-dom";
// eslint-disable-next-line import/no-cycle
import PlaylistItemDark from "../PlaylistItemDark";
import { StyledModal, StyledModalContainer } from "./style";
import PlaylistTitle from "../PlayListTitle/index";

const Modal2 = (props) => {
  if (!props.modalOn) {
    return null;
  }

  return ReactDOM.createPortal(
    <StyledModalContainer>
      <StyledModal>
        <button
          className="buttonClose"
          onClick={props.closeModal}
          type="button"
        >
          x
        </button>
        <PlaylistItemDark />
        <h5>Add to</h5>
        <div className="playlistQueue">
          <PlaylistTitle />
          <PlaylistTitle />
          <PlaylistTitle />
          <PlaylistTitle />
          <PlaylistTitle />
          <PlaylistTitle />
          <PlaylistTitle />
          <PlaylistTitle />
          <PlaylistTitle />
          <PlaylistTitle />
          <PlaylistTitle />
          <PlaylistTitle />
          <PlaylistTitle />
          <PlaylistTitle />
          <PlaylistTitle />
          <PlaylistTitle />
          <PlaylistTitle />
          <PlaylistTitle />
          <PlaylistTitle />
          <PlaylistTitle />
          <PlaylistTitle />
          <PlaylistTitle />
          <PlaylistTitle />
          <PlaylistTitle />
          <PlaylistTitle />
          <PlaylistTitle />
          <PlaylistTitle />
        </div>
      </StyledModal>
    </StyledModalContainer>,
    document.getElementById("modalPlaylist")
  );
};

export default Modal2;
