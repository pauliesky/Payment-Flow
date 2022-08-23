import './header.css'


function Header({ page, onNext }) {

  return (
    <div>
      <h1>Complete Your Purchase </h1>
      <div className="header-container">
        <div className={`${page === 0 ? "header-container_PersonalInfo" : ""}`} onClick={() => onNext(0)}>
          Personal Info
          {page === 0 && <div className='tag'></div>}
        </div>
        <div className={`${page === 1 ? "header-container_PersonalInfo" : ""}`} onClick={() => onNext(1)}>Billing Info
          {page === 1 && <div className='tag'></div>}
        </div>
        <div className={`${page === 2 ? "header-container_PersonalInfo" : ""}`} onClick={() => onNext(2)}>Confirm Payment
          {page === 2 && <div className='tag'></div>}
        </div>
      </div>

    </div>
  )
}

export default Header;