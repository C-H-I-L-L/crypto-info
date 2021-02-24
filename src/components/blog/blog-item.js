import React from 'react';
import { Link } from 'react-router-dom';
import striptags from 'striptags';
import Truncate from 'react-truncate';

const BlogItem = (props) => {
  const {
    id,
    content,
    title,
  } = props.blogItem;

  return (
    <div>
      <Link to={`/blogPost/${id}`}>
        <h1>{title}</h1>
      </Link>
      <div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Truncate
          lines={3}
          ellipsis={
            <span>
              ...<Link to={`/blogPost/${id}`}>Read More</Link>
            </span>
          }
        >
          {striptags(content)}
        </Truncate>
      </div>
    </div>
  );
};

export default BlogItem;
