"use client";

import * as runtime from "react/jsx-runtime";
import { useMDXComponents } from "@/components/mdx-components";
import React from "react";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

interface MDXProps {
  code: string;
}

export const MDXContent = ({ code }: MDXProps) => {
  const Component = useMDXComponent(code);
  const components = useMDXComponents({});
  return <Component components={components} />;
};
