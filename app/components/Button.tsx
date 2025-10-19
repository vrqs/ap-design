interface ButtonProps {
  label: string;
  url: string;
  size: string;
}

const Button = ({ label, url, size }: ButtonProps) => {
  const className = `button button-${size}`;
  
  return (
    <a className={`${className} -primary`} href={url}>{label}</a>
  )
}

export default Button;