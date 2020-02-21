import { useRouter } from 'next/router';
import styled from 'styled-components';
import Link from 'next/link';

interface Props {
  href: string;
  text: string;
}

interface LinkTextProps {
  active?: boolean;
}

const StyledLinkText = styled.span<LinkTextProps>`
  color: ${(props) => (props.active ? 'blue' : 'black')};
  text-decoration: none;
  margin: 0 1em;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    color: blue;
  }
`;

const ActiveLink = ({ href, text }: Props) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href}>
      <StyledLinkText active={isActive}>{text}</StyledLinkText>
    </Link>
  );
};

export default ActiveLink;
