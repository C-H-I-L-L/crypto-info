import React, { Component } from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  RedditShareButton,
  FacebookIcon,
  LinkedinIcon,
  RedditIcon,
  TwitterIcon,
} from 'react-share';

// un-used icons from react-share package
// GooglePlusShareButton,
// TelegramShareButton,
// WhatsappShareButton,
// PinterestShareButton,
// VKShareButton,
// OKShareButton,
// TumblrShareButton,
// LivejournalShareButton,
// MailruShareButton,
// ViberShareButton,
// WorkplaceShareButton,
// EmailShareButton,
// EmailIcon,
// FacebookMessengerIcon,
// InstapaperIcon,
// LineIcon,
// LivejournalIcon,
// MailruIcon,
// OKIcon,
// PinterestIcon,
// PocketIcon,
// TelegramIcon,
// TumblrIcon,
// ViberIcon,
// VKIcon,
// WeiboIcon,
// WhatsappIcon,
// WorkplaceIcon,

export default function Share() {
  const currentUrl = window.location.href;
  console.log(currentUrl);
  return (
    <>
      <FacebookShareButton url={currentUrl}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <LinkedinShareButton url={currentUrl}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>

      <TwitterShareButton url={currentUrl}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <RedditShareButton url={currentUrl}>
        <RedditIcon size={32} round />
      </RedditShareButton>
    </>
  );
}
