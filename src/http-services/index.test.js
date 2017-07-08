import services from "../http-services";

test("http service", () => {
  const dataPromise = services.symbols.get();

  return dataPromise.then(data => {
    expect(data).toMatchSnapshot();
  });
});
