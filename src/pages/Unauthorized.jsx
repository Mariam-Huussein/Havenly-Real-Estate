import UnauthorizedNotFound from "../components/UnauthorizedNotFound";

const Unauthorized = () => {
  return (
    <UnauthorizedNotFound
      Title={"Access Denied"}
      SupTitle={"Un Authorized"}
      Message={"You don't have permission to view this page."}
    />
  );
};

export default Unauthorized;
