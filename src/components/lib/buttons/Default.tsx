interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ ...rest }: ButtonProps) {
  return <button {...rest}>contribute</button>
}
