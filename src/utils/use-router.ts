import { useContext } from 'react';
// @ts-ignore
import { __RouterContext, RouteComponentProps } from 'react-router';

interface IUseRouter {
  <T = {}>(): RouteComponentProps<T>;
}

const useRouter: IUseRouter = <T = {}>(): RouteComponentProps<T> => {
  const routerContext: RouteComponentProps<T> = useContext(__RouterContext);
  
  if (!routerContext) {
    throw new Error('use-react-router may only be used with react-router@^5.');
  }

  return routerContext;
};

export default useRouter;

// Resources: https://github.com/CharlesStover/use-react-router