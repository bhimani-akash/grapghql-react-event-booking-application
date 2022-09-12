import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AuthPage from "./pages/Auth";
import BookingsPage from "./pages/Bookings";
import EventsPage from "./pages/Events";
import MainNavigation from "./components/Navigation/MainNavigation";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <MainNavigation />
      <main className="main-content">
        <Routes>
          <Route exact path="/" to="/auth" />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/bookings" element={<BookingsPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

// class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <Routes>
//           <Route exact path="/" to="/auth" />
//           <Route path="/auth" element={AuthPage} />
//           <Route path="/events" element={EventsPage} />
//           <Route path="/bookings" element={BookingsPage} />
//         </Routes>
//       </BrowserRouter>
//     );
//   }
// }

// export default App;
