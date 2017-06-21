import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

// layout container
import App from '../containers/App';

// containers
import FxCalculator from '../containers/FxCalculator';


// // jQuery
// import * as $ from 'jquery';
// // bootstrap
// import 'bootstrap/dist/js/bootstrap.min.js';
// // side nav
// import '../utils/bower_components/sidebar-nav/dist/sidebar-nav.min';
// // js slim scroll
// import '../utils/jquery.slimscroll';
// // wave effect
// import '../utils/waves';
// // custom theme templates
// require('../utils/custom');

export default (
    <Router>
        <div id="wrapper">
            {/*Navigation*/}
            <nav className="navbar navbar-default navbar-static-top m-b-0">
                <div className="navbar-header"> <a className="navbar-toggle hidden-sm hidden-md hidden-lg " href="javascript:void(0)" data-toggle="collapse" data-target=".navbar-collapse"><i className="fa fa-bars"></i></a>
                    <div className="top-left-part"><a className="logo" href="index.html"><b><img src="/dist/public/assets/images/pixeladmin-logo.png" alt="home" /></b><span className="hidden-xs"><img src="../plugins/images/pixeladmin-text.png" alt="home" /></span></a></div>
                    <ul className="nav navbar-top-links navbar-left m-l-20 hidden-xs">
                        <li>
                            <form role="search" className="app-search hidden-xs">
                                <input type="text" placeholder="Search..." className="form-control" /> <a href=""><i className="fa fa-search"></i></a>
                            </form>
                        </li>
                    </ul>
                    <ul className="nav navbar-top-links navbar-right pull-right">
                        <li>
                            <a className="profile-pic" href="#"> 
                                <img src="/dist/public/assets/images/users/varun.jpg" alt="user-img" width="36" className="img-circle" />
                            <b className="hidden-xs">Steave</b> 
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/*Left navbar-header*/}
            <div className="navbar-default sidebar" role="navigation">
                <div className="sidebar-nav navbar-collapse slimscrollsidebar">
                    <ul className="nav" id="side-menu">
                        <li>
                            <a href="index.html" className="waves-effect"><i className="fa fa-clock-o fa-fw" aria-hidden="true"></i><span className="hide-menu">Dashboard</span></a>
                        </li>
                        <li>
                            <a href="profile.html" className="waves-effect"><i className="fa fa-user fa-fw" aria-hidden="true"></i><span className="hide-menu">Profile</span></a>
                        </li>
                        <li>
                            <a href="basic-table.html" className="waves-effect"><i className="fa fa-table fa-fw" aria-hidden="true"></i><span className="hide-menu">Basic Table</span></a>
                        </li>
                        <li>
                            <a href="fontawesome.html" className="waves-effect"><i className="fa fa-font fa-fw" aria-hidden="true"></i><span className="hide-menu">Icons</span></a>
                        </li>
                        <li>
                            <a href="map-google.html" className="waves-effect"><i className="fa fa-globe fa-fw" aria-hidden="true"></i><span className="hide-menu">Google Map</span></a>
                        </li>
                        <li>
                            <a href="blank.html" className="waves-effect"><i className="fa fa-columns fa-fw" aria-hidden="true"></i><span className="hide-menu">Blank Page</span></a>
                        </li>
                        <li>
                            <a href="404.html" className="waves-effect"><i className="fa fa-info-circle fa-fw" aria-hidden="true"></i><span className="hide-menu">Error 404</span></a>
                        </li>
                    </ul>
                    <div className="center p-20">
                        <span className="hide-menu"><a href="http://wrappixel.com/templates/pixeladmin/" target="_blank" className="btn btn-danger btn-block btn-rounded waves-effect waves-light">Upgrade to Pro</a></span>
                    </div>
                </div>
            </div>

            {/*Page Content*/}
            <div id="page-wrapper">
                <div className="container-fluid">
                    <div className="row bg-title">
                        <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                            <h4 className="page-title">Blank Page </h4> </div>
                        <div className="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                            <a href="http://wrappixel.com/templates/pixeladmin/" 
                            target="_blank" 
                            className="btn btn-danger pull-right m-l-20 btn-rounded btn-outline hidden-xs hidden-sm waves-effect waves-light">
                            Upgrade to Pro</a>
                            <ol className="breadcrumb">
                                <li><a href="#">Dashboard</a></li>
                                <li className="active">Blank Page</li>
                            </ol>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="white-box">
                                <h3 className="box-title">Blank page</h3> </div>
                        </div>
                    </div>
                </div>
                {/*container-fluid*/}
                <footer className="footer text-center"> 2017 &copy; Pixel Admin brought to you by wrappixel.com </footer>
            </div>

            {/*Route Rendering*/}
            {/*<div>
                <Route exact path='/' component={App} />
                <Route path='/fx' component={FxCalculator} />
            </div> */}

            {/*<div>
                <hr />
                <h4>Footer</h4>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/fx">Forex Calculator</Link></li>
                </ul>
            </div>*/}
        </div>    
    </Router>
);
