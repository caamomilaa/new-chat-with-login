const Chat = ({ navigate }) => {
	return (
		<>
			<h1>Chat</h1>
			<button onClick={() => logOut(navigate)}>Cerrar sesión</button>
		</>
	);
};

const logOut = navigate => {
	navigate('/');
};

export default Chat;
