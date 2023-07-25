var counter_container = document.querySelector("#counter-container");

async function updateCounter() {
  let response = await fetch(
    "https://9b5lh4vva4.execute-api.ap-south-1.amazonaws.com/getViews"
  );
  let data = await response.json();

  counter_container.innerHTML = "Visitor count: " + data;
}

updateCounter();
