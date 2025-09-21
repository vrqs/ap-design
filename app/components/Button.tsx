interface ButtonProps {
  label: string;
  url: string;
}

const Button = ({ label, url }: ButtonProps) => {
  return (
    <a className="button-primary" href={url}>{label}</a>
  )
}

export default Button;