import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
import dashboardIco from './svgs/DashboardIco.svg'
import qualityIco from './svgs/Ico2.svg'
import weftGatepassIco from './svgs/Ico3.svg'
import sizingIco from './svgs/Ico4.svg'
import productionUpdateIco from './svgs/Ico6.svg'
import beamInwardIco from './svgs/Ico7.svg'
import productionIco from './svgs/Ico8.svg'
import traderEnqIco from './svgs/Ico10.svg'
import weaverWeftIco from './svgs/Ico5.svg'

// import { Trans } from 'react-i18next';

class Sidebar extends Component {
  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({ [menuState]: false });
    } else if (Object.keys(this.state).length === 0) {
      this.setState({ [menuState]: true });
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({ [i]: false });
      });
      this.setState({ [menuState]: true });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({ [i]: false });
    });

    const dropdownPaths = [
      { path: '/apps', state: 'appsMenuOpen' },
      { path: '/basic-ui', state: 'basicUiMenuOpen' },
      { path: '/form-elements', state: 'formElementsMenuOpen' },
      { path: '/tables', state: 'tablesMenuOpen' },
      { path: '/icons', state: 'iconsMenuOpen' },
      { path: '/charts', state: 'chartsMenuOpen' },
      { path: '/user-pages', state: 'userPagesMenuOpen' },
      { path: '/weving', state: 'wevingMenuOpen' },
      { path: '/error-pages', state: 'errorPagesMenuOpen' },
    ];

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({ [obj.state]: true })
      }
    }));

  }
  render() {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="text-center sidebar-brand-wrapper d-flex align-items-center">
          <h3 className='sidebar-brand brand-logo font-weight-semibold'>Logo</h3>
          {/* <h3 className="mb-0 font-weight-semibold">Dashboard</h3> */}

          {/* <a className="sidebar-brand brand-logo" href="index.html"><img src={require("../../assets/images/logo.svg")} alt="logo" /></a> */}
          <a className="sidebar-brand brand-logo-mini pt-3" href="index.html"><img src={require("../../assets/images/logo-mini.svg")} alt="logo" /></a>
        </div>
        <ul className="nav list-unstyled">
          {/* <li className="nav-item nav-profile not-navigation-link">
            <div className="nav-link">
              <Dropdown>
                <Dropdown.Toggle className="nav-link user-switch-dropdown-toggler p-0 toggle-arrow-hide bg-transparent border-0 w-100">
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="profile-image">
                      <img className="img-xs rounded-circle" src={require("../../assets/images/faces/face8.jpg")} alt="profile" />
                      <div className="dot-indicator bg-success"></div>
                    </div>
                    <div className="text-wrapper">
                      <p className="profile-name">Allen Moreno</p>
                      <p className="designation">Premium user</p>
                    </div>

                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="preview-list navbar-dropdown">
                  <Dropdown.Item className="dropdown-item p-0 preview-item d-flex align-items-center" href="!#" onClick={evt => evt.preventDefault()}>
                    <div className="d-flex">
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                        <i className="mdi mdi-bookmark-plus-outline mr-0"></i>
                      </div>
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center border-left border-right">
                        <i className="mdi mdi-account-outline mr-0"></i>
                      </div>
                      <div className="py-3 px-4 d-flex align-items-center justify-content-center">
                        <i className="mdi mdi-alarm-check mr-0"></i>
                      </div>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt => evt.preventDefault()}>
                    Manage Accounts
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt => evt.preventDefault()}>
                    Change Password
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt => evt.preventDefault()}>
                    Check Inbox
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item preview-item d-flex align-items-center text-small" onClick={evt => evt.preventDefault()}>
                    Sign Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </li> */}

          {/* <li className={this.isPathActive('/weaver-dashboard') ? 'nav-item active' : 'nav-item'} style={{listStyleType: 'none'}}>
            <Link className="nav-link" to="/weaver-dashboard">
              <img src={dashboardIco} alt="" />
              <span className="menu-title"> &nbsp; &nbsp;  Dashboard</span>
            </Link>
          </li>
          <li className={this.isPathActive('/weaver-dashboard/qualityInfo') ? 'nav-item active' : 'nav-item'}>
            <Link className="nav-link" to="/weaver-dashboard/qualityInfo">
             <img src={qualityIco} alt="" />
              <span className="menu-title"> &nbsp; &nbsp; Quality Information</span>
            </Link>
          </li>
          <li className={this.isPathActive('/weaver-dashboard/weaving-enquiries') ? 'nav-item active' : 'nav-item'}>
            <Link className="nav-link" to="/weaver-dashboard/weaving-enquiries">
            <img src={qualityIco} alt="" />
              <span className="menu-title"> &nbsp; &nbsp; Weaving Enquires & Responses</span>
            </Link>
          </li>
          <li className={this.isPathActive('/weaver-dashboard/sizing-enquiries') ? 'nav-item active' : 'nav-item'}>
            <Link className="nav-link" to="/weaver-dashboard/sizing-enquiries">
              <img src={sizingIco} alt="" />
              <span className="menu-title"> &nbsp; &nbsp; Sizing Enquiries & Responses</span>
            </Link>
          </li> */}


          {/* <li className={this.isPathActive('/user-pages') ? 'nav-item active' : 'nav-item'}>
            <div className={this.state.wevingMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => this.toggleMenuState('wevingMenuOpen')} data-toggle="collapse">
              <i className="mdi mdi-lock-outline menu-icon"></i>
              <span className="menu-title"> Enquires & Responses</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.wevingMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={this.isPathActive('/Weaving') ? 'nav-link active' : 'nav-link'} to="/Weaving">Weaving</Link></li>
                <li className="nav-item"> <Link className={this.isPathActive('/Sizing') ? 'nav-link active' : 'nav-link'} to="/Sizing">Sizing</Link></li>
              </ul>
            </Collapse>
          </li> */}


          {/* <li className={this.isPathActive('/weaver-dashboard/Weft') ? 'nav-item active' : 'nav-item'}>
            <Link className="nav-link" to="/weaver-dashboard/Weft">
              <img src={weftGatepassIco} alt="" />
              <span className="menu-title"> &nbsp; &nbsp; Weft Gatepass</span>
            </Link>
          </li>

          <li className={this.isPathActive('/weaver-dashboard/Production') ? 'nav-item active' : 'nav-item'}>
            <Link className="nav-link" to="/weaver-dashboard/Production">
              <img src={productionIco} alt="" />
              <span className="menu-title"> &nbsp; &nbsp; Production</span>
            </Link>
          </li>

          <li className={this.isPathActive('/weaver-dashboard/beam-inward') ? 'nav-item active' : 'nav-item'}>
            <Link className="nav-link" to="/weaver-dashboard/beam-inward">
              <img src={beamInwardIco} alt="" />
              <span className="menu-title"> &nbsp; &nbsp; Beam Inward and Beam Status</span>
            </Link>
          </li> */}
          <li className={this.isPathActive('/trader-dashboard/trader-enquiries') ? 'nav-item active' : 'nav-item'}>
            <Link className="nav-link" to="/trader-dashboard/trader-enquiries">
              <img src={traderEnqIco} alt="" />
              <span className="menu-title"> &nbsp; &nbsp; TraderEnquries and Responses</span>
            </Link>
          </li>
          <li className={this.isPathActive('/trader-dashboard/WProduction') ? 'nav-item active' : 'nav-item'}>
            <Link className="nav-link" to="/trader-dashboard/WProduction">
              <img src={productionUpdateIco} alt="" />
              <span className="menu-title"> &nbsp; &nbsp; Prduction Update</span>
            </Link>
          </li>
          <li className={this.isPathActive('/trader-dashboard/WeaverWeft') ? 'nav-item active' : 'nav-item'}>
            <Link className="nav-link" to="/trader-dashboard/WeaverWeft">
             <img src={weaverWeftIco} alt="" />
              <span className="menu-title"> &nbsp; &nbsp; Weaver Weft Inward</span>
            </Link>
          </li>

          {/* <li className={this.isPathActive('/basic-ui') ? 'nav-item active' : 'nav-item'}>
            <div className={this.state.basicUiMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => this.toggleMenuState('basicUiMenuOpen')} data-toggle="collapse">
              <i className="mdi mdi-crosshairs-gps menu-icon"></i>
              <span className="menu-title">Basic UI Elements</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.basicUiMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={this.isPathActive('/basic-ui/buttons') ? 'nav-link active' : 'nav-link'} to="/basic-ui/buttons">Buttons</Link></li>
                <li className="nav-item"> <Link className={this.isPathActive('/basic-ui/dropdowns') ? 'nav-link active' : 'nav-link'} to="/basic-ui/dropdowns">Dropdowns</Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={this.isPathActive('/form-elements') ? 'nav-item active' : 'nav-item'}>
            <div className={this.state.formElementsMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => this.toggleMenuState('formElementsMenuOpen')} data-toggle="collapse">
              <i className="mdi mdi-format-list-bulleted menu-icon"></i>
              <span className="menu-title">Form Elements</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.formElementsMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={this.isPathActive('/form-elements/basic-elements') ? 'nav-link active' : 'nav-link'} to="/form-elements/basic-elements">Basic Elements</Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={this.isPathActive('/tables') ? 'nav-item active' : 'nav-item'}>
            <div className={this.state.tablesMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => this.toggleMenuState('tablesMenuOpen')} data-toggle="collapse">
              <i className="mdi mdi-table-large menu-icon"></i>
              <span className="menu-title">Tables</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.tablesMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={this.isPathActive('/tables/basic-table') ? 'nav-link active' : 'nav-link'} to="/tables/basic-table">Basic Table</Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={this.isPathActive('/icons') ? 'nav-item active' : 'nav-item'}>
            <div className={this.state.iconsMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => this.toggleMenuState('iconsMenuOpen')} data-toggle="collapse">
              <i className="mdi mdi-account-box-outline menu-icon"></i>
              <span className="menu-title">Icons</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.iconsMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={this.isPathActive('/icons/mdi') ? 'nav-link active' : 'nav-link'} to="/icons/mdi">Material</Link></li>
              </ul>
            </Collapse>
          </li>
          <li className={this.isPathActive('/charts') ? 'nav-item active' : 'nav-item'}>
            <div className={this.state.chartsMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => this.toggleMenuState('chartsMenuOpen')} data-toggle="collapse">
              <i className="mdi mdi-chart-line menu-icon"></i>
              <span className="menu-title">Charts</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.chartsMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={this.isPathActive('/charts/chart-js') ? 'nav-link active' : 'nav-link'} to="/charts/chart-js">Chart Js</Link></li>
              </ul>
            </Collapse>
          </li> */}
          {/* <li className={this.isPathActive('/user-pages') ? 'nav-item active' : 'nav-item'}>
            <div className={this.state.userPagesMenuOpen ? 'nav-link menu-expanded' : 'nav-link'} onClick={() => this.toggleMenuState('userPagesMenuOpen')} data-toggle="collapse">
              <i className="mdi mdi-lock-outline menu-icon"></i>
              <span className="menu-title">User Pages</span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.userPagesMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item"> <Link className={this.isPathActive('/user-pages/login-1') ? 'nav-link active' : 'nav-link'} to="/user-pages/login-1">Login</Link></li>
                <li className="nav-item"> <Link className={this.isPathActive('/user-pages/register-1') ? 'nav-link active' : 'nav-link'} to="/user-pages/register-1">Register</Link></li>
              </ul>
            </Collapse>
          </li> */}
          <li className={this.isPathActive('/weaver-dashboard/page-1') ? 'nav-item active' : 'nav-item'}>
            <Link className="nav-link" to="/weaver-dashboard/page-1">
              <i className="mdi mdi-television menu-icon"></i>
              <span className="menu-title">Page 1</span>
            </Link>
          </li>
          {/* <li className={this.isPathActive('/checker-dashboard') ? 'nav-item active' : 'nav-item'}>
            <Link className="nav-link" to="/checker-dashboard">
              <i className="mdi mdi-television menu-icon"></i>
              <span className="menu-title">Checker Dashboard</span>
            </Link>
          </li> */}
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add className 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {

      el.addEventListener('mouseover', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function () {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default withRouter(Sidebar);