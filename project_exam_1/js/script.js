const url = "https://api.spacexdata.com/v4/launches/next";

const launchData = document.querySelector(".launchdata");

launchData.innerHTML = "Loading page...";

async function fetchData() {
  try {
    const response = await fetch(url);

    const json = await response.json();

    console.log(json);

    launchData.innerHTML = "";

    launchData.innerHTML += `<div class="launchcard">
                            <h2 class="nextlaunch">Next Launch</h2>
                            <p>${json.name}</p>
                            <p>Time for launch:</p>
                            <p>${json.date_utc}</p>
                            <img src="${json.links.patch.small}">
                            <a class="detailsbutton" href="details.html">More info</a>
                            </div>
                            `;
  } catch (error) {
    console.log("there is an error");
    (launchData.innerHTML = `<p class="error">oops an error occurred</p>`),
      error;
  }
}
fetchData();
