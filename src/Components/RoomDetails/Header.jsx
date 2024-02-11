import Heading from "../Shared/Heading";
import PropTypes from 'prop-types'


const Header = ({room}) => {
    return (
        <>
        <Heading title={room.title} subtitle={room.location} />
        <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
          <img
            className='object-cover h-full w-full'
            src={room.image}
            alt='header image'
          />
        </div>
      </>
    );
};

export default Header;
Header.propTypes={
  room:PropTypes.object
}