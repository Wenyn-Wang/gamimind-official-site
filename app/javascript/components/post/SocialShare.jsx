import React from 'react'
import PropTypes from 'prop-types'

const { HOST } = process.env

const SocialShare = ({ slug }) => {
  const url = `${HOST}/post/${slug}`
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
