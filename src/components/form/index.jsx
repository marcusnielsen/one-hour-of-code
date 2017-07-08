import React from "react";
import input from "../input";

const getInputField = slug =>
  <input.view key={slug} label="slug" initialValue={slug} />;

const view = ({ symbolsData }) =>
  <div>
    {symbolsData.map(({ slug }) => getInputField(slug))}
  </div>;

export default {
  view
};
