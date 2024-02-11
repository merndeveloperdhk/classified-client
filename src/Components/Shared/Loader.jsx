import { ScaleLoader
} from 'react-spinners'
import PropTypes from 'prop-types';

const Loader = ({ smallHeight }) => {
  return (
    <div
      className={` ${smallHeight ? 'h-[250px]' : 'h-[70vh]'}
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
      <ScaleLoader
   size={100} color='red' />
    </div>
  )
}

export default Loader
Loader.propTypes = {
    smallHeight:PropTypes.object
}