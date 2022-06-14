import React, { Component } from "react";
import { Link } from "react-router-dom";

function PropertyInsurance() {
  return (
    <div>
      <div class="topbar" style={{ backgroundColor: "#0000ff" }}>
        {/* <!-- LOGO --> */}
        <div class="topbar-left">
          <a href="#" class="logo">
            <span>
              <img
                style={{
                  height: "42px",
                  marginTop: "12px",
                  borderRadius: "66px",
                }}
                src="../assets/images/icon.png"
                alt="logo-small"
                class="logo-sm"
              />
            </span>
          </a>
        </div>
        {/* <!--end logo-->
        <!-- Navbar --> */}
        <nav class="navbar-custom" style={{ backgroundColor: "#0000ff" }}>
          <ul class="list-unstyled topbar-nav float-right mb-0">
            <li class="hidden-sm">
              <a
                class="nav-link dropdown-toggle waves-effect waves-light"
                data-toggle="dropdown"
                href="javascript: void(0);"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                English
                <img
                  src="../assets/images/language.png"
                  class="ml-2"
                  height="16"
                  alt=""
                />{" "}
                <i class="mdi mdi-chevron-down" />
              </a>
              <div class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item" href="javascript: void(0);">
                  <span> English </span>
                </a>
                <a href="#" class="dropdown-item" href="javascript: void(0);">
                  <span>Arabic</span>
                </a>
              </div>
            </li>

            <li class="dropdown notification-list">
              <a
                class="nav-link dropdown-toggle arrow-none waves-light waves-effect"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <i class="dripicons-bell noti-icon" />
                <span class="badge badge-danger badge-pill noti-icon-badge">
                  2
                </span>
              </a>
              <div class="dropdown-menu dropdown-menu-right dropdown-lg">
                {/* <!-- item--> */}
                <h6 class="dropdown-item-text">Notifications (18)</h6>
                <div class="slimscroll notification-list">
                  {/* <!-- item--> */}
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item notify-item active"
                  >
                    <div class="notify-icon bg-success">
                      <i class="mdi mdi-cart-outline" />
                    </div>
                    <p class="notify-details">
                      Your renewable notification
                      <small class="text-muted">
                        The insured must approach the insurer and make a request
                        for health insurance renewal, citing the policy number,
                        at least 30 days before the policy is due to expire.
                      </small>
                    </p>
                  </a>
                  {/* <!-- item--> */}
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item notify-item"
                  >
                    <div class="notify-icon bg-warning">
                      <i class="mdi mdi-message" />
                    </div>
                    <p class="notify-details">
                      Notication from insurance company
                      <small class="text-muted">
                        The insurer may choose to deny renewal. The customer
                        must seek explanation for such action.
                      </small>
                    </p>
                  </a>
                  {/* <!-- item--> */}
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item notify-item"
                  >
                    <div class="notify-icon bg-info">
                      <i class="mdi mdi-glass-cocktail" />
                    </div>
                    <p class="notify-details">
                      Your item is shipped
                      <small class="text-muted">
                        It is a long established fact that a reader will
                      </small>
                    </p>
                  </a>
                  {/* <!-- item--> */}
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item notify-item"
                  >
                    <div class="notify-icon bg-primary">
                      <i class="mdi mdi-cart-outline" />
                    </div>
                    <p class="notify-details">
                      Your order is placed
                      <small class="text-muted">
                        Dummy text of the printing and typesetting industry.
                      </small>
                    </p>
                  </a>
                  {/* <!-- item--> */}
                  <a
                    href="javascript:void(0);"
                    class="dropdown-item notify-item"
                  >
                    <div class="notify-icon bg-danger">
                      <i class="mdi mdi-message" />
                    </div>
                    <p class="notify-details">
                      New Message received
                      <small class="text-muted">
                        You have 87 unread messages
                      </small>
                    </p>
                  </a>
                </div>
                {/* <!-- All--> */}
                <a
                  href="javascript:void(0);"
                  class="dropdown-item text-center text-primary"
                >
                  View all <i class="fi-arrow-right" />
                </a>
              </div>
            </li>

            <li class="dropdown">
              <a
                class="nav-link dropdown-toggle waves-effect waves-light nav-user"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="false"
                aria-expanded="false"
              >
                <img
                  src="../assets/images/i.jpeg"
                  alt="profile-user"
                  class="rounded-circle"
                />
                <span class="ml-1 nav-user-name hidden-sm">
                  My Account
                  <i class="mdi mdi-chevron-down" />
                </span>
              </a>
              <div class="dropdown-menu dropdown-menu-right">
                <a class="dropdown-item" href="#">
                  <i class="dripicons-user text-muted mr-2" /> Profile
                </a>
                <a class="dropdown-item" href="#">
                  <i class="dripicons-wallet text-muted mr-2" /> My Orders
                </a>
                <a class="dropdown-item" href="#">
                  <i class="dripicons-heart text-muted mr-2" />
                  My Wishlist
                </a>
                <a class="dropdown-item" href="#">
                  <i class="dripicons-gear text-muted mr-2" /> Settings
                </a>

                <div class="dropdown-divider" />
                <a class="dropdown-item" href="#">
                  <i class="dripicons-exit text-muted mr-2" /> Logout
                </a>
              </div>
            </li>
          </ul>

          {/* <!--end topbar-nav--> */}

          <ul class="list-unstyled topbar-nav mb-0">
            <li>
              <button
                class="button-menu-mobile nav-link waves-effect waves-light"
                style={{
                  paddingLeft: "0px",
                  paddingRight: "0px",
                  width: "20px",
                }}
              >
                <i
                  class="dripicons-menu nav-icon"
                  style={{
                    marginRight: "35px",
                    color: "unset",
                    fontWeight: "bold",
                  }}
                />
              </button>
            </li>

            <li class="hide-phone app-search">
              <div class="search-container">
                <form role="search" class="">
                  <input
                    type="text"
                    placeholder="Search..."
                    class="form-control"
                    style={{ marginLeft: "30px" }}
                  />
                  <a href="" style={{ color: "blue" }}>
                    <i
                      class="fas fa-search"
                      style={{
                        marginTop: "10px",
                      }}
                    />
                  </a>
                </form>
              </div>
            </li>
          </ul>

          {/* <!-- end navbar--> */}

          {/* <!-- Top Bar End -->
           */}
        </nav>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div class="page-content" style={{ padding: "0px" }}>
        <div class="container-fluid">
          {/* <!-- Page-Title --> */}
          <div class="row">
            <div class="col-sm-12">
              <div class="page-title-box">
                <div class="float-right">
                  <ol class="breadcrumb" style={{ color: "#0000ff" }}>
                    <li class="breadcrumb-item">Dashboard</li>

                    <li class="breadcrumb-item active">Property Insurance</li>
                  </ol>
                </div>
              </div>
              {/* <!--end page-title-box--> */}
            </div>
            {/* <!--end col--> */}
          </div>
          {/* <!-- end page title end breadcrumb --> */}

          <div class="col-md-12">
            <div class="row">
              <div class="col-md-12">
                <div class="row" id="page1">
                  <div style={{ display: "none" }} id="horizontalwrap">
                    <br />
                    <div id="circle3">
                      <div
                        id="circle1"
                        style={{
                          border: "1px solid gray",
                          backgroundColor: "gray",
                        }}
                      >
                        <div
                          id="circle2"
                          style={{
                            border: "1px solid gray",
                            backgroundColor: "gray",
                          }}
                        />
                      </div>
                    </div>
                    <hr
                      style={{
                        border: "2px solid blue",
                        width: "89px",
                        marginLeft: "47px",
                        marginTop: "18px",
                      }}
                    />
                    <hr
                      style={{
                        border: "2px solid gray",
                        width: "89px",
                        marginLeft: "172px",
                        marginTop: "-24px",
                      }}
                    />

                    <div id="tit">
                      {" "}
                      <h5
                        style={{
                          color: "#0000ff",
                          fontFamily: "Open sans",
                          marginTop: "25px",
                          fontWeight: "bold",
                        }}
                      >
                        INSURED
                        <br /> DETAILS
                      </h5>
                    </div>
                    <div id="tit1">
                      {" "}
                      <h5
                        style={{
                          color: "gray",
                          fontFamily: "Open sans",
                          marginTop: "25px",
                          fontWeight: "bold",
                        }}
                      >
                        PROPERTY <br />
                        DETAILS
                      </h5>
                    </div>
                    <div id="tit2">
                      {" "}
                      <h5
                        style={{
                          color: "gray",
                          fontFamily: "Open sans",
                          marginTop: "25px",
                          fontWeight: "bold",
                        }}
                      >
                        CONFIRM
                        <br /> DETAILS
                      </h5>
                    </div>
                  </div>
                  <div class="col-lg-2" id="verticalwrap">
                    <div id="circle" />
                    <div id="tit">
                      <h5
                        style={{
                          marginLeft: "18px",
                          color: "#0000ff",
                          fontFamily: "Open sans",
                          marginTop: "40px",
                          fontWeight: "bold",
                        }}
                      >
                        INSURED DETAILS
                      </h5>
                    </div>

                    <div
                      class="line"
                      style={{
                        top: "63px",
                        height: "86px",
                        marginLeft: "74px",
                        borderLeft: "4px solid #0000ff",
                      }}
                    />
                    <div
                      id="circle"
                      style={{
                        marginTop: "10px",
                        border: "2px solid gray",
                        backgroundColor: "gray",
                      }}
                    />
                    <div>
                      <h5
                        style={{
                          marginLeft: "18px",
                          color: "gray",
                          marginTop: "40px",
                          fontWeight: "bold",
                        }}
                      >
                        PROPERTY DETAILS
                      </h5>
                    </div>
                    <div
                      class="line"
                      style={{
                        top: "63px",
                        height: "86px",
                        marginLeft: "74px",
                      }}
                    />
                    <div
                      id="circle"
                      style={{
                        marginTop: "10px",
                        border: "2px solid gray",
                        backgroundColor: "gray",
                      }}
                    />
                    <div>
                      <h5
                        style={{
                          marginLeft: "18px",
                          color: "gray",
                          marginTop: "40px",
                          fontWeight: "bold",
                        }}
                      >
                        CONFIRM DETAILS
                      </h5>
                    </div>
                  </div>

                  <div class="col-md-8" style={{ marginTop: "-45px" }}>
                    <div class="row">
                      <div class="col-md-12">
                        <h3
                          style={{
                            fontFamily: "Open sans",
                            fontWeight: "bold",
                            color: "#0000ff",
                          }}
                          id="heading1"
                        >
                          <span
                            class="glyphicon glyphicon-ok"
                            style={{
                              marginRight: "11px",
                              color: "gray",
                            }}
                            id="h1"
                          />
                          Enter Insured Details
                        </h3>
                      </div>
                    </div>

                    <div class="row" style={{ marginTop: "15px" }}>
                      <div class="col-md-6" style={{ width: "350px" }}>
                        <label for="fname">Product</label>
                        <input
                          class="form-control"
                          type="text"
                          id="lname"
                          name="firstname"
                          placeholder=""
                        />

                        <label for="lname">Insured Name</label>
                        <input
                          class="form-control"
                          type="text"
                          id="lname"
                          name="lastname"
                          placeholder=""
                        />
                        <label for="lname">Phone Number</label>
                        <input
                          class="form-control"
                          type="text"
                          id="lname"
                          name="lastname"
                          placeholder=""
                        />
                        <label for="lname">Email Id</label>
                        <input
                          class="form-control"
                          type="text"
                          id="lname"
                          name="lastname"
                          placeholder=""
                        />
                      </div>
                      <div class="col-md-6" style={{ width: "350px" }}>
                        <label for="fname">Insured Type</label>
                        <div class="row">
                          <div class="col-md-12">
                            <button
                              class="form-control"
                              id="label1"
                              style={{ display: "inline" }}
                            >
                              Individual
                            </button>
                            <button
                              class="form-control"
                              id="label2"
                              style={{ display: "inline" }}
                            >
                              Corporate
                            </button>
                          </div>
                        </div>

                        <label for="lname">Contact Person</label>
                        <input
                          class="form-control"
                          type="text"
                          id="lname"
                          name="lastname"
                          placeholder=""
                        />
                        <label for="lname">Mobile Number</label>
                        <input
                          class="form-control"
                          type="text"
                          id="lname"
                          name="lastname"
                          placeholder=""
                        />
                        <label for="lname">Commercial Registration No</label>
                        <input
                          class="form-control"
                          type="text"
                          id="lname"
                          name="lastname"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <label for="Address">Address</label>
                        <input
                          class="form-control"
                          type="text"
                          id="address"
                          name="lastname"
                          placeholder=""
                          style={{ width: "90 %" }}
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-4">
                        <label for="lname">City</label>
                        <input
                          class="form-control"
                          type="text"
                          id="address"
                          name="lastname"
                          placeholder=""
                        />
                      </div>
                      <div class="col-md-4">
                        <label for="lname">State</label>
                        <input
                          class="form-control"
                          type="text"
                          id="address"
                          name="lastname"
                          placeholder=""
                        />
                      </div>
                      <div class="col-md-4">
                        <label for="lname">Pin Code</label>
                        <input
                          class="form-control"
                          type="text"
                          id="address"
                          name="lastname"
                          placeholder=""
                          style={{ width: "67 %" }}
                        />
                      </div>
                    </div>

                    <div class="row" style={{ marginBottom: "10px" }}>
                      <div class="col-md-12" style={{ textAlign: "center" }}>
                        <button
                          class="btn btn-outline-primary"
                          type="button"
                          id="save1"
                          style={{
                            width: "190px",
                            height: "40px",

                            marginLeft: "-47px",
                            marginTop: "46px",
                            color: "white",
                            backgroundColor: "#0000ff",
                            float: "right",
                            marginRight: "79px",
                            borderRadius: "34px",
                          }}
                        >
                          Save & Continue
                          <span>
                            <i
                              class="fa fa-arrow-right"
                              style={{
                                fontSize: "12px",
                                marginLeft: "7px",
                              }}
                            />
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row" id="page2">
                  <div class="col-md-12">
                    <div style={{ display: "none" }} id="horizontalwrap">
                      <br />
                      <div
                        id="circle4"
                        style={{
                          backgroundColor: "transparent",
                          border: "2px solid transparent",
                        }}
                      >
                        <span>
                          <i
                            class="fa fa-check-circle"
                            aria-hidden="true"
                            style={{
                              color: "green",
                              fontSize: "24px",
                              marginLeft: "-3px",
                              width: "20px",
                              height: "20px",
                            }}
                          />
                        </span>
                        <div
                          id="circle1"
                          style={{
                            border: "1px solid #0000ff",
                            backgroundColor: "#0000ff",
                            marginTop: "-24px !important",
                          }}
                        >
                          <div
                            id="circle5"
                            style={{
                              border: "1px solid gray",
                              backgroundColor: "gray",
                            }}
                          />
                        </div>
                      </div>
                      <hr
                        style={{
                          border: "2px solid #50649c",
                          width: "80px",
                          marginLeft: "32px",
                          marginTop: "21px",
                        }}
                      />
                      <hr
                        style={{
                          border: "2px solid gray",
                          width: "80px",
                          marginLeft: "151px",
                          marginTop: "-24px",
                        }}
                      />

                      <div id="tit3">
                        {" "}
                        <h5
                          style={{
                            color: "green",
                            fontFamily: "Open sans",
                            marginTop: "25px",
                            fontWeight: "bold",
                          }}
                        >
                          INSURED <br />
                          DETAILS
                        </h5>
                      </div>
                      <div id="tit4">
                        {" "}
                        <h5
                          style={{
                            color: "gray",
                            fontFamily: "Open sans",
                            marginTop: "25px",
                            fontWeight: "bold",
                          }}
                        >
                          PROPERTY
                          <br /> DETAILS
                        </h5>
                      </div>
                      <div id="tit5">
                        {" "}
                        <h5
                          style={{
                            color: "gray",
                            fontFamily: "Open sans",
                            marginTop: "25px",
                            fontWeight: "bold",
                          }}
                        >
                          CONFIRM
                          <br /> DETAILS
                        </h5>
                      </div>
                    </div>
                    <div class="col-md-2" id="verticalwrap">
                      <div
                        id="circle"
                        style={{
                          backgroundColor: "transparent",
                          border: "2px solid transparent",
                        }}
                      >
                        <span>
                          <i
                            class="fa fa-check-circle"
                            aria-hidden="true"
                            style={{
                              color: "green",
                              fontSize: "24px",
                              marginLeft: "-3px",
                              width: "20px",
                              height: "20px",
                            }}
                          />
                        </span>
                      </div>
                      <div id="tit">
                        <h5
                          style={{
                            marginLeft: "18px",
                            color: "green",
                            marginTop: "40px",
                            fontFamily: "Open sans",
                            fontWeight: "bold",
                          }}
                        >
                          INSURED DETAILS
                        </h5>
                      </div>

                      <div
                        class="line"
                        style={{
                          top: "63px",
                          height: "86px",
                          marginLeft: "74px",
                          borderLeft: "4px solid #50649c",
                        }}
                      />
                      <div id="circle" style={{ marginTop: "10px" }} />
                      <div>
                        <h5
                          style={{
                            marginLeft: "18px",
                            color: "#50649c",
                            marginTop: "40px",
                            fontFamily: "Open sans",
                            fontWeight: "bold",
                          }}
                        >
                          PROPERTY DETAILS
                        </h5>
                      </div>
                      <div
                        class="line"
                        style={{
                          top: "63px",
                          height: "86px",
                          marginLeft: "74px",
                        }}
                      />
                      <div
                        id="circle"
                        style={{
                          marginTop: "10px",
                          border: "2px solid gray",
                          backgroundColor: "gray",
                        }}
                      />
                      <div>
                        <h5
                          style={{
                            marginLeft: "18px",
                            color: "gray",
                            marginTop: "40px",
                            fontFamily: "Open sans",
                            fontWeight: "bold",
                          }}
                        >
                          CONFIRM DETAILS
                        </h5>
                      </div>
                    </div>
                    <div
                      class="col-md-2"
                      id="info1"
                      style={{ display: "none" }}
                    >
                      <div class="row">
                        <div class="col-md-12" style={{ height: "124px" }}>
                          <h4
                            style={{
                              marginLeft: "14px",
                              marginLeft: "0px",
                              fontFamily: "Open sans",
                              fontWeight: "bold",

                              color: "#0000ff",
                            }}
                          >
                            Insured Detail&nbsp;&nbsp;
                            <i class="fa fa-edit" />
                          </h4>

                          <p
                            class="details"
                            style={{ display: "inline - block" }}
                          >
                            <span
                              class="glyphicon glyphicon-user"
                              style={{ color: "#0000ff" }}
                            />
                            Tamil
                          </p>
                          <p
                            class="details"
                            style={{ marginTop: "2px !important" }}
                          >
                            <span
                              class="glyphicon glyphicon-envelope"
                              style={{ color: "#0000ff" }}
                            />{" "}
                            limattamil07@gmail.com
                          </p>
                          <p
                            class="details"
                            style={{
                              display: "inline-block",
                              marginTop: "2px !important",
                            }}
                          >
                            <span
                              class="glyphicon glyphicon-earphone"
                              style={{ color: "#0000ff" }}
                            />{" "}
                            9988990099
                          </p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <h4
                            style={{
                              marginLeft: "14px",
                              marginLeft: "0px",
                              fontFamily: "Open sans",
                              fontWeight: "bold",
                              color: "#0000ff",
                            }}
                          >
                            Property Details&nbsp;&nbsp;
                            <i class="fa fa-edit" />
                          </h4>

                          <p class="details" style={{ fontWeight: "bold" }}>
                            Marina Homes
                          </p>
                          <p
                            class="details"
                            style={{ marginTop: "2px !important" }}
                          >
                            No 24,New Tower,
                          </p>
                          <p
                            class="details"
                            style={{ marginTop: "2px !important" }}
                          >
                            St.Thomas Mount,
                          </p>
                          <p
                            class="details"
                            style={{ marginTop: "2px !important" }}
                          >
                            Chennai-21
                          </p>

                          <div class="row">
                            <div
                              class="col-md-12"
                              style={{ marginBottom: "7px" }}
                            >
                              <p class="details" style={{ fontWeight: "bold" }}>
                                Nelson Industry
                              </p>
                              <p
                                class="details"
                                style={{ marginTop: "2px !important" }}
                              >
                                No 5,Nelson
                              </p>
                              <p
                                class="details"
                                style={{ marginTop: "2px !important" }}
                              >
                                Guindy
                              </p>
                              <p
                                class="details"
                                style={{ marginTop: "2px !important" }}
                              >
                                Chennai-21
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-8" style={{ marginTop: "-40px" }}>
                      <div class="row">
                        <div class="col-md-12">
                          <div style={{ marginTop: "18px" }} />
                          <h3
                            style={{
                              fontFamily: "Open sans",
                              fontWeight: "bold",
                              color: "#0000ff",
                              marginTop: "-18px",
                            }}
                            id="heading1"
                          >
                            <span
                              class="glyphicon glyphicon-ok"
                              style={{ marginRight: "11px", color: "gray" }}
                              id="h1"
                            />
                            Let's start adding your property details
                          </h3>
                        </div>
                      </div>
                      {/* <!-- accordion --> */}
                      <div class="row">
                        <div class="col-md-12">
                          {/* <!--Accordion wrapper--> */}
                          <div
                            class="accordion md-accordion"
                            id="accordionEx"
                            role="tablist"
                            aria-multiselectable="true"
                          >
                            {/* <!-- Accordion card --> */}
                            <div class="card-ac">
                              {/* <!-- Card header --> */}
                              <div
                                class="card-header"
                                role="tab"
                                id="headingOne1"
                              >
                                <a
                                  data-toggle="collapse"
                                  data-parent="#accordionEx"
                                  href="#collapseOne1"
                                  aria-expanded="true"
                                  aria-controls="collapseOne1"
                                >
                                  <h5
                                    class="mb-0"
                                    style={{
                                      fontFamily: "Open sans",
                                      fontWeight: "bold",
                                      color: "#0000ff",
                                    }}
                                  >
                                    Risk Information / Location Information{" "}
                                    <i
                                      class="fas fa-angle-down rotate-icon"
                                      style={{ float: "right" }}
                                    />
                                  </h5>
                                </a>
                              </div>

                              {/* <!-- Card body --> */}
                              <div
                                id="collapseOne1"
                                class="collapse show"
                                role="tabpanel"
                                aria-labelledby="headingOne1"
                                data-parent="#accordionEx"
                              >
                                <div class="card-body">
                                  <div class="row">
                                    <div class="col-md-6">
                                      <label
                                        for="lname"
                                        style={{ marginLeft: "65px" }}
                                        id="sname"
                                      >
                                        Subsidiary Company
                                      </label>
                                      <input
                                        class="form-control"
                                        type="text"
                                        id="sname"
                                        name="lastname"
                                        placeholder=""
                                        style={{ marginLeft: "65px" }}
                                      />
                                    </div>

                                    <div class="col-md-6">
                                      <label for="lname">
                                        Property / Villa Name
                                      </label>
                                      <input
                                        class="form-control"
                                        type="text"
                                        id="vname"
                                        name="lastname"
                                        placeholder=""
                                      />
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col-md-6">
                                      <label
                                        for="governat"
                                        style={{ marginLeft: "65px" }}
                                        id="sname"
                                      >
                                        Governate
                                      </label>
                                      <input
                                        class="form-control"
                                        type="text"
                                        id="sname"
                                        name="lastname"
                                        placeholder=""
                                        style={{ marginLeft: "65px" }}
                                      />
                                    </div>

                                    <div class="col-md-6">
                                      <label for="street">Street</label>
                                      <input
                                        class="form-control"
                                        type="text"
                                        id="vname"
                                        name="lastname"
                                        placeholder=""
                                      />
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col-md-4">
                                      <label
                                        for="lname"
                                        style={{ marginLeft: "65px" }}
                                        id="sname"
                                      >
                                        Block
                                      </label>
                                      <input
                                        class="form-control"
                                        type="text"
                                        id="sname"
                                        name="lastname"
                                        placeholder=""
                                        style={{ marginLeft: "65px" }}
                                      />
                                    </div>
                                    <div class="col-md-4">
                                      <label
                                        for="lname"
                                        style={{ marginLeft: "20px" }}
                                        id="area"
                                      >
                                        Area
                                      </label>
                                      <input
                                        class="form-control"
                                        type="text"
                                        id="area"
                                        name="lastname"
                                        placeholder=""
                                        style={{
                                          marginLeft: "20px",
                                          width: "91%",
                                        }}
                                      />
                                    </div>
                                    <div class="col-md-4">
                                      <label for="lname" id="city">
                                        City
                                      </label>
                                      <input
                                        class="form-control"
                                        type="text"
                                        id="pname"
                                        name="lastname"
                                        placeholder=""
                                        style={{ width: "68%" }}
                                        id="city"
                                      />
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col-md-4">
                                      <label
                                        for="lname"
                                        id="select"
                                        style={{ marginLeft: "65px" }}
                                      >
                                        Country
                                      </label>
                                      <select
                                        class="form-control"
                                        style={{ marginLeft: "65px" }}
                                        id="select"
                                      >
                                        <option>UAE</option>
                                        <option>India</option>
                                        <option>USA</option>
                                      </select>
                                    </div>
                                    <div class="col-md-4">
                                      <label
                                        for="lname"
                                        style={{ marginLeft: "20px" }}
                                        id="code"
                                      >
                                        Geo Code
                                      </label>
                                      <input
                                        class="form-control"
                                        type="text"
                                        id="code"
                                        name="lastname"
                                        placeholder=""
                                        style={{
                                          marginLeft: "20px",
                                          width: "91%",
                                        }}
                                      />
                                    </div>
                                    <div class="col-md-4" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!-- Accordion card -->

                                                    <!-- Accordion card --> */}
                            <div class="card-ac">
                              {/* <!-- Card header --> */}
                              <div
                                class="card-header"
                                role="tab"
                                id="headingTwo2"
                              >
                                <a
                                  class="collapsed"
                                  data-toggle="collapse"
                                  data-parent="#accordionEx"
                                  href="#collapseTwo2"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo2"
                                >
                                  <h5
                                    class="mb-0"
                                    style={{
                                      fontFamily: "Open sans",
                                      fontWeight: "bold",
                                      color: "#0000ff",
                                    }}
                                  >
                                    Property Info{" "}
                                    <i
                                      class="fas fa-angle-down rotate-icon"
                                      style={{ float: "right" }}
                                    />
                                  </h5>
                                </a>
                              </div>

                              {/* <!-- Card body --> */}
                              <div
                                id="collapseTwo2"
                                class="collapse"
                                role="tabpanel"
                                aria-labelledby="headingTwo2"
                                data-parent="#accordionEx"
                              >
                                <div class="card-body">
                                  <div class="row">
                                    <div class="col-md-6">
                                      <label
                                        for="lname"
                                        style={{ marginLeft: "65px" }}
                                        id="select"
                                      >
                                        Occupancy
                                      </label>
                                      <select
                                        class="form-control"
                                        style={{ marginLeft: "65px" }}
                                        id="select"
                                      >
                                        <option>Schools</option>
                                        <option>Colleges</option>
                                        <option />
                                      </select>
                                    </div>

                                    <div class="col-md-6">
                                      <label for="lname" id="select">
                                        Construction Type
                                      </label>
                                      <select class="form-control" id="select">
                                        <option>Concrete</option>
                                        <option />
                                        <option />
                                      </select>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col-md-4">
                                      <label
                                        for="lname"
                                        style={{ marginLeft: "65px" }}
                                        id="sname"
                                      >
                                        Year Built
                                      </label>
                                      <input
                                        class="form-control"
                                        type="text"
                                        id="sname"
                                        name="lastname"
                                        placeholder=""
                                        style={{ marginLeft: "65px" }}
                                      />
                                    </div>
                                    <div class="col-md-4">
                                      <label
                                        for="lname"
                                        style={{ marginLeft: "65px" }}
                                        id="code"
                                      >
                                        No of Floors
                                      </label>
                                      <input
                                        class="form-control"
                                        type="text"
                                        id="code"
                                        name="lastname"
                                        placeholder=""
                                        style={{
                                          marginLeft: "20px",
                                          width: "91%",
                                        }}
                                      />
                                    </div>
                                    <div class="col-md-4">
                                      <label for="lname" id="height">
                                        Building Height
                                      </label>
                                      <input
                                        class="form-control"
                                        type="text"
                                        id="height"
                                        name="lastname"
                                        placeholder=""
                                        style={{ width: "68%" }}
                                      />
                                    </div>
                                    {/* <!-- </div> --> */}
                                  </div>
                                  <div class="row">
                                    <div class="col-md-12">
                                      <label
                                        for="lname"
                                        style={{ marginLeft: "65px" }}
                                        id="location"
                                      >
                                        Location Description
                                      </label>
                                      <input
                                        class="form-control"
                                        type="text"
                                        id="location"
                                        name="lastname"
                                        placeholder=""
                                        style={{
                                          marginLeft: "65px",
                                          width: "82%",
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!-- Accordion card -->

                                                    <!-- Accordion card --> */}
                            <div class="card-ac">
                              {/* 
                                                        <!-- Card header --> */}
                              <div
                                class="card-header"
                                role="tab"
                                id="headingThree3"
                              >
                                <a
                                  class="collapsed"
                                  data-toggle="collapse"
                                  data-parent="#accordionEx"
                                  href="#collapseThree3"
                                  aria-expanded="false"
                                  aria-controls="collapseThree3"
                                >
                                  <h5
                                    class="mb-0"
                                    style={{
                                      fontFamily: "Open sans",
                                      fontWeight: "bold",
                                      color: "#0000ff",
                                    }}
                                  >
                                    Coverage Details&nbsp;&nbsp;&nbsp;
                                    <i class="fa fa-arrow-right" />
                                    <i
                                      class="fas fa-angle-down rotate-icon"
                                      style={{ float: "right" }}
                                    />
                                  </h5>
                                </a>
                              </div>

                              {/* <!-- Card body --> */}
                              <div
                                id="collapseThree3"
                                class="collapse"
                                role="tabpanel"
                                aria-labelledby="headingThree3"
                                data-parent="#accordionEx"
                              >
                                <div class="card-body">
                                  <div
                                    class="row"
                                    style={{
                                      marginTop: "-14px",
                                      marginBottom: "7px",
                                    }}
                                  >
                                    <div class="col-md-1" />
                                    <div class="col-md-3">
                                      <div class="row">
                                        <div class="col-md-6">
                                          <h5
                                            style={{
                                              marginLeft: "-40px",
                                              fontFamily: "open sans",
                                              fontWeight: "bold",
                                              float: "left",
                                            }}
                                            id="coverage"
                                          >
                                            Coverage
                                          </h5>
                                        </div>
                                        <div class="col-md-6">
                                          <button
                                            class="btn btn-outline-primary"
                                            type="button"
                                            style={{
                                              width: "166px",
                                              marginLeft: "-77px",
                                              height: "33px",
                                              color: "black",
                                              float: "left",
                                              backgroundColor: "white",
                                              borderRadius: "5px",
                                              border: "1px solid lightgray",
                                              marginTop: "6px",
                                            }}
                                            id="si5"
                                          >
                                            <span class="glyphicon glyphicon-plus" />{" "}
                                            Add Cover
                                          </button>
                                        </div>
                                      </div>
                                    </div>

                                    <div class="col-md-4">
                                      <div class="row">
                                        <div class="col-md-6">
                                          <h5
                                            style={{
                                              marginLeft: "20px",
                                              fontFamily: "open sans",
                                              fontWeight: "bold",
                                            }}
                                            id="si"
                                          >
                                            Sum Insured
                                          </h5>
                                        </div>
                                        <div class="col-md-6">
                                          <select
                                            class="form-control"
                                            id="si1"
                                            style={{
                                              marginTop: "4px",
                                              width: "130px",
                                            }}
                                          >
                                            <option>KWD</option>
                                            <option>USD</option>
                                            <option>AED</option>
                                            <option>EURO</option>
                                            <option>SAR</option>
                                            <option>BHD</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="col-md-4">
                                      <div class="row">
                                        <div class="col-md-6">
                                          <h5
                                            style={{
                                              fontFamily: "open sans",
                                              fontWeight: "bold",
                                            }}
                                            id="si3"
                                          >
                                            Expected Rate
                                          </h5>
                                        </div>
                                        <div class="col-md-6">
                                          <select
                                            class="form-control"
                                            id="si4"
                                            style={{
                                              marginTop: "4px",

                                              width: "110px",
                                            }}
                                          >
                                            <option>%</option>
                                            <option>Per Mil</option>
                                            <option>Fixed</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="row">
                                    <div class="col-md-1">
                                      <div class="form-check">
                                        <input
                                          type="checkbox"
                                          class="form-check-input"
                                          id="exampleCheck1"
                                          style={{ marginLeft: "-14px" }}
                                          checked
                                        />
                                      </div>
                                    </div>
                                    <div class="col-md-3">
                                      <input
                                        class="form-control"
                                        type="text"
                                        id="cover3"
                                        name="lastname"
                                        placeholder="Fire & Lightning"
                                        style={{
                                          marginLeft: "-43px",

                                          width: "240px",
                                        }}
                                      />
                                    </div>

                                    <div class="col-md-4">
                                      <input
                                        class="form-control"
                                        type="text"
                                        id="cover1"
                                        name="lastname"
                                        placeholder=""
                                      />
                                    </div>

                                    <div class="col-md-4">
                                      <input
                                        class="form-control"
                                        type="text"
                                        id="cover2"
                                        name="lastname"
                                        placeholder=""
                                      />
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col-md-1">
                                      <div class="form-check">
                                        <input
                                          type="checkbox"
                                          class="form-check-input"
                                          id="exampleCheck1"
                                          style={{ marginLeft: "-14px" }}
                                          checked
                                        />
                                      </div>
                                    </div>
                                    <div class="col-md-3">
                                      <input
                                        class="form-control"
                                        type="text"
                                        name="lastname"
                                        placeholder="Explosion"
                                        style={{
                                          marginLeft: "-43px",

                                          width: "240px",
                                        }}
                                        id="cover3"
                                      />
                                    </div>

                                    <div class="col-md-4">
                                      <input
                                        class="form-control"
                                        type="text"
                                        id="cover1"
                                        name="lastname"
                                        placeholder=""
                                      />
                                    </div>

                                    <div class="col-md-4">
                                      <input
                                        class="form-control"
                                        type="text"
                                        id="cover2"
                                        name="lastname"
                                        placeholder=""
                                      />
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col-md-1">
                                      <div class="form-check">
                                        <input
                                          type="checkbox"
                                          class="form-check-input"
                                          id="exampleCheck1"
                                          style={{ marginLeft: "-14px" }}
                                          checked
                                        />
                                      </div>
                                    </div>
                                    <div class="col-md-3">
                                      <input
                                        class="form-control"
                                        type="text"
                                        id="cover3"
                                        name="lastname"
                                        placeholder="Liability"
                                        style={{
                                          marginLeft: "-43px",
                                          width: "240px",
                                        }}
                                      />
                                    </div>

                                    <div class="col-md-4">
                                      <input
                                        class="form-control"
                                        type="text"
                                        id="cover1"
                                        name="lastname"
                                        placeholder=""
                                      />
                                    </div>

                                    <div class="col-md-4">
                                      <input
                                        class="form-control"
                                        type="text"
                                        id="cover2"
                                        name="lastname"
                                        placeholder=""
                                      />
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col-md-1">
                                      <div class="form-check">
                                        <input
                                          type="checkbox"
                                          class="form-check-input"
                                          id="exampleCheck1"
                                          style={{ marginLeft: "-14px" }}
                                          checked
                                        />
                                      </div>
                                    </div>
                                    <div class="col-md-3">
                                      <input
                                        class="form-control"
                                        type="text"
                                        id="cover3"
                                        name="lastname"
                                        placeholder="Enter Cover Name"
                                        style={{
                                          marginLeft: "-43px",
                                          width: "240px",
                                        }}
                                      />
                                    </div>

                                    <div class="col-md-4">
                                      <input
                                        class="form-control"
                                        type="text"
                                        id="cover1"
                                        name="lastname"
                                        placeholder=""
                                      />
                                    </div>

                                    <div class="col-md-4">
                                      <input
                                        class="form-control"
                                        type="text"
                                        id="cover2"
                                        name="lastname"
                                        placeholder=""
                                      />
                                    </div>
                                  </div>

                                  <div class="row">
                                    <div class="col-md-1">
                                      <div class="form-check">
                                        <input
                                          type="checkbox"
                                          class="form-check-input"
                                          id="exampleCheck1"
                                          style={{
                                            marginLeft: "-16px",
                                            marginTop: "11px",
                                          }}
                                          checked
                                        />
                                      </div>
                                    </div>
                                    <div class="col-md-11">
                                      <label
                                        for="lname"
                                        style={{
                                          marginLeft: "-39px",
                                          marginTop: "10px",
                                          float: "left",
                                        }}
                                        id="lines"
                                      >
                                        Policy Level Coverage(Common across
                                        location)
                                      </label>
                                    </div>
                                  </div>
                                  <div
                                    class="row"
                                    style={{
                                      marginTop: "0px",
                                      marginBottom: "7px",
                                    }}
                                  >
                                    <div class="col-md-1" />
                                    <div class="col-md-3">
                                      <div class="row">
                                        <div class="col-md-6">
                                          <h5
                                            style={{
                                              marginLeft: "-40px",
                                              fontFamily: "open sans",
                                              fontWeight: "bold",
                                              float: "left",
                                            }}
                                            id="coverage"
                                          >
                                            Coverage
                                          </h5>
                                        </div>
                                        <div class="col-md-6">
                                          <button
                                            class="btn btn-outline-primary"
                                            type="button"
                                            style={{
                                              width: "166px",
                                              marginLeft: "-77px",
                                              height: "33px",
                                              color: "black",
                                              float: "left",
                                              backgroundColor: "white",
                                              borderRadius: "5px",
                                              border: "1px solid lightgray",
                                              marginTop: "6px",
                                            }}
                                            id="si5"
                                          >
                                            <span class="glyphicon glyphicon-plus" />{" "}
                                            Add Cover
                                          </button>
                                        </div>
                                      </div>
                                    </div>

                                    <div class="col-md-4">
                                      <div class="row">
                                        <div class="col-md-6">
                                          <h5
                                            style={{
                                              marginLeft: "20px",
                                              fontFamily: "open sans",
                                              fontWeight: "bold",
                                            }}
                                            id="si"
                                          >
                                            Sum Insured
                                          </h5>
                                        </div>
                                        <div class="col-md-6">
                                          <select
                                            class="form-control"
                                            id="si1"
                                            style={{
                                              marginTop: "4px",
                                              width: "130px",
                                            }}
                                          >
                                            <option>KWD</option>
                                            <option>USD</option>
                                            <option>AED</option>
                                            <option>EURO</option>
                                            <option>SAR</option>
                                            <option>BHD</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="col-md-4">
                                      <div class="row">
                                        <div class="col-md-6">
                                          <h5
                                            style={{
                                              fontFamily: "open sans",
                                              fontWeight: "bold",
                                            }}
                                            id="si3"
                                          >
                                            Expected Rate
                                          </h5>
                                        </div>
                                        <div class="col-md-6">
                                          <select
                                            class="form-control"
                                            id="si4"
                                            style={{
                                              marginTop: "4px",

                                              width: "110px",
                                            }}
                                          >
                                            <option>%</option>
                                            <option>Per Mil</option>
                                            <option>Fixed</option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="row">
                                    <div class="col-md-1">
                                      <div class="form-check">
                                        <input
                                          type="checkbox"
                                          class="form-check-input"
                                          id="exampleCheck1"
                                          style={{ marginLeft: "-14px" }}
                                          checked
                                        />
                                      </div>
                                    </div>
                                    <div class="col-md-3">
                                      <input
                                        class="form-control"
                                        type="text"
                                        id="cover3"
                                        name="lastname"
                                        placeholder="BI"
                                        style={{
                                          marginLeft: "-43px",

                                          width: "240px",
                                        }}
                                        id=""
                                      />
                                    </div>

                                    <div class="col-md-4">
                                      <input
                                        class="form-control"
                                        type="text"
                                        id="cover6"
                                        name="lastname"
                                        placeholder=""
                                      />
                                    </div>

                                    <div class="col-md-4">
                                      <input
                                        class="form-control"
                                        type="text"
                                        id="cover7"
                                        name="lastname"
                                        placeholder=""
                                      />
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col-md-1">
                                      <div class="form-check">
                                        <input
                                          type="checkbox"
                                          class="form-check-input"
                                          id="exampleCheck1"
                                          style={{ marginLeft: "-14px" }}
                                        />
                                      </div>
                                    </div>
                                    <div class="col-md-3">
                                      <input
                                        class="form-control"
                                        type="text"
                                        id="cover3"
                                        name="lastname"
                                        placeholder=""
                                        style={{
                                          marginLeft: "-43px",
                                          width: "240px",
                                        }}
                                      />
                                    </div>

                                    <div class="col-md-4">
                                      <input
                                        class="form-control"
                                        type="text"
                                        id="cover6"
                                        name="lastname"
                                        placeholder=""
                                      />
                                    </div>

                                    <div class="col-md-4">
                                      <input
                                        class="form-control"
                                        type="text"
                                        id="cover7"
                                        name="lastname"
                                        placeholder=""
                                      />
                                    </div>
                                  </div>

                                  <div
                                    class="row"
                                    style={{ marginTop: "10px" }}
                                  >
                                    <div
                                      class="col-md-12"
                                      style={{ textAlign: "left" }}
                                    >
                                      <label for="street">Deductible</label>
                                      <input
                                        class="form-control"
                                        type="text"
                                        id="lab"
                                        name="lastname"
                                        placeholder="Deductible"
                                        style={{
                                          marginTop: "2px",
                                          width: "100%",
                                        }}
                                      />
                                    </div>
                                  </div>

                                  <div class="row">
                                    <div
                                      class="col-md-12"
                                      style={{ textAlign: "left" }}
                                    >
                                      <label for="street">Remarks</label>
                                      <input
                                        class="form-control"
                                        type="text"
                                        id="lab"
                                        name="lastname"
                                        placeholder="Remarks"
                                        style={{
                                          marginTop: "2px",
                                          width: "100%",
                                        }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <!-- Accordion card --> */}
                            <div class="card-ac">
                              {/* <!-- Card header --> */}
                              <div
                                class="card-header"
                                role="tab"
                                id="headingThree4"
                              >
                                <a
                                  class="collapsed"
                                  data-toggle="collapse"
                                  data-parent="#accordionEx"
                                  href="#collapseThree4"
                                  aria-expanded="false"
                                  aria-controls="collapseThree4"
                                >
                                  <h5
                                    class="mb-0"
                                    style={{
                                      fontFamily: "Open sans",
                                      fontWeight: "bold",
                                      color: "#0000ff",
                                    }}
                                  >
                                    Safety Measures
                                    <i
                                      class="fas fa-angle-down rotate-icon"
                                      style={{ float: "right" }}
                                    />
                                  </h5>
                                </a>
                              </div>

                              {/* <!-- Card body --> */}
                              <div
                                id="collapseThree4"
                                class="collapse"
                                role="tabpanel"
                                aria-labelledby="headingThree4"
                                data-parent="#accordionEx"
                              >
                                <div class="card-body">
                                  <div class="row">
                                    <div
                                      class="col-md-12"
                                      style={{ marginTop: "-15px" }}
                                    >
                                      <h5
                                        style={{
                                          fontFamily: "open sans",
                                          fontWeight: "bold",
                                          marginLeft: "79px",
                                        }}
                                        id="safetymeasures"
                                      >
                                        Please select safety measures which you
                                        have already
                                      </h5>
                                    </div>
                                  </div>

                                  <div class="row">
                                    <div class="col-md-6">
                                      <div class="form-check" id="checklabel">
                                        <input
                                          type="checkbox"
                                          class="form-check-input"
                                          id="exampleCheck1"
                                          style={{ marginLeft: "35px" }}
                                          checked
                                        />
                                        <label
                                          class="form-check-label"
                                          for="exampleCheck1"
                                          style={{ marginLeft: "66px" }}
                                        >
                                          Fire Alarm
                                        </label>
                                      </div>
                                    </div>
                                    <div class="col-md-6">
                                      <div class="form-check">
                                        <input
                                          type="checkbox"
                                          class="form-check-input"
                                          id="exampleCheck1"
                                        />
                                        <label
                                          class="form-check-label"
                                          for="exampleCheck1"
                                          style={{ marginLeft: "32px" }}
                                        >
                                          Electrical Installation
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col-md-6">
                                      <div class="form-check" id="checklabel">
                                        <input
                                          type="checkbox"
                                          class="form-check-input"
                                          id="exampleCheck1"
                                          style={{ marginLeft: "35px" }}
                                          checked
                                        />
                                        <label
                                          class="form-check-label"
                                          for="exampleCheck1"
                                          style={{ marginLeft: "66px" }}
                                        >
                                          Automatic Sprinkler
                                        </label>
                                      </div>
                                    </div>
                                    <div class="col-md-6">
                                      <div class="form-check">
                                        <input
                                          type="checkbox"
                                          class="form-check-input"
                                          id="exampleCheck1"
                                          checked
                                        />
                                        <label
                                          class="form-check-label"
                                          for="exampleCheck1"
                                          style={{ marginLeft: "32px" }}
                                        >
                                          Safety and Security
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col-md-6">
                                      <div class="form-check" id="checklabel">
                                        <input
                                          type="checkbox"
                                          class="form-check-input"
                                          id="exampleCheck1"
                                          style={{ marginLeft: "35px" }}
                                        />
                                        <label
                                          class="form-check-label"
                                          for="exampleCheck1"
                                          style={{ marginLeft: "66px" }}
                                        >
                                          Fire Prevention & Protection Measures
                                        </label>
                                      </div>
                                    </div>
                                    <div class="col-md-6">
                                      <div class="form-check">
                                        <input
                                          type="checkbox"
                                          class="form-check-input"
                                          id="exampleCheck1"
                                        />
                                        <label
                                          class="form-check-label"
                                          for="exampleCheck1"
                                          style={{ marginLeft: "32px" }}
                                        >
                                          External Drenches
                                        </label>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col-md-6">
                                      <div class="form-check" id="checklabel">
                                        <input
                                          type="checkbox"
                                          class="form-check-input"
                                          id="exampleCheck1"
                                          style={{ marginLeft: "35px" }}
                                        />
                                        <label
                                          class="form-check-label"
                                          for="exampleCheck1"
                                          style={{ marginLeft: "66px" }}
                                        >
                                          Burglary Hazards
                                        </label>
                                      </div>
                                    </div>
                                    <div
                                      class="col-md-6"
                                      style={{
                                        textAlign: "right",
                                        fontWeight: "bold",
                                        color: "#0000ff",
                                      }}
                                    >
                                      <a>
                                        More{" "}
                                        <span>
                                          <i class="fa fa-arrow-right" />
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="card-ac">
                              {/* <!-- Card header --> */}
                              <div
                                class="card-header"
                                role="tab"
                                id="headingThree5"
                              >
                                <a
                                  class="collapsed"
                                  data-toggle="collapse"
                                  data-parent="#accordionEx"
                                  href="#collapseThree5"
                                  aria-expanded="false"
                                  aria-controls="collapseThree5"
                                >
                                  <h5
                                    class="mb-0"
                                    style={{
                                      fontFamily: "Open sans",
                                      fontWeight: "bold",
                                      color: "#0000ff",
                                    }}
                                  >
                                    Upload Documents
                                    <i
                                      class="fas fa-angle-down rotate-icon"
                                      style={{ float: "right" }}
                                    />
                                  </h5>
                                </a>
                              </div>
                              {/* 
                                                        <!-- Card body --> */}
                              <div
                                id="collapseThree5"
                                class="collapse"
                                role="tabpanel"
                                aria-labelledby="headingThree5"
                                data-parent="#accordionEx"
                              >
                                <div class="card-body">
                                  <div class="row">
                                    <div
                                      class="col-md-12"
                                      style={{ marginTop: "-15px" }}
                                    >
                                      <h5
                                        style={{
                                          fontFamily: "open sans",
                                          fontWeight: "bold",
                                          marginLeft: "79px",
                                        }}
                                        id="doclabel"
                                      >
                                        Please upload your property document
                                      </h5>
                                    </div>
                                  </div>
                                  <div class="row">
                                    <div class="col-md-4">
                                      <div
                                        class="card"
                                        id="cardshadow"
                                        style={{
                                          height: "255px",
                                          boxShadow:
                                            "0px 4px 8px rgba(0, 0, 255, 0.25)",
                                          borderRadius: "19px",
                                        }}
                                      >
                                        <card-body>
                                          <div class="row">
                                            <img
                                              src="../assets/images/do.png"
                                              class="card-img-top"
                                              alt="..."
                                              id="imgId"
                                              style={{
                                                borderTopLeftRadius: "18px",
                                                borderTopRightRadius: "18px",
                                                width: "42%",
                                                height: "141px",
                                                marginLeft: "77px",
                                                marginTop: "12px",
                                              }}
                                            />
                                            <div
                                              class="round-button"
                                              id="buttonRound"
                                              style={{
                                                marginTop: "-142px",
                                                marginLeft: "144px",
                                              }}
                                            >
                                              <button
                                                type="button"
                                                class="btn btn-danger bmd-btn-fab"
                                                id="buttonId"
                                                style={{
                                                  cursor: "pointer",
                                                  width: "50px",
                                                  height: "50px",
                                                  borderRadius: "54px",
                                                }}
                                              >
                                                X
                                              </button>
                                            </div>
                                          </div>
                                          <div class="row">
                                            <div
                                              class="col-md-12"
                                              style={{
                                                textAlign: "center",
                                                fontFamily: "Open sans",
                                                fontWeight: "bold",
                                              }}
                                            >
                                              Property Info
                                            </div>
                                          </div>
                                          <div class="row">
                                            <div
                                              class="col-md-12"
                                              style={{
                                                textAlign: "center",
                                                fontFamily: "Open sans",
                                                fontWeight: "bold",
                                                color: "#0000ff",
                                              }}
                                            >
                                              propertyfile.pdf
                                            </div>
                                          </div>
                                          <div
                                            class="row"
                                            style={{
                                              textAlign: "center",
                                              marginTop: "5px",
                                            }}
                                          >
                                            <input
                                              class="form-control"
                                              type="text"
                                              id="labelId"
                                              name="lastname"
                                              placeholder=""
                                              style={{
                                                marginLeft: "26px",
                                                marginTop: "4px",
                                              }}
                                              value="Home Property Doc"
                                            />
                                          </div>
                                        </card-body>
                                      </div>
                                    </div>
                                    <div class="col-md-4">
                                      <div
                                        class="card"
                                        id="cardshadow"
                                        style={{
                                          height: "255px",
                                          boxShadow:
                                            "0px 4px 8px rgba(0, 0, 255, 0.25)",
                                          borderRadius: "19px",
                                        }}
                                      >
                                        <card-body>
                                          <div class="row">
                                            <img
                                              src="../assets/images/do.png"
                                              class="card-img-top"
                                              alt="..."
                                              id="imgId"
                                              style={{
                                                borderTopLeftRadius: "18px",
                                                borderTopRightRadius: "18px",
                                                width: "42%",
                                                height: "141px",
                                                marginLeft: "77px",
                                                marginTop: "12px",
                                              }}
                                            />
                                            <div
                                              class="round-button"
                                              id="buttonRound"
                                              style={{
                                                marginTop: "-142px",
                                                marginLeft: "144px",
                                              }}
                                            >
                                              <button
                                                type="button"
                                                class="btn btn-danger bmd-btn-fab"
                                                id="buttonId"
                                                style={{
                                                  cursor: "pointer",
                                                  width: "50px",
                                                  height: "50px",
                                                  borderRadius: "54px",
                                                }}
                                              >
                                                X
                                              </button>
                                            </div>
                                          </div>
                                          <div class="row">
                                            <div
                                              class="col-md-12"
                                              style={{
                                                textAlign: "center",
                                                fontFamily: "Open sans",
                                                fontWeight: "bold",
                                              }}
                                            >
                                              Previous Policy Info
                                            </div>
                                          </div>
                                          <div class="row">
                                            <div
                                              class="col-md-12"
                                              style={{
                                                textAlign: "center",
                                                fontFamily: "Open sans",
                                                fontWeight: "bold",
                                                color: "#0000ff",
                                              }}
                                            >
                                              oldpolicy.pdf
                                            </div>
                                          </div>
                                          <div
                                            class="row"
                                            style={{
                                              textAlign: "center",
                                              marginTop: "5px",
                                            }}
                                          >
                                            <input
                                              class="form-control"
                                              type="text"
                                              id="labelId"
                                              name="lastname"
                                              placeholder="Note"
                                              style={{
                                                marginLeft: "26px",
                                                marginTop: "4px",
                                              }}
                                            />
                                          </div>
                                        </card-body>
                                      </div>
                                    </div>
                                    <div class="col-md-4">
                                      <div
                                        class="card"
                                        id="cardshadow"
                                        style={{
                                          height: "255px",
                                          boxShadow:
                                            "0px 4px 8px rgba(0, 0, 255, 0.25)",
                                          borderRadius: "19px",
                                        }}
                                      >
                                        <card-body>
                                          <div class="row">
                                            <img
                                              src="data:image/jpeg;base64,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"
                                              class="card-img-top"
                                              alt="..."
                                              id="imgId1"
                                              style={{
                                                width: "71%",
                                                height: "140px",
                                                marginLeft: "37px",
                                                marginTop: "12px",
                                                border: "6px solid black",
                                              }}
                                            />
                                            <div
                                              class="round-button"
                                              id="buttonRound"
                                              style={{
                                                marginTop: "-150px",
                                                marginLeft: "196px",
                                              }}
                                            >
                                              <button
                                                type="button"
                                                class="btn btn-danger bmd-btn-fab"
                                                id="buttonId"
                                                style={{
                                                  cursor: "pointer",
                                                  width: "50px",
                                                  height: "50px",
                                                  borderRadius: "54px",
                                                }}
                                              >
                                                X
                                              </button>
                                            </div>
                                          </div>
                                          <div class="row">
                                            <div
                                              class="col-md-12"
                                              style={{
                                                textAlign: "center",
                                                fontFamily: "Open sans",
                                                fontWeight: "bold",
                                              }}
                                            >
                                              Property Photo
                                            </div>
                                          </div>
                                          <div class="row">
                                            <div
                                              class="col-md-12"
                                              style={{
                                                textAlign: "center",
                                                fontFamily: "Open sans",
                                                fontWeight: "bold",
                                                color: "#0000ff",
                                              }}
                                            >
                                              hme.jpg
                                            </div>
                                          </div>
                                          <div
                                            class="row"
                                            style={{
                                              textAlign: "center",
                                              marginTop: "5px",
                                            }}
                                          >
                                            <input
                                              class="form-control"
                                              type="text"
                                              id="labelId"
                                              name="lastname"
                                              placeholder="Note"
                                              style={{
                                                marginLeft: "26px",
                                                marginTop: "4px",
                                              }}
                                            />
                                          </div>
                                        </card-body>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- Accordion wrapper --> */}
                        </div>
                      </div>

                      {/* <!-- buttons --> */}
                      <div class="row">
                        <div class="col-md-6">
                          <button
                            class="btn btn-outline-primary"
                            type="button"
                            style={{
                              width: "200px",
                              height: "40px",
                              marginLeft: "137px",
                              marginTop: "46px",
                              color: "white",
                              backgroundColor: "#0000ff",
                              borderRadius: "32px",
                            }}
                            id="save"
                          >
                            <span class="glyphicon glyphicon-plus" /> Add
                            Property
                          </button>
                        </div>
                        <div class="col-md-6">
                          <button
                            class="btn btn-outline-primary"
                            type="button"
                            onClick="content2()"
                            style={{
                              width: "200px",
                              height: "40px",
                              marginLeft: "0px",
                              marginTop: "46px",
                              color: "white",
                              backgroundColor: "#0000ff",
                              borderRadius: "32px",
                            }}
                            id="save2"
                          >
                            Save & Continue{" "}
                            <span class="glyphicon glyphicon-arrow-right" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-2" id="info">
                      <div class="row">
                        <div class="col-md-12">
                          <h4
                            style={{
                              marginLeft: "14px",
                              marginLeft: "0px",
                              fontFamily: "Open sans",
                              fontWeight: "bold",
                              marginLeft: "10px",
                              color: "#0000ff",
                            }}
                          >
                            Insured Detail&nbsp;&nbsp;
                            <i class="fa fa-edit" />
                          </h4>

                          <p
                            class="details"
                            style={{ display: "inline - block" }}
                          >
                            <span
                              class="glyphicon glyphicon-user"
                              style={{ color: "#0000ff" }}
                            />
                            Tamil
                          </p>
                          <p
                            class="details"
                            style={{
                              display: "inline-block",
                              marginTop: "2px !important",
                            }}
                          >
                            <span
                              class="glyphicon glyphicon-envelope"
                              style={{ color: "#0000ff" }}
                            />{" "}
                            limattamil07@gmail.com
                          </p>
                          <p
                            class="details"
                            style={{
                              display: "inline-block",
                              marginTop: "2px !important",
                            }}
                          >
                            <span
                              class="glyphicon glyphicon-earphone"
                              style={{ color: "#0000ff" }}
                            />{" "}
                            9988990099
                          </p>
                          <hr />
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12">
                          <h4
                            style={{
                              marginLeft: "14px",
                              marginLeft: "0px",
                              fontFamily: "Open sans",
                              fontWeight: "bold",
                              color: "#0000ff",
                            }}
                          >
                            Property Details&nbsp;&nbsp;
                            <i class="fa fa-edit" />
                          </h4>

                          <p class="details" style={{ fontWeight: "bold" }}>
                            Marina Homes
                          </p>
                          <p
                            class="details"
                            style={{ marginTop: "2px !important" }}
                          >
                            No 24,New Tower,
                          </p>
                          <p
                            class="details"
                            style={{ marginTop: "2px !important" }}
                          >
                            St.Thomas Mount,
                          </p>
                          <p
                            class="details"
                            style={{ marginTop: "2px !important" }}
                          >
                            Chennai-21
                          </p>
                          <hr />
                          <div class="row">
                            <div class="col-md-12">
                              <p class="details" style={{ fontWeight: "bold" }}>
                                Nelson Industry
                              </p>
                              <p
                                class="details"
                                style={{ marginTop: "2px !important" }}
                              >
                                No 5,Nelson
                              </p>
                              <p
                                class="details"
                                style={{ marginTop: "2px !important" }}
                              >
                                Guindy
                              </p>
                              <p
                                class="details"
                                style={{ marginTop: "2px !important" }}
                              >
                                Chennai-21
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="row"
                  id="page3"
                  style={{
                    marginRight: "-19px !important",
                    marginLeft: "-4px !important",
                  }}
                >
                  <div style={{ display: "none" }} id="horizontalwrap">
                    <br />
                    <div
                      id="circle4"
                      style={{
                        backgroundColor: "transparent",
                        border: "2px solid transparent",
                      }}
                    >
                      <span>
                        <i
                          class="fa fa-check-circle"
                          aria-hidden="true"
                          style={{
                            color: "green",
                            fontSize: "24px",
                            marginLeft: "-3px",
                            width: "20px",
                            height: "20px",
                          }}
                        />
                      </span>
                      <div
                        id="circle6"
                        style={{
                          backgroundColor: "transparent",
                          border: "2px solid transparent",
                        }}
                      >
                        <span>
                          <i
                            class="fa fa-check-circle"
                            aria-hidden="true"
                            style={{
                              color: "green",
                              fontSize: "24px",
                              marginLeft: "-3px",
                              width: "20px",
                              height: "20px",
                            }}
                          />
                        </span>
                        <div
                          id="circle7"
                          style={{
                            border: "1px solid blue",
                            backgroundColor: "blue",
                          }}
                        />
                      </div>
                    </div>
                    <hr
                      style={{
                        border: "2px solid green",
                        width: "80px",
                        marginLeft: "30px",
                        marginTop: "21px",
                      }}
                    />
                    <hr
                      style={{
                        order: "2px solid gray",
                        width: "80px",
                        marginLeft: "153px",
                        marginTop: "-24px",
                      }}
                    />

                    <div id="tit3">
                      {" "}
                      <h5
                        style={{
                          color: "gray",
                          fontFamily: "Open sans",
                          marginTop: "25px",
                          fontWeight: "bold",
                        }}
                      >
                        INSURED
                        <br /> DETAILS
                      </h5>
                    </div>
                    <div id="tit4">
                      {" "}
                      <h5
                        style={{
                          color: "gray",
                          fontFamily: "Open sans",
                          marginTop: "25px",
                          fontWeight: "bold",
                        }}
                      >
                        PROPERTY
                        <br /> DETAILS
                      </h5>
                    </div>
                    <div id="tit5">
                      {" "}
                      <h5
                        style={{
                          color: "gray",
                          fontFamily: "Open sans",
                          marginTop: "25px",
                          fontWeight: "bold",
                        }}
                      >
                        CONFIRM <br />
                        DETAILS
                      </h5>
                    </div>
                  </div>
                  <div class="col-md-2" id="verticalwrap">
                    <div
                      id="circle"
                      style={{
                        backgroundColor: "transparent",
                        border: "2px solid transparent",
                      }}
                    >
                      <span>
                        <i
                          class="fa fa-check-circle"
                          aria-hidden="true"
                          style={{
                            color: "green",
                            fontSize: "24px",
                            marginLeft: "-3px",
                            width: "20px",
                            height: "20px",
                          }}
                        />
                      </span>
                    </div>

                    <div id="tit">
                      <h5
                        style={{
                          marginLeft: "18px",
                          color: "green",
                          marginTop: "40px",
                          fontFamily: "Open sans",
                          fontWeight: "bold",
                        }}
                      >
                        INSURED DETAILS
                      </h5>
                    </div>

                    <div
                      class="line"
                      style={{
                        top: "63px",
                        height: "86px",
                        marginLeft: "74px",
                        borderLeft: "4px solid green",
                      }}
                    />
                    <div
                      id="circle"
                      style={{
                        marginTop: "10px",
                        backgroundColor: "transparent",
                        border: "2px solid transparent",
                      }}
                    >
                      <span>
                        <i
                          class="fa fa-check-circle"
                          aria-hidden="true"
                          style={{
                            color: "green",
                            fontSize: "24px",
                            marginLeft: "-3px",
                            width: "20px",
                            height: "20px",
                          }}
                        />
                      </span>
                    </div>
                    <div>
                      <h5
                        style={{
                          marginLeft: "18px",
                          color: "green",
                          marginTop: "40px",
                          fontFamily: "Open sans",
                          fontWeight: "bold",
                        }}
                      >
                        PROPERTY DETAILS
                      </h5>
                    </div>
                    <div
                      class="line"
                      style={{
                        top: "63px",
                        height: "86px",
                        marginLeft: "74px",
                      }}
                    />
                    <div id="circle" style={{ marginTop: "10px" }} />
                    <div>
                      <h5
                        style={{
                          marginLeft: "18px",
                          color: "#50649c",
                          marginTop: "40px",
                          fontFamily: "Open sans",
                          fontWeight: "bold",
                        }}
                      >
                        CONFIRM DETAILS
                      </h5>
                    </div>
                  </div>

                  <div class="col-md-10">
                    <div class="row">
                      <div class="col-md-12">
                        <h3
                          style={{
                            fontFamily: "Open sans",
                            fontWeight: "bold",
                            color: "#0000ff",
                            marginTop: "-33px",
                            marginBottom: "22px",
                          }}
                          id="heading1"
                        >
                          <span
                            class="glyphicon glyphicon-ok"
                            style={{
                              marginLeft: "-37px",
                              marginRight: "15px",
                              color: "gray",
                            }}
                            id="h1"
                          />
                          You are in last step.Please confirm your details
                        </h3>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-4" id="confirm1">
                        <h4
                          style={{
                            marginLeft: "-37px",
                            color: "#4b4a4a",
                            fontWeight: "bold",
                            fontSize: "15px",
                          }}
                        >
                          Insured Details &nbsp;&nbsp;
                          <i class="fa fa-edit" style={{ color: "#0000ff" }} />
                        </h4>
                        <div
                          class="card"
                          id="cardins"
                          style={{
                            width: "60%",
                            marginLeft: "-39px",
                            height: "408px",
                          }}
                        >
                          <div class="card-body">
                            <div class="container3" style={{ padding: "12px" }}>
                              <div class="row">
                                <div
                                  class="col-md-12"
                                  style={{ marginBottom: "-21px" }}
                                >
                                  <div class="card-cont">
                                    <p id="p-card">Product</p>
                                    <p id="p-val">Villa</p>
                                  </div>
                                </div>

                                <div
                                  class="col-md-12"
                                  style={{ marginBottom: "-16px" }}
                                >
                                  <div class="card-cont">
                                    <p id="p-card">Insured Name</p>
                                    <p id="p-val">Tamil</p>
                                  </div>
                                </div>
                                <div
                                  class="col-md-12"
                                  style={{ marginBottom: "-16px" }}
                                >
                                  <div class="card-cont">
                                    <p id="p-card">Contact Person</p>
                                    <p id="p-val">Tamil</p>
                                  </div>
                                </div>

                                <div
                                  class="col-md-12"
                                  style={{ marginBottom: "-16px" }}
                                >
                                  <div class="card-cont">
                                    <p id="p-card">E-mail Id</p>
                                    <p id="p-val">abc@gmail.com</p>
                                  </div>
                                </div>
                                <div
                                  class="col-md-12"
                                  style={{ marginBottom: "-16px" }}
                                >
                                  <div class="card-cont">
                                    <p id="p-card">License Id</p>
                                    <p id="p-val">123456</p>
                                  </div>
                                </div>

                                <div
                                  class="col-md-12"
                                  style={{ marginBottom: "-16px" }}
                                >
                                  <div class="card-cont">
                                    <p id="p-card">Address</p>
                                    <p id="p-val">
                                      33, sathyalakshmi heights, opposite to
                                      baba towers, tennur,Trichy
                                    </p>
                                  </div>
                                </div>
                                <div
                                  class="col-md-12"
                                  style={{ marginBottom: "-16px" }}
                                >
                                  <div class="card-cont">
                                    <p id="p-card">Contact</p>
                                    <p id="p-val">7854223654</p>
                                    <p id="p-val">9954223654</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="col-md-8">
                        <h4
                          style={{
                            marginLeft: "-186px",
                            color: "#4b4a4a",
                            fontWeight: "bold",
                            fontSize: "15px",
                          }}
                          id="detheading"
                        >
                          Property Details &nbsp;&nbsp;
                        </h4>

                        <div
                          class="card"
                          id="cardtable"
                          style={{
                            marginLeft: "-188px",
                          }}
                        >
                          <div class="card-body">
                            <div
                              id="table-scroll"
                              class="table-scroll"
                              style={{ width: "800px" }}
                            >
                              <table
                                cellpadding="0"
                                border="1"
                                border-color="grey"
                                cellspacing="0"
                                border="0"
                                id="main-table"
                                class="main-table"
                              >
                                <thead>
                                  <tr>
                                    <th
                                      scope="col"
                                      class="td-head headcol "
                                      style={{ width: "200px" }}
                                    >
                                      Description&nbsp;&nbsp;&nbsp;
                                      <i class="fa fa-arrow-right" />
                                    </th>
                                    <th
                                      scope="col"
                                      colspan="3"
                                      class="td-head"
                                      id="tab"
                                    >
                                      Hillcrest
                                      <br />
                                      Trichy&nbsp;&nbsp;
                                      <i
                                        class="fa fa-edit"
                                        style={{ color: "#0000ff" }}
                                      />
                                    </th>
                                    <th scope="col" colspan="3" class="td-head">
                                      Hillcrest <br />
                                      Chennai&nbsp;&nbsp;
                                      <i
                                        class="fa fa-edit"
                                        style={{ color: "#0000ff" }}
                                      />
                                    </th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <th
                                      class="td-body headcol zui-sticky-col td-body-head"
                                      style={{
                                        textAlign: "left",
                                      }}
                                    >
                                      <a
                                        href="#"
                                        id="toggle"
                                        style={{
                                          backgroundColor: "transparent",
                                          textAlign: "left",
                                        }}
                                        onClick="toggle_it('tr1a');toggle_it('tr1b');toggle_it('tr1c');toggle_it('tr1');toggle_it('tr2');toggle_it('tr3')"
                                      >
                                        + Risk Info
                                      </a>
                                    </th>
                                    <td
                                      class="td-body td-body-head"
                                      colspan="12"
                                    />
                                  </tr>
                                  <tr id="tr1a">
                                    <th
                                      class="td-body headcol zui-sticky-col"
                                      style={{
                                        textAlign: "left",
                                      }}
                                    >
                                      Country{" "}
                                    </th>
                                    <th class="td-body" colspan="3" id="row">
                                      UAE{" "}
                                    </th>
                                    <th class="td-body" colspan="3">
                                      UAE{" "}
                                    </th>
                                  </tr>
                                  <tr id="tr1b">
                                    <th
                                      class="td-body headcol zui-sticky-col"
                                      style={{
                                        textAlign: "left",
                                      }}
                                    >
                                      State{" "}
                                    </th>
                                    <th class="td-body" colspan="3" id="row">
                                      XXX
                                    </th>
                                    <th class="td-body" colspan="3">
                                      XXX
                                    </th>
                                  </tr>
                                  <tr id="tr1c">
                                    <th
                                      class="td-body headcol zui-sticky-col"
                                      style={{
                                        textAlign: "left",
                                      }}
                                    >
                                      City{" "}
                                    </th>
                                    <th class="td-body" colspan="3" id="row">
                                      {" "}
                                      Dubai
                                    </th>
                                    <th class="td-body" colspan="3">
                                      Abu dhabi
                                    </th>
                                  </tr>
                                  <tr id="tr1">
                                    <th
                                      class="td-body headcol zui-sticky-col"
                                      style={{
                                        textAlign: "left",
                                      }}
                                    >
                                      Governate{" "}
                                    </th>
                                    <th class="td-body" colspan="3" id="row">
                                      xxxx xxxxx xxxxxx xxxx{" "}
                                    </th>
                                    <th class="td-body" colspan="3">
                                      xxxxx xxxxxx xxxx{" "}
                                    </th>
                                  </tr>
                                  <tr id="tr2">
                                    <th
                                      class="td-body headcol zui-sticky-col"
                                      style={{
                                        textAlign: "left",
                                      }}
                                    >
                                      Addresss{" "}
                                    </th>
                                    <th class="td-body" colspan="3" id="row">
                                      <p class="address-text">
                                        Berham building
                                      </p>{" "}
                                    </th>
                                    <th class="td-body" colspan="3">
                                      <p class="address-text">
                                        {" "}
                                        Nelson Building
                                      </p>{" "}
                                    </th>
                                  </tr>
                                  <tr id="tr3">
                                    <th
                                      class="td-body headcol zui-sticky-col"
                                      style={{
                                        textAlign: "left",
                                      }}
                                    >
                                      Geocode{" "}
                                    </th>
                                    <th class="td-body" colspan="3" id="row">
                                      xxxx xxxxx xxxxxx xxxx{" "}
                                    </th>
                                    <th class="td-body" colspan="3">
                                      xxxxx xxxxxx xxxx{" "}
                                    </th>
                                  </tr>
                                  <tr>
                                    <th
                                      class="td-body headcol zui-sticky-col td-body-head"
                                      style={{
                                        textAlign: "left",
                                      }}
                                    >
                                      <a
                                        href="#"
                                        id="toggle"
                                        style={{
                                          backgroundColor: "transparent",
                                        }}
                                        onClick="toggle_it('tr4');toggle_it('tr5');toggle_it('tr6');toggle_it('tr7');toggle_it('tr8')"
                                      >
                                        + Property
                                      </a>
                                    </th>
                                    <td
                                      class="td-body td-body-head"
                                      colspan="12"
                                      style={{
                                        textAlign: "right",
                                        fontSize: "25px",
                                      }}
                                    >
                                      {" "}
                                      <span
                                        class="glyphicon glyphicon-chevron-right"
                                        style={{
                                          position: "sticky",
                                          color: "lightgray",
                                        }}
                                      />
                                    </td>
                                  </tr>
                                  <tr id="tr4" style={{ display: "none" }}>
                                    <th
                                      class="td-body headcol zui-sticky-col"
                                      style={{
                                        textAlign: "left",
                                      }}
                                    >
                                      Occupancy{" "}
                                    </th>
                                    <th class="td-body" colspan="3" id="row">
                                      Mall{" "}
                                    </th>
                                    <th class="td-body" colspan="3">
                                      Commercial Building
                                    </th>
                                  </tr>
                                  <tr id="tr5" style={{ display: "none" }}>
                                    <th
                                      class="td-body headcol zui-sticky-col"
                                      style={{
                                        textAlign: "left",
                                      }}
                                    >
                                      Company Type{" "}
                                    </th>
                                    <th class="td-body" colspan="3" id="row">
                                      Commercial{" "}
                                    </th>
                                    <th class="td-body" colspan="3">
                                      Non Commercial{" "}
                                    </th>
                                  </tr>
                                  <tr id="tr6" style={{ display: "none" }}>
                                    <th
                                      class="td-body headcol zui-sticky-col"
                                      style={{
                                        textAlign: "left",
                                      }}
                                    >
                                      No. of Floors{" "}
                                    </th>
                                    <td class="td-body" colspan="3" id="row">
                                      4{" "}
                                    </td>
                                    <td class="td-body" colspan="3">
                                      5{" "}
                                    </td>
                                  </tr>
                                  <tr id="tr7" style={{ display: "none" }}>
                                    <th
                                      class="td-body headcol zui-sticky-col"
                                      style={{
                                        textAlign: "left",
                                      }}
                                    >
                                      Year Built{" "}
                                    </th>
                                    <td class="td-body" colspan="3" id="row">
                                      2015{" "}
                                    </td>
                                    <td class="td-body" colspan="3">
                                      2015{" "}
                                    </td>
                                  </tr>
                                  <tr id="tr8" style={{ display: "none" }}>
                                    <th
                                      class="td-body headcol zui-sticky-col"
                                      style={{
                                        textAlign: "left",
                                      }}
                                    >
                                      Construction Type{" "}
                                    </th>
                                    <td class="td-body" colspan="3" id="row">
                                      Concrete{" "}
                                    </td>
                                    <td class="td-body" colspan="3">
                                      Concrete{" "}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th
                                      class="td-body headcol zui-sticky-col td-body-head"
                                      style={{
                                        textAlign: "left",
                                      }}
                                    >
                                      <a
                                        href="#"
                                        id="toggle"
                                        style={{
                                          backgroundColor: "transparent",
                                          textAlign: "left",
                                        }}
                                        onClick="toggle_it('tr8A');toggle_it('tr9');toggle_it('tr10');toggle_it('tr11');toggle_it('tr11a');toggle_it('tr11b');toggle_it('tr11c');toggle_it('tr11d');toggle_it('tr11e');toggle_it('tr11f');"
                                      >
                                        + Cover Info
                                      </a>
                                    </th>
                                    <td
                                      class="td-body td-body-head"
                                      colspan="12"
                                    />
                                  </tr>
                                  <tr id="tr8A" style={{ display: "none" }}>
                                    <th
                                      class="td-body headcol zui-sticky-col td-body-head"
                                      style={{
                                        textAlign: "left",
                                      }}
                                      id="index"
                                    >
                                      {" "}
                                      Cover Name
                                    </th>
                                    <td class="td-body td-body-head">
                                      Applicable{" "}
                                    </td>
                                    <td class="td-body td-body-head">
                                      Sum Insured{" "}
                                    </td>
                                    <td class="td-body td-body-head">
                                      Expected Rate{" "}
                                    </td>
                                    <td class="td-body td-body-head">
                                      Applicable
                                    </td>
                                    <td class="td-body td-body-head">
                                      Sum Insured{" "}
                                    </td>
                                    <td class="td-body td-body-head">
                                      Expected Rate{" "}
                                    </td>
                                  </tr>
                                  <tr id="tr9" style={{ display: "none" }}>
                                    <th
                                      class="td-body headcol zui-sticky-col"
                                      style={{
                                        textAlign: "left",
                                      }}
                                    >
                                      Fire & Lightening{" "}
                                    </th>
                                    <td class="td-body">
                                      <i
                                        class="fa fa-check"
                                        style={{ color: "green" }}
                                      />{" "}
                                    </td>
                                    <td class="td-body">10000 </td>
                                    <td class="td-body">7000 </td>
                                    <td class="td-body">
                                      <i
                                        class="fa fa-check"
                                        style={{ color: "green" }}
                                      />{" "}
                                    </td>
                                    <td class="td-body">10000 </td>
                                    <td class="td-body">9000 </td>
                                  </tr>
                                  <tr id="tr10" style={{ display: "none" }}>
                                    <th
                                      class="td-body headcol zui-sticky-col"
                                      style={{
                                        textAlign: "left",
                                      }}
                                    >
                                      Explosion
                                    </th>
                                    <td class="td-body">-</td>
                                    <td class="td-body">- </td>
                                    <td class="td-body">- </td>
                                    <td class="td-body">
                                      <i
                                        class="fa fa-check"
                                        style={{ color: "green" }}
                                      />{" "}
                                    </td>
                                    <td class="td-body">15000 </td>
                                    <td class="td-body">12000 </td>
                                  </tr>
                                  <tr id="tr11" style={{ display: "none" }}>
                                    <th
                                      class="td-body headcol zui-sticky-col"
                                      style={{
                                        textAlign: "left",
                                      }}
                                    >
                                      Liability
                                    </th>
                                    <td class="td-body">
                                      <i
                                        class="fa fa-check"
                                        style={{ color: "green" }}
                                      />{" "}
                                    </td>
                                    <td class="td-body">9000 </td>
                                    <td class="td-body">70000 </td>
                                    <td class="td-body">
                                      <i
                                        class="fa fa-check"
                                        style={{ color: "green" }}
                                      />{" "}
                                    </td>
                                    <td class="td-body">9000 </td>
                                    <td class="td-body">8000 </td>
                                  </tr>
                                  <tr id="tr11a" style={{ display: "none" }}>
                                    <th
                                      class="td-body headcol zui-sticky-col"
                                      style={{
                                        textAlign: "left",
                                        color: "#0000ff",
                                      }}
                                    >
                                      Policy level coverage
                                    </th>
                                    <td
                                      class="td-body"
                                      colspan="3"
                                      style={{
                                        textAlign: "center",
                                      }}
                                    >
                                      <i
                                        class="fa fa-check"
                                        style={{ color: "green" }}
                                      />
                                    </td>
                                    <td
                                      class="td-body"
                                      colspan="3"
                                      style={{
                                        textAlign: "center",
                                      }}
                                    >
                                      <i
                                        class="fa fa-check"
                                        style={{ color: "green" }}
                                      />
                                    </td>
                                  </tr>
                                  <tr id="tr11b" style={{ display: "none" }}>
                                    <th
                                      class="td-body headcol zui-sticky-col"
                                      style={{
                                        textAlign: "left",
                                      }}
                                    >
                                      BI{" "}
                                    </th>
                                    <td class="td-body">
                                      <i
                                        class="fa fa-check"
                                        style={{ color: "green" }}
                                      />{" "}
                                    </td>
                                    <td class="td-body">10000 </td>
                                    <td class="td-body">9000 </td>
                                    <td class="td-body">
                                      <i
                                        class="fa fa-check"
                                        style={{ color: "green" }}
                                      />{" "}
                                    </td>
                                    <td class="td-body">9000 </td>
                                    <td class="td-body">7000 </td>
                                  </tr>
                                  <tr id="tr11c" style={{ display: "none" }}>
                                    <th
                                      class="td-body headcol zui-sticky-col"
                                      style={{
                                        textAlign: "left",
                                      }}
                                    >
                                      BI2{" "}
                                    </th>
                                    <td class="td-body">
                                      <i
                                        class="fa fa-check"
                                        style={{ color: "green" }}
                                      />{" "}
                                    </td>
                                    <td class="td-body">10000 </td>
                                    <td class="td-body">9000 </td>
                                    <td class="td-body">
                                      <i
                                        class="fa fa-check"
                                        style={{ color: "green" }}
                                      />{" "}
                                    </td>
                                    <td class="td-body">9000 </td>
                                    <td class="td-body">8000</td>
                                  </tr>
                                  <tr id="tr11d" style={{ display: "none" }}>
                                    <th
                                      class="td-body headcol zui-sticky-col"
                                      style={{
                                        textAlign: "left",
                                      }}
                                    >
                                      Deductible
                                    </th>
                                    <td
                                      class="td-body"
                                      colspan="3"
                                      style={{
                                        textAlign: "center",
                                      }}
                                    >
                                      500
                                    </td>
                                    <td
                                      class="td-body"
                                      colspan="3"
                                      style={{
                                        textAlign: "center",
                                      }}
                                    >
                                      500
                                    </td>
                                  </tr>
                                  <tr id="tr11e" style={{ display: "none" }}>
                                    <th
                                      class="td-body headcol zui-sticky-col"
                                      style={{
                                        textAlign: "left",
                                      }}
                                    >
                                      Notes
                                    </th>
                                    <td
                                      class="td-body"
                                      colspan="3"
                                      style={{
                                        textAlign: "center",
                                      }}
                                    >
                                      Please consider my additional covers
                                    </td>
                                    <td
                                      class="td-body"
                                      colspan="3"
                                      style={{
                                        textAlign: "center",
                                      }}
                                    >
                                      Please consider my additional covers
                                    </td>
                                  </tr>
                                  <tr id="tr11f" style={{ display: "none" }}>
                                    <th
                                      class="td-body headcol zui-sticky-col"
                                      style={{
                                        textAlign: "left",
                                      }}
                                    >
                                      Remarks
                                    </th>
                                    <td
                                      class="td-body"
                                      colspan="3"
                                      style={{
                                        textAlign: "center",
                                      }}
                                    >
                                      XXX
                                    </td>
                                    <td
                                      class="td-body"
                                      colspan="3"
                                      style={{
                                        textAlign: "center",
                                      }}
                                    >
                                      XXX
                                    </td>
                                  </tr>
                                  <tr>
                                    <th
                                      class="td-body headcol zui-sticky-col td-body-head"
                                      style={{
                                        textAlign: "left",
                                      }}
                                    >
                                      <a
                                        href="#"
                                        id="toggle"
                                        style={{
                                          backgroundColor: "transparent",
                                          textAlign: "left",
                                        }}
                                        onClick="toggle_it('tr12');toggle_it('tr13');toggle_it('tr14');toggle_it('tr15')"
                                      >
                                        + Safety Measures
                                      </a>
                                    </th>
                                    <td
                                      class="td-body td-body-head"
                                      colspan="12"
                                    />
                                  </tr>
                                  <tr id="tr12" style={{ display: "none" }}>
                                    <th
                                      class="td-body headcol zui-sticky-col"
                                      style={{
                                        textAlign: "left",
                                      }}
                                    >
                                      Fire Alarm
                                    </th>
                                    <td class="td-body" colspan="3" id="row">
                                      <i
                                        class="fa fa-check"
                                        style={{ color: "green" }}
                                      />{" "}
                                    </td>
                                    <td class="td-body" colspan="3">
                                      <i
                                        class="fa fa-times"
                                        style={{ color: "red" }}
                                      />{" "}
                                    </td>
                                  </tr>
                                  <tr id="tr13" style={{ display: "none" }}>
                                    <th
                                      class="td-body headcol zui-sticky-col"
                                      style={{
                                        textAlign: "left",
                                      }}
                                    >
                                      Electrical Installation
                                    </th>
                                    <td class="td-body" colspan="3" id="row">
                                      <i
                                        class="fa fa-check"
                                        style={{ color: "green" }}
                                      />{" "}
                                    </td>
                                    <td class="td-body" colspan="3">
                                      <i
                                        class="fa fa-check"
                                        style={{ color: "green" }}
                                      />{" "}
                                    </td>
                                  </tr>
                                  <tr id="tr14" style={{ display: "none" }}>
                                    <th
                                      class="td-body headcol zui-sticky-col"
                                      style={{
                                        textAlign: "left",
                                      }}
                                    >
                                      Automatic Sprinkler
                                    </th>
                                    <td class="td-body" colspan="3" id="row">
                                      <i
                                        class="fa fa-check"
                                        style={{ color: "green" }}
                                      />{" "}
                                    </td>
                                    <td class="td-body" colspan="3">
                                      <i
                                        class="fa fa-times"
                                        style={{ color: "red" }}
                                      />{" "}
                                    </td>
                                  </tr>

                                  <tr id="tr15" style={{ display: "none" }}>
                                    <th
                                      class="td-body headcol zui-sticky-col"
                                      style={{
                                        textAlign: "left",
                                      }}
                                    >
                                      Safety and Security
                                    </th>
                                    <td class="td-body" colspan="3" id="row">
                                      <i
                                        class="fa fa-check"
                                        style={{ color: "green" }}
                                      />{" "}
                                    </td>
                                    <td class="td-body" colspan="3">
                                      <i
                                        class="fa fa-check"
                                        style={{ color: "green" }}
                                      />{" "}
                                    </td>
                                  </tr>
                                  <tr>
                                    <th
                                      class="td-body headcol zui-sticky-col td-body-head"
                                      style={{
                                        textAlign: "left",
                                      }}
                                    >
                                      <a
                                        href="#"
                                        id="toggle"
                                        style={{
                                          backgroundColor: "transparent",
                                        }}
                                        onClick="toggle_it('tr16');toggle_it('tr17');toggle_it('tr18')"
                                      >
                                        + Uploaded Documents
                                      </a>
                                    </th>
                                    <td
                                      class="td-body td-body-head"
                                      colspan="12"
                                    />
                                  </tr>
                                  <tr id="tr16" style={{ display: "none" }}>
                                    <th
                                      class="td-body headcol zui-sticky-col"
                                      style={{
                                        textAlign: "left",
                                      }}
                                    >
                                      Property Info{" "}
                                    </th>
                                    <th class="td-body" colspan="3" id="row">
                                      home.pdf,companyins.pdf
                                    </th>
                                    <th class="td-body" colspan="3">
                                      company1.pdf,company2.pdf
                                    </th>
                                  </tr>
                                  <tr id="tr17" style={{ display: "none" }}>
                                    <th
                                      class="td-body headcol zui-sticky-col"
                                      style={{ textAlign: "left" }}
                                    >
                                      Previous Policy Info{" "}
                                    </th>
                                    <th class="td-body" colspan="3" id="row">
                                      policy.pdf{" "}
                                    </th>
                                    <th class="td-body" colspan="3">
                                      policy.pdf{" "}
                                    </th>
                                  </tr>
                                  <tr id="tr18" style={{ display: "none" }}>
                                    <th
                                      class="td-body headcol zui-sticky-col"
                                      style={{ textAlign: "left" }}
                                    >
                                      Property Photo
                                    </th>
                                    <th class="td-body" colspan="3" id="row">
                                      hme1.jpg,comp.jpg,hme2.jpg{" "}
                                    </th>
                                    <th class="td-body" colspan="3">
                                      front.jpg,side.jpg,entrance.jpeg
                                    </th>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-4" />
                      <div class="col-md-4" style={{ marginLeft: "-185px" }}>
                        <label
                          for="lname"
                          style={{ color: "#0000ff" }}
                          id="inscompany"
                        >
                          Please Select your Insurance Company
                        </label>

                        <form>
                          <div class="multiselect" style={{ width: "183px" }}>
                            <div class="selectBox" onclick="showCheckboxes()">
                              <select
                                style={{
                                  width: "183%",

                                  borderColor: "1px solid aliceblue",
                                  border: "1px solid lightgray",
                                  height: "37px",
                                }}
                                id="multiselect"
                              >
                                <option>Insurance Company</option>
                              </select>
                              <div class="overSelect" />
                            </div>
                            <div id="checkboxes">
                              <label
                                for="one"
                                style={{ color: "#50649c", fontWeight: "bold" }}
                              >
                                <input type="checkbox" id="one" />
                                Azure
                              </label>
                              <label
                                for="two"
                                style={{ color: "#50649c", fontWeight: "bold" }}
                              >
                                <input type="checkbox" id="one" />
                                Belham ICB
                              </label>

                              <label
                                for="three"
                                style={{ color: "#50649c", fontWeight: "bold" }}
                              >
                                <input type="checkbox" id="one" />
                                Cabzul Moc
                              </label>
                              <label
                                for="one"
                                style={{ color: "#50649c", fontWeight: "bold" }}
                              >
                                <input type="checkbox" id="one" />
                                Canada BCI
                              </label>
                              <label
                                for="two"
                                style={{ color: "#50649c", fontWeight: "bold" }}
                              >
                                <input type="checkbox" id="one" />
                                Deal INS
                              </label>
                            </div>
                          </div>
                        </form>
                        <ul
                          style={{ fontFamily: "Open Sans", color: "Black" }}
                          id="list"
                        >
                          <li style={{ fontFamily: "Open Sans" }}>
                            Azure Insurance
                          </li>
                          <li style={{ fontFamily: "Open Sans" }}>
                            Behrom Insurance
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-4">
                        <label for="lname" id="labnote">
                          Notes
                        </label>
                        <textarea
                          rows="5"
                          class="form-control"
                          name="lastname"
                          placeholder="Notes"
                          id="note"
                          style={{ height: "100px!important", width: "522px" }}
                        />
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-12">
                        <button
                          class="btn btn-outline-primary"
                          type="button"
                          id="confirmBtn"
                          href="#"
                          style={{
                            width: "200px",
                            height: "40px",
                            marginBottom: "10px",
                            float: "right",
                            backgroundColor: "#0000ff",
                            color: "white",
                            borderRadius: "35px",
                            marginTop: "25px",
                          }}
                        >
                          Confirm & Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyInsurance;
