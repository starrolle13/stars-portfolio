var $ = function (id) { return document.getElementById(id); };

var volunteerArray = [];

var displayVolunteers = function () {   
    var volunteerList = $("volunteerList");
    volunteerList.value = ""; // Clear previous content

    // Loop through the volunteerArray and display each volunteer with a running count
    for (var i = 0; i < volunteerArray.length; i++) {
        // Increment index by 1 since array index starts at 0
        var count = i + 1;
        // Append the running count and volunteer name to the textarea
        volunteerList.value += count + ". " + volunteerArray[i] + "\n";
    }
};


var addVolunteer = function () {
    // get the data from the form
    var volunteerString = $("first_name").value + " " + $("last_name").value;

    // store the data in an array
    volunteerArray.push(volunteerString);
    
    // display the volunteers and clear the add form
    displayVolunteers();
    
    // get the add form ready for next entry
    $("first_name").value = "";
    $("last_name").value = "";
    $("first_name").focus();
};


var deleteVolunteer = function () {
    // Get the data from the form
    var firstName = $("first_name").value;
    var lastName = $("last_name").value;
    var fullName = firstName + " " + lastName;

    // Loop through the volunteerArray to find and remove the specific volunteer
    for (var i = 0; i < volunteerArray.length; i++) {
        if (volunteerArray[i] === fullName) {
            volunteerArray.splice(i, 1); // Remove the volunteer at index i
            break; // Exit the loop once the volunteer is deleted
        }
    }
   
    // Display the updated list of volunteers and clear the form fields
    displayVolunteers();
    $("first_name").value = "";
    $("last_name").value = "";
    $("first_name").focus();
};


var clearList = function () {   
    // delete the data from the arrays
    volunteerArray = [];
    
	//   alternative way to delete all of the data from the array
	//    volunteerArray.length = 0;
    
    // remove the volunteers data from the web page
    $("volunteerList").value = "";
    
    $("first_name").focus();
};

var sortList = function () {   
    // sort the scores
    volunteerArray.sort();
    
    // display the scores
    displayVolunteers();    
};

//When the page is fully loaded, the buttons will be mapped to the JavaScript functions
window.onload = function () {
    $("add_button").onclick = addVolunteer;
	$("delete_button").onclick = deleteVolunteer;
    $("clear_button").onclick = clearList;    
    $("sort_button").onclick = sortList;    
    $("first_name").focus();
};