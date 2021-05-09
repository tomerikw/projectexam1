const url = "https://api.spacexdata.com/v4/launches/next";

const launchDetails = document.querySelector(".launchdetails");

launchDetails.innerHTML = "Loading page...";

async function fetchData() {
  try {
    const response = await fetch(url);

    const json = await response.json();

    console.log(json);

    pageTitle = json.name;
    document.querySelector("title").textContent = pageTitle;

    launchDetails.innerHTML = "";

    launchDetails.innerHTML += `<div class="detailscard">
                                <div class="fontdetails">
                            <p>${json.name}</p>
                            <p>Time for launch:</p>
                            <p>${json.date_utc}</p>
                            </div>
                            <img src="${json.links.patch.small}">
                            <p>${json.details}</p>
                            </div>
                            `;
  } catch (error) {
    console.log("there is an error");
    (launchDetails.innerHTML = `<p class="error">oops an error occurred</p>`),
      error;
  }
}
fetchData();
