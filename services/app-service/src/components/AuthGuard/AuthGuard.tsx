import { signIn, signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';

type IAuthGuardProps = {
  children?: any;
  strict?: boolean;
};

const AuthGuard = (props: IAuthGuardProps) => {
  const { children, strict = false } = props;

  const handleUnauthenticated = () => {
    if (strict) {
      signIn('keycloak');
    }
  };

  const { status, data: session } = useSession({
    required: strict,
    onUnauthenticated: handleUnauthenticated,
  });

  useEffect(() => {
    if (session?.error === 'RefreshAccessTokenError') {
      signOut();
      // signIn('keycloak'); // Force sign in to hopefully resolve error
    }
  }, [session]);

  if (strict && status === 'loading') {
    return <></>;
  }

  return <>{children}</>;
};

export default AuthGuard;
