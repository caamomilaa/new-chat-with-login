import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/config/firebase.config';
const Register = ({ navigate }) => {
	return (
		<>
			<h1>Regístrate</h1>
			<form onSubmit={event => registerUser(event, navigate)}>
				{/* En cuanto ocurra el evento submit, quiero que pases a la funcion el valor del evento y de navigate */}
				<div>
					<label htmlFor='email'>Email</label>
					<input name='email' type='text' />
				</div>
				<div>
					<label htmlFor='password'>Contraseña</label>
					<input name='password' type='text' />
				</div>
				<input type='submit' value='Registrarse' />
			</form>
		</>
	);
};

const registerUser = async (event, navigate) => {
	event.preventDefault();
	const formData = event.target; //accedo al form
	const email = formData.email.value; //accedo al valor del e.target en email
	const password = formData.password.value; //lo mismo, accedo al valor de password

	try {
		//intenta lo siguiente:
		await createUserWithEmailAndPassword(auth, email, password);
		//createUserWithEmailAndPassword() => método dado por firebase

		//en cuanto tengas los datos disponibles, crea un usuario de mail + password. Le pasamos la autenticación (vigilante), para ver si ha inciado sesión antes el user y creamos user con email y password sacados del formulario.
		navigate('/chat');
		//si lo de antes es true y está en orden, llévame al chat
	} catch (error) {
		console.log(error);
		//si no, dinos que error ocurre
	}
};

export default Register;
