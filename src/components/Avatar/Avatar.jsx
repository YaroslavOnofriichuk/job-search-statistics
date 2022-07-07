import { useUserContext } from '../../userContext/userContext';
import { UserIcon } from '../icons/icons';
import { AvatarContainer } from './Avatar.Styled';

export const Avatar = () => {
  const { isLoggedIn, user } = useUserContext();

  return (
    <AvatarContainer url={user?.avatarURL}>
      {user?.avatarURL ? <div /> : <UserIcon size="5em" />}
    </AvatarContainer>
  );
};
