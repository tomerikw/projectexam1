const url = "https://api.spacexdata.com/v4/launches/upcoming";

const launchData = document.querySelector(".allupcoming");

launchData.innerHTML = "Loading page...";

async function fetchData() {
  try {
    const response = await fetch(url);

    const json = await response.json();

    console.log(json);

    launchData.innerHTML = "";

    const results = json;

    results.forEach(function (result) {
      launchData.innerHTML += `<div class="launchcard">
                            <p>${result.name}</p>
                            <p>Time for launch:</p>
                            <p>${result.date_utc}</p>
                            <img src="${result.links.patch.small}">
                            <p>${result.details}</p>
                            </div>
                            `;
    });
  } catch (error) {
    console.log("there is an error");
    (launchData.innerHTML = `<p class="error">oops an error occurred</p>`),
      error;
  }
}

fetchData();
imgError();
