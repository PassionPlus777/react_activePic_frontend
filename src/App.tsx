import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ConfigProvider } from "antd";
import { IntlProvider } from "react-intl";

import { ThemeConfig, LangConfig } from "@/config";

import LoadingComponent from "@/components/LoadingComponent";
import AppRoute from "@/router/router";

function App() {
  return (
    <ConfigProvider theme={ThemeConfig}>
      <IntlProvider locale={"en-US"} messages={LangConfig["en-US"]}>
        <Suspense fallback={<LoadingComponent />}>
          <Router>
            <AppRoute />
          </Router>
        </Suspense>
      </IntlProvider>
    </ConfigProvider>
  );
}

export default App;
