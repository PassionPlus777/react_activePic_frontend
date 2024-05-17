import { Suspense, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigProvider, message } from "antd";
import { IntlProvider } from "react-intl";

import { ThemeConfig, LangConfig } from "@/config";

import LoadingComponent from "@/components/LoadingComponent";

import AppRoute from "@/router/RouterComponent";

// import { contextHolder, messageApi } from "./utils/message";
import { store } from "@/store";

function App() {
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    messageApi.error("error.response.data.errors[0].nessage");
  }, []);
  return (
    <Provider store={store}>
      <ConfigProvider theme={ThemeConfig}>
        <IntlProvider locale={"en-US"} messages={LangConfig["en-US"]}>
          <Suspense fallback={<LoadingComponent />}>
            <Router>
              <AppRoute />
            </Router>
            {contextHolder}
          </Suspense>
        </IntlProvider>
      </ConfigProvider>
    </Provider>
  );
}

export default App;
