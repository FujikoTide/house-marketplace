import PropTypes from 'prop-types'

function DeleteIcon({ fill, width = '24', height = '24', onClick }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      fill={fill}
      viewBox='0 0 24 24'
      onClick={onClick}
    >
      <path d='M0 0h24v24H0z' fill='none' />
      <path d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z' />
    </svg>
  )
}

DeleteIcon.propTypes = {
  fill: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  onClick: PropTypes.func,
}
export default DeleteIcon
