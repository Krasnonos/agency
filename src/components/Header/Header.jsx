import icons from '../../images/icons.svg';
import { Button } from '../Button/Button';
import { HeaderSection, Conteiner, LogoLink, NavBtns } from './Header.stylde';

export const Header = () => {
  return (
    <HeaderSection>
      <Conteiner>
        <LogoLink href="#">
          <svg width="104" height="26">
            <use href={`${icons}#icon-Logo`}></use>
          </svg>
        </LogoLink>
        <NavBtns>
          <Button>Users</Button>
          <Button>Sign up</Button>
        </NavBtns>
      </Conteiner>
    </HeaderSection>
  );
};
