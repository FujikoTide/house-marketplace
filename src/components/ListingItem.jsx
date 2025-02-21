import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import DeleteIcon from '../assets/icon-components/DeleteIcon'
import EditIcon from '../assets/icon-components/EditIcon'
import bedIcon from '../assets/svg/bedIcon.svg'
import bathtubIcon from '../assets/svg/bathtubIcon.svg'

function ListingItem({ listing, id, onEdit, onDelete }) {
  return (
    <li className='categoryListing'>
      <Link
        to={`/category/${listing.type}/${id}`}
        className='categoryListingLink'
      >
        <img
          src={listing.imgUrls[0]}
          alt={listing.name}
          className='categoryListingImg'
        />
        <div className='categoryListingDetails'>
          <p className='categoryListingLocation'>{listing.location}</p>
          <p className='categoryListingName'>{listing.name}</p>

          <p className='categoryListingPrice'>
            $
            {listing.offer
              ? listing.discountedPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              : listing.regularPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            {listing.type === 'rent' && ' / Month'}
          </p>
          <div className='categoryListingInfoDiv'>
            <img src={bedIcon} alt='bed' />
            <p className='categoryListingInfoText'>
              {listing.bedrooms > 1
                ? `${listing.bedrooms} Bedrooms`
                : '1 Bedroom'}
            </p>
            <img src={bathtubIcon} alt='bath' />
            <p className='categoryListingInforText'>
              {listing.bathrooms > 1
                ? `${listing.bathrooms} Bathrooms`
                : '1 Bathroom'}
            </p>
          </div>
        </div>
      </Link>

      {onEdit && <EditIcon className='editIcon' onClick={() => onEdit(id)} />}
      {onDelete && (
        <DeleteIcon
          className='removeIcon'
          fill='rgb(231, 76, 60)'
          onClick={() => onDelete(listing.id, listing.name)}
        />
      )}
    </li>
  )
}

ListingItem.propTypes = {
  listing: PropTypes.object,
  id: PropTypes.string,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
}

export default ListingItem
