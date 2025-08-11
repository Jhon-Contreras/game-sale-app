import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorDetail = () => {
  const error = useRouteError();
  return (
    <div>
      {isRouteErrorResponse(error)
        ? "La página no existe"
        : `Ha ocurrido un error: ${(error as Error).message}`}
    </div>
  );
};

export default ErrorDetail;
