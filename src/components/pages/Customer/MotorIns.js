import React, { Component } from 'react';

class MotorIns extends Component {
  constructor(props) {
    super();
    console.log(props);
    const id = props.location.aboutProps;
    console.log(id);
  }
  render() {
    return (
      <div>
        <div className="page-content">
          <div className="container-fluid">
            {/* <!-- Page-Title --> */}
            <div className="row">
              <div className="col-sm-12">
                <div className="page-title-box">
                  <div className="float-right"></div>
                  <h4 className="page-title">Motor Insurance</h4>
                </div>
                {/* <!--end page-title-box--> */}
              </div>
              {/* <!--end col--> */}
            </div>
            {/* <!-- end page title end breadcrumb --> */}
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <h4 className="mt-0 header-title"></h4>
                    <p className="text-muted mb-3"></p>

                    <form id="form-horizontal" className="form-horizontal form-wizard-wrapper">
                      <h3>Insured Details</h3>
                      <fieldset>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label for="txtFirstNameBilling" className="col-lg-3 col-form-label">
                                Contact Person
                              </label>
                              <div className="col-lg-9">
                                <input
                                  id="txtFirstNameBilling"
                                  name="txtFirstNameBilling"
                                  placeholder="Tamil"
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            {/* <!--end form-group--> */}
                          </div>
                          {/* <!--end col--> */}
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label for="txtLastNameBilling" className="col-lg-3 col-form-label">
                                Mobile No.
                              </label>
                              <div className="col-lg-9">
                                <input
                                  id="txtLastNameBilling"
                                  name="txtLastNameBilling"
                                  placeholder="+91 23456 78910"
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            {/* <!--end form-group--> */}
                          </div>
                          {/* <!--end col--> */}
                        </div>
                        {/* <!--end row--> */}
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label for="txtCompanyBilling" className="col-lg-3 col-form-label">
                                Alternate Contact No.
                              </label>
                              <div className="col-lg-9">
                                <input
                                  id="txtCompanyBilling"
                                  name="txtCompanyBilling"
                                  type="text"
                                  placeholder="+91 35467 78910"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            {/* <!--end form-group--> */}
                          </div>
                          {/* <!--end col--> */}
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label
                                for="txtEmailAddressBilling"
                                className="col-lg-3 col-form-label"
                              >
                                Email Id
                              </label>
                              <div className="col-lg-9">
                                <input
                                  id="txtEmailAddressBilling"
                                  name="txtEmailAddressBilling"
                                  placeholder="abc@gmail.com"
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            {/* <!--end form-group--> */}
                          </div>
                          {/* <!--end col--> */}
                        </div>
                        {/* <!--end row--> */}
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label for="txtAddress1Billing" className="col-lg-3 col-form-label">
                                Address
                              </label>
                              <div className="col-lg-9">
                                <textarea
                                  id="txtAddress1Billing"
                                  name="txtAddress1Billing"
                                  placeholder="Salem"
                                  rows="4"
                                  className="form-control"
                                ></textarea>
                              </div>
                            </div>
                            {/* <!--end form-group--> */}
                          </div>
                          {/* <!--end col--> */}
                          <div className="col-md-6" style={{ display: 'none' }}>
                            <div className="form-group row">
                              <label for="txtAddress2Billing" className="col-lg-3 col-form-label">
                                Warehouse Address
                              </label>
                              <div className="col-lg-9">
                                <textarea
                                  id="txtAddress2Billing"
                                  name="txtAddress2Billing"
                                  rows="4"
                                  className="form-control"
                                ></textarea>
                              </div>
                            </div>
                            {/* <!--end form-group--> */}
                          </div>
                          {/* <!--end col--> */}
                        </div>
                        {/* <!--end row--> */}
                        <div className="row" style={{ display: 'none' }}>
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label for="txtCityBilling" className="col-lg-3 col-form-label">
                                Company Type
                              </label>
                              <div className="col-lg-9">
                                <input
                                  id="txtCityBilling"
                                  name="txtCityBilling"
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label
                                for="txtStateProvinceBilling"
                                className="col-lg-3 col-form-label"
                              >
                                Live Market A/C
                              </label>
                              <div className="col-lg-9">
                                <input
                                  id="txtStateProvinceBilling"
                                  name="txtStateProvinceBilling"
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            {/* <!--end form-group--> */}
                          </div>
                          {/* <!--end col--> */}
                        </div>
                        {/* <!--end row--> */}

                        <div className="row" style={{ display: 'none' }}>
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label for="txtTelephoneBilling" className="col-lg-3 col-form-label">
                                Product Category
                              </label>
                              <div className="col-lg-9">
                                <input
                                  id="txtTelephoneBilling"
                                  name="txtTelephoneBilling"
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            {/* <!--end form-group--> */}
                          </div>
                          {/* <!--end col--> */}
                          <div className="col-md-6" style={{ display: 'none' }}>
                            <div className="form-group row">
                              <label for="txtFaxBilling" className="col-lg-3 col-form-label">
                                Product Sub Category
                              </label>
                              <div className="col-lg-9">
                                <input
                                  id="txtFaxBilling"
                                  name="txtFaxBilling"
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            {/* <!--end form-group--> */}
                          </div>
                          {/* <!--end col--> */}
                        </div>
                        {/* <!--end row--> */}
                      </fieldset>
                      {/* <!--end fieldset--> */}

                      <h3>Vehicle Details</h3>
                      <fieldset>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label for="txtFirstNameShipping" className="col-lg-3 col-form-label">
                                Plate Number
                              </label>
                              <div className="col-lg-9">
                                <input
                                  id="txtFirstNameShipping"
                                  name="txtFirstNameShipping"
                                  placeholder=" 3455"
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            {/* <!--end form-group--> */}
                          </div>
                          {/* <!--end col--> */}

                          <div className="col-md-6">
                            <div className="form-group row">
                              <label for="txtFirstNameShipping" className="col-lg-3 col-form-label">
                                Chassis Number
                              </label>
                              <div className="col-lg-9">
                                <input
                                  id="txtFirstNameShipping"
                                  name="txtFirstNameShipping"
                                  placeholder="600132CTZP78900"
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            {/* <!--end form-group--> */}
                          </div>
                          {/* <!--end col--> */}

                          <div className="col-md-6">
                            <div className="form-group row">
                              <label for="txtLastNameShipping" className="col-lg-3 col-form-label">
                                Vehicle Make
                              </label>
                              <div className="col-lg-9">
                                <input
                                  id="txtLastNameShipping"
                                  name="txtLastNameShipping"
                                  placeholder=" TATA Motors"
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            {/* <!--end form-group--> */}
                          </div>
                          {/* <!--end col--> */}
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label
                                for="txtStateProvinceShipping"
                                className="col-lg-3 col-form-label"
                              >
                                Vehicle model
                              </label>
                              <div className="col-lg-9">
                                <input
                                  id="txtStateProvinceShipping"
                                  name="txtStateProvinceShipping"
                                  placeholder="Tata Safari Storme"
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            {/* <!--end form-group--> */}
                          </div>
                          {/* <!--end col--> */}
                        </div>
                        {/* <!--end row--> */}

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label for="txtCompanyShipping" className="col-lg-3 col-form-label">
                                Vehicle variant
                              </label>
                              <div className="col-lg-9">
                                <input
                                  id="txtCompanyShipping"
                                  name="txtCompanyShipping"
                                  type="text"
                                  placeholder="Blue Color"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            {/* <!--end form-group--> */}
                          </div>
                          {/* <!--end col--> */}
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label
                                for="txtEmailAddressShipping"
                                className="col-lg-3 col-form-label"
                              >
                                Currently Registered City
                              </label>
                              <div className="col-lg-9">
                                <input
                                  id="txtEmailAddressShipping"
                                  name="txtEmailAddressShipping"
                                  placeholder="    Salem"
                                  type="text"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            {/* <!--end form-group--> */}
                          </div>
                          {/* <!--end col--> */}
                        </div>
                        {/* <!--end row--> */}

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group row">
                              <label for="txtCityShipping" className="col-lg-3 col-form-label">
                                Vehicle Value
                              </label>
                              <div className="col-lg-4">
                                <select className="form-control">
                                  <option>KWD</option>
                                  <option>USD</option>
                                  <option>AED</option>
                                  <option>EURO</option>
                                  <option>SAR</option>
                                  <option>BHD</option>
                                </select>
                              </div>
                              <div className="col-lg-5">
                                <input
                                  id="txtCompanyShipping"
                                  name="txtCompanyShipping"
                                  type="text"
                                  placeholder="132,000
                                                            "
                                  className="form-control"
                                />
                              </div>
                            </div>
                            {/* <!--end form-group--> */}
                          </div>
                          {/* <!--end col--> */}
                        </div>
                        {/* <!--end row--> */}

                        <div className="container">
                          <div
                            className="row it"
                            style={{
                              marginLeft: '30px',
                            }}
                          >
                            <div
                              className="col-sm-offset-1 col-md-12"
                              id="one"
                              style={{ marginTop: '15px', marginBottom: '10px' }}
                            >
                              <br />
                              <div className="row">
                                <div className="col-sm-offset-4 col-sm-4 form-group">
                                  <label style={{ marginLeft: '12px' }}>Attach Documents</label>
                                </div>
                                {/* <!--form-group--> */}
                              </div>
                              {/* <!--row--> */}
                              <div id="uploader">
                                <div className="row uploadDoc" style={{ height: '30px' }}>
                                  <div
                                    className="col-sm-3
                                                  "
                                  >
                                    <div className="docErr">Please upload valid file</div>
                                    {/* <!--error--> */}
                                    <div className="fileUpload btn btn-orange">
                                      <img
                                        src="https://image.flaticon.com/icons/svg/136/136549.svg"
                                        className="icon"
                                      />
                                      <span className="upl" id="upload">
                                        Upload Document
                                      </span>
                                      <input
                                        type="file"
                                        className="upload up"
                                        id="up"
                                        onchange="readURL(this);"
                                      />
                                    </div>
                                    {/* <!-- btn-orange --> */}
                                  </div>
                                  <div className="col-sm-3">
                                    <input
                                      type="text"
                                      className="form-control"
                                      name=""
                                      placeholder="Note"
                                      style={{
                                        marginTop: '10px',
                                        marginBottom: '20px',
                                      }}
                                    />
                                  </div>
                                  <div className="col-sm-1">
                                    <a className="btn-check">
                                      <i className="fa fa-times"></i>
                                    </a>
                                  </div>
                                  {/* <!-- col-1 --> */}
                                  <label className="col-sm-2" style={{ marginTop: '20px' }}>
                                    Documents to be Attached
                                  </label>
                                  <div className="col-sm-3">
                                    <ul className="list-group">
                                      <li className="list-group-item">Vehicle License</li>
                                      <li className="list-group-item"> Driving License</li>
                                      <li className="list-group-item">Vehicle Photo</li>
                                    </ul>
                                  </div>
                                </div>
                                {/* <!--row--> */}
                              </div>
                              {/* <!--uploader--> */}
                              <div className="text-center">
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                  style={{ width: '90px', height: '40px' }}
                                >
                                  <i className="fa fa-plus"></i>&nbsp;&nbsp;Add{' '}
                                </button>
                              </div>
                            </div>
                            {/* <!--one--> */}
                          </div>
                          {/* <!-- row --> */}
                        </div>
                        {/* <!-- container --> */}

                        <div className="row">
                          <div className="col-md-4">
                            <div className="form-group row">
                              <label for="txtFirstNameBilling" className="col-lg-4 col-form-label">
                                Download
                              </label>
                              &nbsp;&nbsp;
                              <a href="#" style={{ paddingTop: '5px' }}>
                                <u>KYC Information </u>
                              </a>
                            </div>
                          </div>
                        </div>
                      </fieldset>

                      <h3>Insurance Details</h3>
                      <fieldset>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group ">
                              <label for="dropdown" className="col-form-label">
                                Insurance company
                              </label>

                              <div className="col-lg-8">
                                <input
                                  type="text"
                                  value=""
                                  data-role="tagsinput"
                                  placeholder="Type Insurance Company and Enter"
                                />{' '}
                              </div>
                            </div>
                            {/* <!--end form-group--> */}
                          </div>
                          {/* <!--end col--> */}

                          <div className="col-lg-6">
                            <div className="form-group ">
                              <label for="ddlCreditCardType" className=" col-form-label">
                                Type of Insurance
                              </label>
                              <div className="col-lg-8">
                                <input
                                  id="txtCityShipping"
                                  name="txtCityShipping"
                                  type="text"
                                  className=" form-control"
                                  placeholder="Motor Insurance"
                                />
                                <br />
                                <br />
                              </div>
                              {/* <!--end form-group--> */}
                            </div>
                            {/* <!--end col--> */}
                          </div>
                          {/* <!--end row--> */}
                        </div>
                      </fieldset>

                      <h3>Confirm Detail</h3>
                      <fieldset>
                        <div className="p-3">
                          <fieldset>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group row">
                                  <label className="">
                                    {' '}
                                    <b style={{ paddingRight: '40px' }}> Contact Person </b>: &nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;Tamil
                                  </label>
                                </div>
                                {/* <!--end form-group--> */}
                              </div>
                              {/* <!--end col--> */}
                              <div className="col-md-6">
                                <div className="form-group row">
                                  <label className="">
                                    {' '}
                                    <b style={{ paddingRight: '77px' }}> Mobile No.</b>:
                                    &nbsp;&nbsp;&nbsp;&nbsp;+91 23456 78910
                                  </label>
                                </div>
                                {/* <!--end form-group--> */}
                              </div>
                              {/* <!--end col--> */}
                            </div>
                            {/* <!--end row--> */}
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group row">
                                  <label className="">
                                    {' '}
                                    <b style={{ paddingRight: '15px' }}> Alternate Moble No. </b>:
                                    &nbsp;&nbsp;&nbsp;&nbsp;+91 35467 78910
                                  </label>
                                </div>
                                {/* <!--end form-group--> */}
                              </div>
                              {/* <!--end col--> */}
                              <div className="col-md-6">
                                <div className="form-group row">
                                  <label className="">
                                    {' '}
                                    <b style={{ paddingRight: '90px' }}> Email Id </b>:
                                    &nbsp;&nbsp;&nbsp;&nbsp;abc@gmail.com
                                  </label>
                                </div>
                                {/* <!--end form-group--> */}
                              </div>
                              {/* <!--end col--> */}
                            </div>
                            {/* <!--end row--> */}
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group row">
                                  <label className="">
                                    {' '}
                                    <b style={{ paddingRight: '88px' }}> Address</b>:
                                    &nbsp;&nbsp;&nbsp;&nbsp; Salem
                                  </label>
                                </div>
                                {/* <!--end form-group--> */}
                              </div>
                              {/* <!--end col--> */}
                              <div className="col-md-6">
                                <div className="form-group row">
                                  <label className="">
                                    {' '}
                                    <b style={{ paddingRight: '90px' }}> Plate No</b>:
                                    &nbsp;&nbsp;&nbsp;&nbsp;3455
                                  </label>
                                </div>
                                {/* <!--end form-group--> */}
                              </div>
                              {/* <!--end col--> */}
                            </div>
                            {/* <!--end row--> */}
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group row">
                                  <label className="">
                                    {' '}
                                    <b style={{ paddingRight: '60px' }}> Chassis No. </b>:
                                    &nbsp;&nbsp;&nbsp;&nbsp;600132CTZP78900{' '}
                                  </label>
                                </div>
                                {/* <!--end form-group--> */}
                              </div>
                              {/* <!--end col--> */}
                              <div className="col-md-6">
                                <div className="form-group row">
                                  <label className="">
                                    {' '}
                                    <b style={{ paddingRight: '53px' }}> Vehicle Model </b>:
                                    &nbsp;&nbsp;&nbsp;&nbsp; Tata Safari Storme
                                  </label>
                                </div>
                                {/* <!--end form-group--> */}
                              </div>
                              {/* <!--end col--> */}
                            </div>
                            {/* <!--end row--> */}
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group row">
                                  <label className="">
                                    {' '}
                                    <b style={{ paddingRight: '55px' }}> Vehicle Make </b>:
                                    &nbsp;&nbsp;&nbsp;&nbsp; TATA Motors
                                  </label>
                                </div>
                                {/* <!--end form-group--> */}
                              </div>
                              {/* <!--end col--> */}
                              <div className="col-md-6">
                                <div className="form-group row">
                                  <label className="">
                                    {' '}
                                    <b style={{ paddingRight: '47px' }}> Vehicle Variant </b>:
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Blue Color
                                  </label>
                                </div>
                                {/* <!--end form-group--> */}
                              </div>
                              {/* <!--end col--> */}
                            </div>
                            {/* <!--end row--> */}
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group row">
                                  <label className="">
                                    {' '}
                                    <b style={{ paddingRight: '43px' }}> Registered city </b>:
                                    &nbsp;&nbsp;&nbsp;&nbsp;Salem
                                  </label>
                                </div>

                                {/* <!--end form-group--> */}
                              </div>
                              {/* <!--end col--> */}
                              <div className="col-md-6">
                                <div className="form-group row">
                                  <label className="">
                                    {' '}
                                    <b style={{ paddingRight: '57px' }}>Vehicle Value </b>:
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;132,000{' '}
                                  </label>
                                </div>
                                {/* <!--end form-group--> */}
                              </div>
                              {/* <!--end col--> */}
                            </div>
                            {/* <!--end row--> */}
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group row">
                                  <label className="">
                                    {' '}
                                    <b style={{ paddingRight: '27px' }}> Type of Insurance </b> :
                                    &nbsp;&nbsp;&nbsp;&nbsp;Motor Insurance
                                  </label>
                                </div>
                                {/* <!--end form-group--> */}
                              </div>
                              {/* <!--end col--> */}
                              <div className="col-md-6">
                                <div className="form-group row">
                                  <label className="">
                                    {' '}
                                    <b style={{ paddingRight: '15px' }}> Insurance Company </b> :
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AIG Insurance,RSA Insurance{' '}
                                  </label>
                                </div>
                                {/* <!--end form-group--> */}
                              </div>
                              {/* <!--end col--> */}
                            </div>
                            {/* <!--end row--> */}
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-group mb-0">
                                  <div
                                    className="custom-control custom-checkbox"
                                    style={{ paddingLeft: '15px' }}
                                  >
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="horizontalCheckbox1"
                                      data-parsley-multiple="groups"
                                      data-parsley-mincheck="2"
                                    />
                                    <label
                                      className="custom-control-label"
                                      for="horizontalCheckbox1"
                                    >
                                      {' '}
                                      <a className="mr-2">
                                        <i className="fab fa-whatsapp text-success font-16"></i>
                                      </a>
                                      <a className="mr-2">
                                        <i className="far fa-comment text-warning font-16"></i>
                                      </a>
                                      <a className="mr-2">
                                        <i className="fas fa-envelope-square text-danger font-16"></i>
                                      </a>
                                    </label>
                                  </div>{' '}
                                </div>
                                {/* <!--end form-group--> */}
                              </div>
                              {/* <!--end col--> */}

                              <div className="col-md-12">
                                <div
                                  className="custom-control custom-checkbox"
                                  style={{ paddingLeft: '15px' }}
                                >
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="horizontalCheckbox"
                                    data-parsley-multiple="groups"
                                    data-parsley-mincheck="2"
                                  />
                                  <label className="custom-control-label" for="horizontalCheckbox">
                                    {' '}
                                    I agree with terms and conditions.
                                  </label>
                                </div>
                              </div>
                              {/* <!--end col--> */}
                            </div>
                            {/* <!--end row--> */}
                          </fieldset>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MotorIns;
