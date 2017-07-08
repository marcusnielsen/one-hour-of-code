/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import input from "../components/input";
import form from "../components/form";

storiesOf("Input", module).add("default", () =>
  <input.view label={"test"} initialValue="initial" />
);

const symbolsData = [{ slug: "slug-1" }, { slug: "slug-2" }];

storiesOf("Form", module).add("default", () =>
  <form.view symbolsData={symbolsData} />
);
