import React from 'react'
import PropTypes from 'prop-types'

const Title = ({title1, title2, titleStyles, title2Styles, paragraphStyles, paragraph}) => {
  return (
    <div className={`${titleStyles}`}>
        <h4 className="h4 text-secondary">{title1}</h4>
        <h1 className={`${title2Styles} h1 capitalize`}>{title2}</h1>
        <p className={`${paragraphStyles} max-w-lg mt-2`}>
            {
                paragraph? paragraph : "Experience modern living through well-presented properties, professional support, and thoughtfully designed spaces."
            }
        </p>
    </div>
  )
}

Title.propTypes = {}

export default Title