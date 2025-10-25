import { Link } from "react-router-dom";
import UnauthorizedNotFound from "../components/UnauthorizedNotFound";

const NotFoundPage = () => {
  return (
    <UnauthorizedNotFound
      Title={"404 Error"}
      SupTitle={"Page Not Found"}
      Message={"Sorry, we couldn’t find the page you’re looking for."}
    />
  );
};

export default NotFoundPage;
