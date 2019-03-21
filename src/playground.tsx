import * as React from "react";
import { render } from "react-dom";
import {
  AppProvider,
  Card,
  Layout,
  Page,
  ResourceList
} from "@shopify/polaris";
import "@shopify/polaris/styles.css";

const Playground = () => (
  <AppProvider>
    <Page title="Playground">
      <Layout sectioned>
        <Card sectioned>
          <ResourceList
            items={[1, 2, 3]}
            renderItem={(item: number) => (
              <ResourceList.Item url="some-url" id={item.toString()}>
                <p>Item {item}</p>
              </ResourceList.Item>
            )}
          />
        </Card>
      </Layout>
    </Page>
  </AppProvider>
);

render(<Playground />, document.getElementById("root"));
