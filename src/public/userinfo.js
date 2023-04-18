//let user_name = sessionStorage.getItem("name");
let user_points = sessionStorage.getItem("points");

//document.querySelector("span.name").innerHTML = user_name;
document.querySelector("span.points").innerHTML = user_points;

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }