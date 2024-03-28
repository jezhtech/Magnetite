import React from 'react'
function Navbar() {
  return (
    
    
      <div>
      <nav className="navbar bg-body-tertiary border-bottom py-2">
  <div className="container-fluid p-0">

  
      <ul className="nav px-2">
        
        <li className="nav-item">
          <div class="d-flex bg-body-secondary rounded-3 p-1">
          <input type="text" className="form-control shadow-none border-0 bg-body-secondary" placeholder="Search "/>
          <a className="btn border-0 shadow-0 bg-body-secondary">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
          </a>
          </div>

        </li>
      </ul>

      <ul className="navbar-nav ms-auto mx-3">
        <li className="nav-item bg-body-secondary rounded-3 px-3">
          <a className="nav-link" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-check" viewBox="0 0 16 16">
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
  <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
</svg>
            <span className="fw-semibold ms-1">Admin</span>
          </a>
        </li>

      </ul>
      
    
  </div>
</nav>


      </div>
  


  )

}

export default Navbar
