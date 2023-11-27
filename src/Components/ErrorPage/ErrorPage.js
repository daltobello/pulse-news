import "./ErrorPage.css"
import {Link, useNavigate} from "react-router-dom"
import PropTypes from 'prop-types';

function ErrorPage({serverError, notFoundMessage}) {
  const navigate = useNavigate()
  
  const resetURL = () => {
      navigate(-1)
  }

  return (
      <div className="error">
        {serverError ? (
          <p className="server-error-message">{`Oh no! ${serverError}. The server is down. Please try again later.`}</p>
        ) : (
          <>
          <p className="erroneous-url-message">{notFoundMessage}</p>
          <Link to={"/"} onClick={() => {resetURL()}} className="home-link">
              <button className="return-button">Reset</button>
          </Link>
          </>
        )}
      </div>
  )
}
export default ErrorPage

ErrorPage.propTypes = {
    serverError: PropTypes.string,
    notFoundMessage: PropTypes.string,
  }