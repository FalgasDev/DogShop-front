import { useState } from 'react';
import { FormContainer } from './style';
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';

export default function RegisterPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [isClicked, setIsClicked] = useState(false);
	const navigate = useNavigate();

	function register() {
		setIsClicked(true);
		navigate('/login');
	}

	return (
		<>
			<FormContainer>
				<Logo />
				<form onSubmit={register}>
					<input
						placeholder="E-mail"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						disabled={isClicked}
					/>
					<input
						placeholder="Senha"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						disabled={isClicked}
					/>
					<input
						placeholder="Nome"
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
						disabled={isClicked}
					/>
					<button type="submit" disabled={isClicked}>
						Sign Up
					</button>
				</form>
				<p onClick={() => navigate('/login')}>Já tem uma conta? Faça login!</p>
			</FormContainer>
		</>
	);
}
