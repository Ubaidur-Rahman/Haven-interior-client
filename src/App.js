import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import AddATeamMember from './Components/DashBoard/AddATeamMember/AddATeamMember';
import AddReview from './Components/DashBoard/AddReview/AddReview';
import AddService from './Components/DashBoard/AddService/AddService';
import AdminOrderList from './Components/DashBoard/AdminOrderList/AdminOrderList';
import Book from './Components/DashBoard/Book/Book';
import BookingList from './Components/DashBoard/BookingList/BookingList';
import MakeAnAdmin from './Components/DashBoard/MakeAnAdmin/MakeAnAdmin';
import ManageServices from './Components/DashBoard/ManageServices/ManageServices';
import SideBar from './Components/DashBoard/SideBar/SideBar';
import Footer from './Components/Footer/Footer';
import AboutUs from './Components/Home/AboutUs/AboutUs';
import Home from './Components/Home/Home/Home';
import Navbar from './Components/Home/Home/Navbar/Navbar';
import WorkGallery from './Components/Home/WorkGallery/WorkGallery';
import Login from './Components/Login/Login';
import NoMatch from './Components/NoMatch/NoMatch';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext(); 

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/projects">
        <Navbar />
          <WorkGallery />
          <Footer />
        </Route>
        <Route path="/about">
        <Navbar />
        <AboutUs />
          <Footer />
        </Route>
        <PrivateRoute path="/dashboard">
          <SideBar />
          
        </PrivateRoute>
        <PrivateRoute path="/book">
          <Book />
        </PrivateRoute>
        <PrivateRoute path="/order/:_id">
          <Book />
        </PrivateRoute>
        <PrivateRoute path="/makeAnAdmin">
          <MakeAnAdmin />
        </PrivateRoute>
        <PrivateRoute path="/addATeamMember">
          <AddATeamMember />
        </PrivateRoute>
        <PrivateRoute path="/booking-list">
          <BookingList />
        </PrivateRoute>
        <PrivateRoute path="/order-list">
          <AdminOrderList />
        </PrivateRoute>
        <PrivateRoute path="/addService">
          <AddService />
        </PrivateRoute>
        <PrivateRoute path="/addReview">
          <AddReview />
        </PrivateRoute>
        <PrivateRoute path="/manage-services">
          <ManageServices />
        </PrivateRoute>
        <Route path="/*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
