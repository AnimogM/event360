import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Auction from './pages/Auction';
import Profile from './pages/Profile';
import Payment from './pages/Payment';
import CreateEvent from './pages/CreateEvent';
import Categories from './pages/Categories';
import VendorsList from './pages/VendorsList';
import Vendor from './pages/Vendor';
import Category from './pages/Category';
import Service from './pages/Service';
import Error from './pages/Error';

function App() {
  return (
		<>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/create-event" element={<CreateEvent />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
				<Route path="/aution-house" element={<Auction />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/payment" element={<Payment />} />
				<Route path="/all-categories" element={<Categories />} />
				<Route path="/all-vendors" element={<VendorsList />} />
				<Route path="/vendor" element={<Vendor />} />
				<Route path="/service" element={<Service />} />
				<Route path="/all-categories/:id" element={<Category />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</>
  );
}

export default App;
