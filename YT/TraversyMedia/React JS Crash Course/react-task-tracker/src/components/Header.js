import PropTypes from 'prop-types';
import Button from './Button';


const Header = ({ title, onAdd, showAddTask }) => {
    return (
        <header className='header'>
            <h1> {title}</h1>
            <Button text={showAddTask?'Close':'Add'} onClick={onAdd} />
        </header>
    );
};

Header.defaultProps = {
    title: 'Task tracker',
};

Header.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func
};

export default Header;
