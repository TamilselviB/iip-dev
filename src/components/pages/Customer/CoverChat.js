import React from 'react';
import {formatDate} from '../../../utils/utils';

function CoverChat({ chat }) {
  const chatAlignment = createdBy => {
    if (createdBy === 'User' && sessionStorage.getItem('usertype') === 'Customer') {
      return true;
    }
    if (createdBy === 'Company' && sessionStorage.getItem('usertype') === 'Insurance Company') {
      return true;
    }

    return false;
  };

  const imageURL = createdBy => {
    if (createdBy === 'Company') {
      return 'https://cdn3.iconfinder.com/data/icons/flat-rounded-2/50/175-512.png';
    }
    return 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-256.png';
  };

  console.log('---------> chat', chat);

  return (
    <div className="card-body">
      <div className="chat-page">
        {chat &&
          chat.length > 0 &&
          chat.map(d => (
            <>
              {chatAlignment(d.createdBy) ? (
                <div className="outgoing-chats">
                  <div className="outgoing-chats-msg">
                    <p>{d.comments}</p>
                    <span className="time-1">{formatDate(d.created)} </span>
                  </div>
                  <div className="outgoing-chats-img">
                    <img alt="insurance" src={imageURL(d.createdBy)} id="img-receive" />
                  </div>
                </div>
              ) : (
                <div className="received-chats">
                  <div className="received-chats-img">
                    <img alt="user" src={imageURL(d.createdBy)} id="img-receive" />
                  </div>
                  <div className="received-msg">
                    <div className="received-msg-inbox">
                      <p>{d.comments} </p>
                      <span className="time-2">{formatDate(d.created)}</span>
                    </div>
                  </div>
                </div>
              )}
            </>
          ))}
      </div>
    </div>
  );
}

export default CoverChat;
