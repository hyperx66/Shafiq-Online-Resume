$(document).ready(function() {
    $("#home").show()
    $("#education").hide()
    $("#achievements").hide()
    $("#contact").hide()
});

function homeClick() {
    $("#home").show()
    $("#education").hide()
    $("#achievements").hide()
    $("#contact").hide()

    var homeElem = document.getElementById("homeNav")
    homeElem.classList.add("active")
    var educationElem = document.getElementById("educationNav")
    educationElem.classList.remove("active")
    var achievementElem = document.getElementById("achievementNav")
    achievementElem.classList.remove("active")
    var contactElem = document.getElementById("contactNav")
    contactElem.classList.remove("active")
}

function educationClick() {
    $("#home").hide()
    $("#education").show()
    $("#achievements").hide()
    $("#contact").hide()

    var homeElem = document.getElementById("homeNav")
    homeElem.classList.remove("active")
    var educationElem = document.getElementById("educationNav")
    educationElem.classList.add("active")
    var achievementElem = document.getElementById("achievementNav")
    achievementElem.classList.remove("active")
    var contactElem = document.getElementById("contactNav")
    contactElem.classList.remove("active")
}

function achievementsClick() {
    $("#home").hide()
    $("#education").hide()
    $("#achievements").show()
    $("#contact").hide()

    var homeElem = document.getElementById("homeNav")
    homeElem.classList.remove("active")
    var educationElem = document.getElementById("educationNav")
    educationElem.classList.remove("active")
    var achievementElem = document.getElementById("achievementNav")
    achievementElem.classList.add("active")
    var contactElem = document.getElementById("contactNav")
    contactElem.classList.remove("active")
}

function contactClick() {
    $("#home").hide()
    $("#education").hide()
    $("#achievements").hide()
    $("#contact").show()

    var homeElem = document.getElementById("homeNav")
    homeElem.classList.remove("active")
    var educationElem = document.getElementById("educationNav")
    educationElem.classList.remove("active")
    var achievementElem = document.getElementById("achievementNav")
    achievementElem.classList.remove("active")
    var contactElem = document.getElementById("contactNav")
    contactElem.classList.add("active")
}