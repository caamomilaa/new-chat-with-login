import { StyledNavLink } from './home.styles';

const Home = () => {
	return (
		<>
			<h1>Accede al chat</h1>
			<nav>
				<StyledNavLink to='/signin'>Inicia sesión</StyledNavLink>
				<StyledNavLink to='/register'>Regístrate</StyledNavLink>
			</nav>
		</>
	);
};
export default Home;
