import PropTypes from 'prop-types';

const Container = ({children}) => {
    return (
        <div className="max-w-[2520px] lg:px-10 md:px-4 sm:px-2 px-4 mx-auto" >
            {children}
        </div>
    );
};

export default Container;
Container.propTypes = {
    children : PropTypes.object
}