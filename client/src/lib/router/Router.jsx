import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from '../../pages/home/Home';
import Register from '../../pages/register/Register';
import SignIn from '../../pages/sign-in/SignIn';
import Chat from '../../pages/chat/Chat';

const Router = () => {
	const navigate = useNavigate();
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/register' element={<Register navigate={navigate} />} />
			<Route path='/signin' element={<SignIn navigate={navigate} />} />
			<Route path='/chat' element={<Chat navigate={navigate} />} />
		</Routes>
	);
};
export default Router;
