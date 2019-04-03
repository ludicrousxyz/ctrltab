import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default () => (
  <React.Fragment>
    <article className="message">
      <div className="message-header" style={{ backgroundColor: '#ff6600' }}>
        <div className="has-text-centered message-title">
          <span className="is-pulled-left">
            <FontAwesomeIcon icon="info-circle" size="sm" />
          </span>
          <span>Hacker News</span>
          <span className="is-pulled-right">
            <FontAwesomeIcon icon="sync" size="sm" />
          </span>
        </div>
      </div>
      <div className="message-body">
        { Array.from({length: 10}).map((a, i) => (
          <div className="item" key={i}>
            <div className="title has-text-white is-6">Hi</div>
            <div className="subtitle has-text-white is-7">Hello</div>
            <hr />
          </div>
        )) }
      </div>
    </article>
    <style jsx>
      {`
        .message-title {
          width: 100%;
          text-transform: uppercase;
        }

        .message {
          height: 95vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          padding: 1em 0.5em;
          background-color: rgba(0, 0, 0, 0);
        }

        .message-body {
          height: 100%;
          overflow: hidden;
          background-color: #111111;
          padding: 0.5em;
        }

        .item {
          color: #ffffff;
        }

        .message-body:hover {
          overflow-y: auto;
        }

        .message-body::-webkit-scrollbar {
          width: 10px;
        }

        .message-body::-webkit-scrollbar-thumb {
          background: #444;
          border-radius: 20px;
        }

        .message-body::-webkit-scrollbar-track {
          background: #333;
          border-radius: 20px;
        }
      `}
    </style>
  </React.Fragment>
);
