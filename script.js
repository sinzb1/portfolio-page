document.addEventListener("DOMContentLoaded", function () {
  var programmingLanguages = [
    "R",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "mySQL",
  ];
  var proficiencyLevels = [50, 20, 25, 15, 5, 35];

  var canvas = document.getElementById("myChart");

  canvas.height = 130;

  var ctx = canvas.getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: programmingLanguages,
      datasets: [
        {
          data: proficiencyLevels,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
          ],
          borderWidth: 1,
          barThickness: 20,
          label: "Beherrschungsgrad",
        },
      ],
    },
    options: {
      indexAxis: "y",
      scales: {
        x: {
          beginAtZero: true,
          max: 100,
        },
      },
      legend: {
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    },
  });
});

function openEmail() {
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var message = "Diese Nachricht wurde versendet von" + name + "\n";
  message += document.getElementById("message").value;
  window.location = "mailto:?subject=" + subject + "&body=" + message;
}

document.addEventListener("DOMContentLoaded", function () {
  var text = document.querySelector(".special").textContent;
  document.querySelector(".special").textContent = "";

  for (var i = 0; i < text.length; i++) {
    var delay = i * 150;
    setTimeout(
      function (index) {
        document.querySelector(".special").textContent += text[index];
      },
      delay,
      i
    );
  }
});
