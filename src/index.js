import "./styles/index.scss"

document.addEventListener("DOMContentLoaded", () => {
  const toolswrapper = document.querySelector(".toolswrapper")
  const fetchdata = async () => {
    try {
      const response = await fetch("/tools.json")
      const data = await response.json()
      console.log(data)

      data.forEach((tool) => {
        toolswrapper.innerHTML += `
                 <div class="tool">
          <figure>
            <img src="${tool.img}" />
            <figcaption>
              <h1>${tool.name}</h1>
              <button>
                <a href="${tool.info}" target="_blank">More Info</a>
              </button>
            </figcaption>
          </figure>
        </div>
              `
      })
    } catch (error) {
      console.log(error)
    }
  }

  fetchdata()
})


