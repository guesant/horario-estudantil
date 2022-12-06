import {signIn, useSession} from "next-auth/react";

type IAuthGuardProps = {
  children?: any
  strict?: boolean
}

const AuthGuard = (props: IAuthGuardProps) => {
  const { children, strict = false } = props;

  const handleUnauthenticated = () => {
    if(strict) {
      signIn("keycloak")
    }
  }

  const { status } = useSession({ required: strict, onUnauthenticated: handleUnauthenticated });

  if(strict && status === "loading") {
    return <></>
  }

  return <>
    {children}
  </>
}

export default AuthGuard;