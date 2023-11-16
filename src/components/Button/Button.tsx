import { ButtonProps } from './types';

function Button({ children, icon, iconAlt, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className='px-2 py-2 bg-[#F5565E] rounded-md text-white flex justify-center items-center shadow-md shadow-[#F5565E80]'
    >
      {icon ? <img className='inline pr-1' src={icon} alt={iconAlt || 'button icon'} /> : null}
      {children}
    </button>
  );
}

export default Button;
