import PropTypes from "prop-types";

export const articleType = {
  author: PropTypes.string,
  categories: PropTypes.array,
  content: PropTypes.any,
  dateCreated: PropTypes.string,
  id: PropTypes.string,
  index: PropTypes.number,
  isSpecial: PropTypes.bool,
  link: PropTypes.oneOf([null, "string"]),
  photo: PropTypes.string,
  title: PropTypes.string,
}