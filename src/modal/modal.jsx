import React from "react";
import "./modal.css";

export default class Modal extends React.Component {
  state = {
    isOpened: false,
  };

  render() {
    return (
      <>
        <button onClick={() => this.setState({ isOpened: true })}>
          Open model
        </button>
        {this.state.isOpened && (
          <div className={`modal`}>
            <div className={`modal-body`}>
              <h1>Modal window</h1>
              <button onClick={() => this.setState({ isOpened: false })}>
                Close modal
              </button>
            </div>
          </div>
        )}
      </>
    );
  }
}
