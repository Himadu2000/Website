import React from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/General/Navigation/Navigation Bar";
import Footer from "./components/General/Footer/Footer";
import Homepage from "./components/Home Page/Homepage";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import TC from "./components/General/TC/TC";
import PP from "./components/General/PP/PP";
import Errorpage from "./components/Error Page/Error";
import About from "./components/About/components/Progress.js";
import Downloads from "./components/Downloads/Downloads";
import Alerts from "./components/Alerts/Alerts";
import Article from "./components/Articles/Article";
import SiteMap from "./components/Sitemap/Sitemap";
import News from "./components/News/News";
import Log from "./components/General/Log/Log";
import SignIn from "./components/General/Sign In/Signin";
import SignUp from "./components/General/Sign Up/Signup";
import User from "./components/General/User/Authentication";
// import Admin from "./components/Admin/Admin";

const Routes = () => {
  return (
    <div>
      <Navbar />
      <Alerts />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/Blog' component={Blog} />
        <Route path='/Downloads' component={Downloads} />
        <Route path='/Contact' component={Contact} />
        <Route path='/About' component={About} />
        <Route path='/TC' component={TC} />
        <Route path='/PP' component={PP} />
        <Route path='/Articles' component={Article} />
        <Route path='/Sitemap' component={SiteMap} />
        <Route path='/News' component={News} />
        <Route path='/Log' component={Log} />
        <Route path='/SignIn' component={SignIn} />
        <Route path='/SignUp' component={SignUp} />
        <Route path='/User' component={User} />
        {/** <Route path='/Admin' component={Admin} /> */}
        <Route component={Errorpage} />
      </Switch>
      <Footer />
    </div>
  );
};

export default Routes;
