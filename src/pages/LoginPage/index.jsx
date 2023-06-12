import { useState } from "react";
import { FormContainer } from "../RegisterPage/style";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isClicked, setIsClicked] = useState(false)
  const navigate = useNavigate()

	return (
		<>
			<FormContainer>
				<Logo />
				<form>
					<input
						placeholder="E-mail"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						disabled={isClicked}
					/>
					<input
						placeholder="Senha"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						disabled={isClicked}
					/>
					<button type="submit" disabled={isClicked} onClick={() => setIsClicked(true)}>
						Login
					</button>
				</form>
				<p onClick={() => navigate('/signup')}>
					Não tem uma conta ainda? Registre-se!
				</p>
			</FormContainer>
		</>
	);
}
