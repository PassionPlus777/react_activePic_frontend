import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import { IntlProvider } from "react-intl";

import { ThemeConfig, LangConfig } from "@/config";

import LoadingComponent from "@/components/LoadingComponent";

import AppRoute from "@/router/RouterComponent";
import MessagePage from "./pages/MessagePage";

import { store } from "@/store";

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider theme={ThemeConfig}>
        <IntlProvider locale={"en-US"} messages={LangConfig["en-US"]}>
          <Suspense fallback={<LoadingComponent />}>
            <Router>
              <AppRoute />
            </Router>
            <MessagePage />
          </Suspense>
        </IntlProvider>
      </ConfigProvider>
    </Provider>
  );
}

export default App;
