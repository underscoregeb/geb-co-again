import Logo from '../logo/logo';
import PropTypes from 'prop-types';
import './logotype.css';

function Logotype({ refresh }) { 
  return (
    <div className="logotype-container">
      <div className="logotype-icon">
        <Logo key={refresh} /> {/* Use refresh as key to force re-render */}
      </div>  
      <p className="logotype-text">The Geb Company</p>
    </div>
  );
}

Logotype.propTypes = {
  refresh: PropTypes.bool.isRequired,
};

export default Logotype;
