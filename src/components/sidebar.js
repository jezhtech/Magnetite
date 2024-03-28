import React from 'react'

function Sidebar() {
  return (
    <div className="sidebar">

<nav className="navbar bg-body-tertiary py-2 border-bottom">
  <div class="container-fluid p-0">
  <a className="navbar-brand px-4 me-4 " href="#">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-box-fill m-1" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z"/>
</svg>
      <span className="fw-semibold m-1">Magnetite</span>
    </a>
  </div>
</nav>
              <div class="accordion accordion-flush bg-body-tertiary" id="accordionPanelsStayOpenExample">
  <div class="accordion-item bg-body-tertiary px-1 py-1">
  
    <h2 class="accordion-header text-black bg-none">

      <button class="accordion-button text-black shadow-none bg-body-secondary rounded-2 " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">

      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-house-gear-fill me-2" viewBox="0 0 16 16">
  <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708z"/>
  <path d="M11.07 9.047a1.5 1.5 0 0 0-1.742.26l-.02.021a1.5 1.5 0 0 0-.261 1.742 1.5 1.5 0 0 0 0 2.86 1.5 1.5 0 0 0-.12 1.07H3.5A1.5 1.5 0 0 1 2 13.5V9.293l6-6 4.724 4.724a1.5 1.5 0 0 0-1.654 1.03"/>
  <path d="m13.158 9.608-.043-.148c-.181-.613-1.049-.613-1.23 0l-.043.148a.64.64 0 0 1-.921.382l-.136-.074c-.561-.306-1.175.308-.87.869l.075.136a.64.64 0 0 1-.382.92l-.148.045c-.613.18-.613 1.048 0 1.229l.148.043a.64.64 0 0 1 .382.921l-.074.136c-.306.561.308 1.175.869.87l.136-.075a.64.64 0 0 1 .92.382l.045.149c.18.612 1.048.612 1.229 0l.043-.15a.64.64 0 0 1 .921-.38l.136.074c.561.305 1.175-.309.87-.87l-.075-.136a.64.64 0 0 1 .382-.92l.149-.044c.612-.181.612-1.049 0-1.23l-.15-.043a.64.64 0 0 1-.38-.921l.074-.136c.305-.561-.309-1.175-.87-.87l-.136.075a.64.64 0 0 1-.92-.382ZM12.5 14a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
</svg>
        <span class="fw-semibold ">Dashboard</span>
        
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show bg-body-tertiary">
      <div class="accordion-body bg-body-tertiary rounded-3 p-0">
      <ul className="nav flex-column fw-medium py-0">

            <li className="nav-item py-2">
              <a className="nav-link text-dark d-flex align-items-center border-5 border-start border-dark gap-2 bg-light rounded-end" href="#">
                Orders
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark d-flex align-items-center gap-2" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark d-flex align-items-center gap-2" href="#">
                Customers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark d-flex align-items-center gap-2" href="#">
                Reports
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark d-flex align-items-center gap-2" href="#">
                Integrations
              </a>
            </li>
          </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item bg-body-tertiary px-1 py-1">
    <h2 class="accordion-header">
      <button class="accordion-button shadow-none bg-body-tertiary collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse show bg-body-tertiary">
      <div class="accordion-body bg-body rounded-3">
      <ul className="nav flex-column py-0">

            <li className="nav-item ">
              <a className="nav-link text-dark d-flex align-items-center border-5 border-start border-dark gap-2 bg-light rounded-end" href="#">
                Orders
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark d-flex align-items-center gap-2" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark d-flex align-items-center gap-2" href="#">
                Customers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark d-flex align-items-center gap-2" href="#">
                Reports
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark d-flex align-items-center gap-2" href="#">
                Integrations
              </a>
            </li>
          </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item bg-body-tertiary px-1 py-1">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed shadow-none bg-body-tertiary" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
    <div class="accordion-body bg-body rounded-3">
      <ul className="nav flex-column py-0">

            <li className="nav-item ">
              <a className="nav-link text-dark d-flex align-items-center border-5 border-start border-dark gap-2 bg-light rounded-end" href="#">
                Orders
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark d-flex align-items-center gap-2" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark d-flex align-items-center gap-2" href="#">
                Customers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark d-flex align-items-center gap-2" href="#">
                Reports
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark d-flex align-items-center gap-2" href="#">
                Integrations
              </a>
            </li>
          </ul>
      </div>
    </div>
  </div>
</div>
</div>






  )
}

export default Sidebar
