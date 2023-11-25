import { ButtonProps } from './ButtonProps'
import './button.css'

const Button = ({ text }: ButtonProps) => {
	return <button className="button">{text}</button>
}

export default Button
