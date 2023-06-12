import authLogo from "../assets/Logo.png"
import { AuthLogo } from "./style"

export default function Logo() {
  return (
    <AuthLogo>
      <img src={authLogo}/>
      <h1>DogShop</h1>
    </AuthLogo>
  )
}