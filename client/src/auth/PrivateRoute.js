import { Route, Redirect } from "react-router-dom";
import { useUser } from "./useUser";

export const PrivateRoute = (props) => {
  const user = useUser();

  console.log(props);

  if (!user) {
    return <Redirect to="/login" />;
  }

  return <Route {...props} />;
};
