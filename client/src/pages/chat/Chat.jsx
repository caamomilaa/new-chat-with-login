const Chat = ({ navigate }) => {
	return (
		<>
			<h1>Chat</h1>
			<form>
				<input type='text' />
				<button>Send</button>
			</form>
			<button onClick={() => logOut(navigate)}>Cerrar sesión</button>
		</>
	);
};

const logOut = navigate => {
	navigate('/');
};

export default Chat;
