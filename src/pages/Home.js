import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return <>
    <section className="home-wapper-1">
      <div className="container-xxl">
        <div className="row py-5">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img src="images/main-banner.jpg" className='img-fluid rounded-3' alt="main-banner" />
              <div className="main-banner-content position-absolute">
                <h4>SUPPERCHARGED FOR PROS</h4>
                <h5>iPad S14+ Pro.</h5>
                <p>From $999.00 or $41.62/mo.</p>
                <Link className='button'> BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6 ">
            <div className="d-flex flex-wrap justify-content-between align-items-center small-banner-display gap-10">
              <div className="small-banner position-relative ">
                <img src="images/catbanner-01.jpg" className='img-fluid rounded-3' alt="small-banner" />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sale</h4>
                  <h5>iPad S14+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img src="images/catbanner-02.jpg" className='img-fluid rounded-3' alt="small-banner" />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sale</h4>
                  <h5>iPad S14+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                </div>
              </div>
               <div className="small-banner position-relative ">
                <img src="images/catbanner-03.jpg" className='img-fluid rounded-3' alt="small-banner" />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sale</h4>
                  <h5>iPad S14+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                </div>
              </div>
               <div className="small-banner position-relative ">
                <img src="images/catbanner-04.jpg" className='img-fluid rounded-3' alt="small-banner" />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sale</h4>
                  <h5>iPad S14+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default Home
