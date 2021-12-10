import React from "react";
import { render as rtlRender, RenderOptions } from "@testing-library/react";
import { SpaceXProvider } from "spacex/context";

type TOptions = {
  preloadedState: any;
  renderOptions?: RenderOptions[];
};

function render(ui: any, options?: TOptions) {
  const Wrapper: React.ComponentType = ({
    children,
  }: {
    children?: React.ReactNode;
  }) => {
    return <SpaceXProvider>{children}</SpaceXProvider>;
  };

  return rtlRender(ui, { wrapper: Wrapper, ...options?.renderOptions });
}

export * from "@testing-library/react";

export { render };
