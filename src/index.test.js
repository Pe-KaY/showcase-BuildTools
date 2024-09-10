


describe("index", () => {
  beforeEach(() => {
    global.fetch = jest.fn(); // Mock the global fetch
  });

  afterEach(() => {
    jest.resetAllMocks(); // Reset fetch after each test
  });

  it("fetches and renders tools", async () => {
    const tools = [
      { name: "Gulp", img: "gulp.png", info: "https://gulpjs.com/" },
      { name: "Webpack", img: "webpack.png", info: "https://webpack.js.org/" },
    ];

    // Mock the fetch response
    global.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => tools,
    });

    // Call the function that fetches the tools
    const data = await fetchTools(); // Assuming fetchTools is the function you're testing

    // Check if the tools are fetched and match expected result
    expect(data).toEqual(tools);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith("/tools.json");
  });
});

// Example function that fetches tools (to be placed in your index.js or tools.js)
async function fetchTools() {
  const response = await fetch("/tools.json");
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Failed to fetch tools");
  }
}