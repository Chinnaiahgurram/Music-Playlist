import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const SongsContainer = props => {
  const {eachDetails, onClickDeleteSong} = props
  const {id, imageUrl, name, genre, duration} = eachDetails

  const onclickButton = () => {
    onClickDeleteSong(id)
  }

  return (
    <li key={id} className="item">
      <div className="total-container">
        <div className="img-names-container">
          <img src={imageUrl} alt="track" className="image" />
          <div className="names-container">
            <p className="name">{name}</p>

            <p className="genre">{genre}</p>
          </div>
        </div>
        <div className="duration-and-delete-container">
          <p className="duration">{duration}</p>
          <button
            type="button"
            className="delete-icon"
            data-testid="delete"
            onClick={onclickButton}
          >
            <AiOutlineDelete />
          </button>
        </div>
      </div>
    </li>
  )
}

export default SongsContainer
