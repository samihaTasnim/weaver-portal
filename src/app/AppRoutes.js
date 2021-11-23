import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';
// const token = localStorage.getItem('user-token');
// console.log('token: ', token);



// const Login = lazy(() => import('./user-pages/Login'));
const Login = lazy(() => import('./user-pages/Login2'));
const Register1 = lazy(() => import('./user-pages/Register'));
const Otp = lazy(() => import('./user-pages/Otp'));

const Dashboard = lazy(() => import('./dashboard/Dashboard'));
const Page1 = lazy(() => import('./components/Page1/Page1'))
const CheckerDashboard = lazy(() => import ('./components/CheckerPanel/Checker'))

const QualityInfo = lazy(() => import('./components/QualityInfo/qualityInfo'));

const Weaving = lazy(() => import('./components/weaving/Weaving'));

const Sizing = lazy(() => import('./components/weaving/Weaving'));

const Weft = lazy(() => import('./components/Weft/Weft'));

const WeaverWeft = lazy(() => import('./components/WeaverWeft/WeaverWeft'));

const Production = lazy(() => import('./components/Production/Production'));
// const WProduction = lazy(() => import('./components/WProduction/WProduction'));
const WProduction = lazy(() => import("./components/WeaverProductionUpdate/WeaverProductionUpdate"));
// const WProduction = lazy(() => import('./components/WProduction/WProduction'));

const TraderEnR = lazy(() => import('./components/TraderEnR/TraderEnR'));

const Beam = lazy(() => import('./components/Beam/Beam'));

const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));

const BasicTable = lazy(() => import('./tables/BasicTable'));


const ChartJs = lazy(() => import('./charts/ChartJs'));

const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

class AppRoutes extends Component {
  componentDidMount() {
    document.body.classList.add('sidebar-icon-only')
  }
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/weaver-dashboard" component={Dashboard} />
          <Route path="/weaver-dashboard/qualityInfo" component={QualityInfo} />
          <Route path="/weaver-dashboard/weaving-enquiries" component={Weaving} />
          <Route path="/weaver-dashboard/sizing-enquiries" component={Sizing} />
          <Route path="/weaver-dashboard/Weft" component={Weft} />
          <Route path="/trader-dashboard/WeaverWeft" component={WeaverWeft} />
          <Route path="/weaver-dashboard/Production" component={Production} />
          <Route path="/weaver-dashboard/beam-inward" component={Beam} />
          <Route path="/trader-dashboard/trader-enquiries" component={TraderEnR} />
          <Route path="/trader-dashboard/WProduction" component={WProduction} />
          <Route path="/user-pages/otp" component={Otp}/>
          <Route path="/basic-ui/dropdowns" component={Dropdowns} />
          <Route path="/weaver-dashboard/page-1" component={Page1} />
          <Route path="/checker-dashboard" component={CheckerDashboard} />

          <Route path="/tables/basic-table" component={BasicTable} />
          <Route path="/charts/chart-js" component={ChartJs} />
          <Route exact path="/user-pages/login-1" component={Login} />
          <Route path="/user-pages/register-1" component={Register1} />
        

          <Route path="/error-pages/error-404" component={Error404} />
          <Route path="/error-pages/error-500" component={Error500} />
          <Redirect exact to="/user-pages/login-1" />
          {/* {token === undefined ?
            (<Redirect to="/user-pages/login-1" />)
            : (<Redirect to="/dashboard" />)}
          <Redirect to="/dashboard" /> */}
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;