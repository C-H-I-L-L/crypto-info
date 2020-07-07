import React, { Component } from 'react';
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  EmailShareButton,
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from 'react-share';

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
