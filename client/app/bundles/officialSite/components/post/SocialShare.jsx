import React, { PropTypes } from 'react'

const host = "http://localhost:3000"

const SocialShare = ({ slug }) => {
  const url = `${host}/post/${slug}`
  return (
    <div className="shares">
      <div className="share fb">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
          target="_blank"
          title="Share on Facebook">
          <span>分享</span>
        </a>
      </div>
      <div className="share line">
        <a
          href={`https://lineit.line.me/share/ui?url=${url}`}
          target="_blank"
          title="Share on Line">
          <span>分享</span>
        </a>
      </div>
    </div>
  )
}

SocialShare.propTypes = {
  slug    : PropTypes.string.isRequired,
}

export default SocialShare
