import { Route, Routes } from "react-router-dom";

import routes from "../data/routes";
import { Suspense } from "react";
import { CircularProgress } from "@mui/material";

const PageContent = () => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Routes>
        {routes.map((route, index) => {
          return (
            route.element && (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                name={route.name}
                element={route.element}
              />
            )
          );
        })}
      </Routes>
    </Suspense>
  );
};

export default PageContent;
