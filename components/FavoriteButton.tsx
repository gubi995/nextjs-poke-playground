import { HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLDivElement> {
  favorite: boolean;
}

const FavoriteButton = ({ favorite, ...rest }: Props) => {
  return (
    <div style={{ cursor: rest.onClick ? 'pointer' : 'default' }} {...rest}>
      {favorite ? '💗' : '🤍'}
    </div>
  );
};

export default FavoriteButton;
