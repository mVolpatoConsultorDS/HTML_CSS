"use strict";!function(){var e=document.querySelectorAll(".darkModeButton");e.forEach(function(t){t.addEventListener("click",function(){e.forEach(function(t){var e,o,a;e=(t=t).getAttribute("data-dark-mode"),o=t.getAttribute("data-light-mode"),t.classList.toggle("dark-mode-action"),t.classList.toggle("light-mode-action"),a=t.classList.contains("dark-mode-action"),t.innerHTML=a?e:o})})})}();