// rafce === to create function titled the same as file.
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title }) => {
  return (
    <header className='header'>
      <h1>{title}</h1> 
      <Button color='green' text='Add' />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Manager',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
