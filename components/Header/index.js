// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const headerMainDiv = document.createElement("div");
    const headerDateSpan = document.createElement("span");
    const headerTitle = document.createElement("h1");
    const headerTempSpan = document.createElement("temp");

    headerMainDiv.classList.add("header");
    headerDateSpan.classList.add("date");
    headerTempSpan.classList.add("temp");
    headerDateSpan.textContent = "SMARCH 28, 2019";
    headerTitle.textContent = "Lambda Times";
    headerTempSpan.textContent = "98F";

    headerMainDiv.append(headerDateSpan,headerTitle,headerTempSpan);

    return headerMainDiv;
}

// document.querySelector(".header-cotainer").append(Header());
