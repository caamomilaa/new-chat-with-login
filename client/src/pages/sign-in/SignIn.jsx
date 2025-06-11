import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/config/firebase.config';

const SignIn = ({ navigate }) => {
	return (
		<>
			<h1>Inicia sesión</h1>
			<form onSubmit={event => signInUser(event, navigate)}>
				<div>
					<label htmlFor='email'>Email</label>
					<input name='email' type='text' />
				</div>
				<div>
					<label htmlFor='password'>Contraseña</label>
					<input name='password' type='text' />
				</div>
				<input type='submit' value='Iniciar sesión' />
			</form>
		</>
	);
};

const signInUser = async (event, navigate) => {
	event.preventDefault();
	//Vovlemos a hacer lo mismo que en register. Primero, sacar los valores que van a ser las credenciales.
	const formData = event.target; //accedo al form
	const email = formData.email.value; //accedo al valor del e.target en email
	const password = formData.password.value; //lo mismo, accedo al valor de password

	try {
		await signInWithEmailAndPassword(auth, email, password);
		//con el método que nos da firebase, le pasamod los parámetros y validamos las credenciales.
		navigate('/chat');
	} catch (error) {
		console.log(error);
	}
};

export default SignIn;
