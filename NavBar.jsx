<nav className={`navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 ${styles.stickyNavbar}`}>
    <div className='container'>
      <Link className = "navbar-brand fw-hold " to ="/">ShopHeX</Link>
      <button
      className='navbar-toggler'
      type='button'
      data-bs-toggle = "collapse"
      data-bs-target = "#navbarContent"
      >
        <span className='navbar-toggler-icon'></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
        <NavLink />
        <Link to = "/cart" className={`btn btn-dark ms-3 rounder-pill position-relative ${styles.responsiveCart}`}>
        <FaCartShopping />
        <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill'style={{fontSize:'0.85rem',padding:'0.5em 0.65em',backgroundColor:'#6050DC'}}
        >
          7

        </span>
        
        
        </Link>

        </div>
      </div>
    </nav>
