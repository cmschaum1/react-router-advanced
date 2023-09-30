import { useRouteError } from "react-router-dom";

import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  const routeError = useRouteError();

  let title = "An Error Occurred!";
  let message = "Something went wrong!";

  if (routeError.status === 500) {
    message = routeError.data.message;
  }

  if (routeError.status === 404) {
    title = "Not found!";
    message = "Page not found";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;
