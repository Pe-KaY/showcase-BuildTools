import { fireEvent, render, waitFor } from "@testing-library/react"
import { fetchMock } from "jest-mock-extended"

jest.mock("whatwg-fetch", () => ({
  fetch: fetchMock,
}))

describe("index", () => {
  it("renders tools", async () => {
    const tools = [
      { name: "Gulp", img: "gulp.png", info: "https://gulpjs.com/" },
      { name: "Webpack", img: "webpack.png", info: "https://webpack.js.org/" },
    ]
    fetchMock.mockResolvedValueOnce({
      ok: true,
      json: () => tools,
    })

    const { getByText } = render(<div className="toolswrapper" />)

    await waitFor(() => getByText("Gulp"))
    await waitFor(() => getByText("Webpack"))

    expect(fetchMock).toHaveBeenCalledTimes(1)
    expect(fetchMock).toHaveBeenCalledWith("/tools.json")
  })
  fetchdata()
})