import { DateTime } from 'luxon';

const Footer = () => {
  return (
    <footer className="container">
      <div className="row justify-content-center">
        <div className="col-8">
          <p className="text-center">
            <b>Developed By:</b> <a href="https://www.linkedin.com/in/chibuike-ilo-772ab984/" target='_blank'>Chibuike Ilo</a>
          </p>
        </div>
        <div className="col-8">
          <p className="text-center">
            copyright &copy; 2021 version {DateTime.local().year - 1}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
