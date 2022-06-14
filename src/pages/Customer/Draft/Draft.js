import React from 'react';

function Draft() {
  return (
    <div>
      <div className="page-content">
        <div className="container-fluid">
          {/* <!-- Page-Title --> */}
          <div className="row">
            <div className="col-sm-12">
              <div className="page-title-box">
                <h4 className="page-title">Submitted</h4>
              </div>
              {/* <!--end page-title-box--> */}
            </div>
            {/* <!--end col--> */}
          </div>
          {/* <!--end-row-->
            <!-- end page title end breadcrumb --> */}

          <div className="card">
            <div className="card-body">
              <div className="col-lg-12">{/* <Draft /> */}</div>
            </div>
          </div>
        </div>
        {/* <!--end row--> */}
      </div>
      {/* <!-- container --> */}
    </div>
  );
}

export default Draft;
