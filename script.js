"use strict";
// note: Start with handling just the first space, and/or the first hyphen. Plan on how you would make it repeat for multiple occurences, even if you can’t code it succesfully.

let input = "k-alle SchLeiGgeyy tiHhoney";
// console.log("_" + input[0].toUpperCase() + input.substring(1, input.indexOf(" ")).toLowerCase() + "_")
// console.log("_" + input.substring(0, input.indexOf(" ")) + "_");
// console.log(input.substring(0, input.indexOf(" ")).length);


// If input is a first name: Make the first character in a name uppercase, and the rest lowercase
function capitalizeFirstName(input) {
    console.log(
        "_" +
        input[0].toUpperCase() +
        input.substring(1, fullName.indexOf(" ")).toLowerCase() +
        "_"
    );
    return (
        input[0].toUpperCase() +
        input.substring(1, input.indexOf(" ")).toLowerCase()
    );
}

// If input is a full name: Find the first name
function findFirstName(input) {
    console.log("_" + input.substring(0, input.indexOf(" ")) + "_");
    return input.substring(0, input.indexOf(" "));
}

// If input is a full name: Find the length of the first name
function firstNameLength(input) {
    console.log(input.substring(0, input.indexOf(" ")).length);
    return input.substring(0, input.indexOf(" ")).length;
}

//  If input is a full name: Find the middle name start and end position, and the middle name itself in a full name string
function middleNameInfo(input) {
    console.log(
        "Start position: " +
        (input.indexOf(" ") + 1) +
        " End position: " +
        (input.lastIndexOf(" ") - 1) +
        " Middle name: " +
        input.substring(input.indexOf(" ") + 1, input.lastIndexOf(" "))
    );

    return (
        "Start position: " +
        (input.indexOf(" ") + 1) +
        " End position: " +
        (input.lastIndexOf(" ") - 1) +
        " Middle name: " +
        input.substring(input.indexOf(" ") + 1, input.lastIndexOf(" "))
    );
}

// If input is a filename: Check if a filename is .png or .jpg
function checkFileType(input) {
    console.log();
    if (input.includes(".jpg") || input.includes(".png")) {
        console.log(true);
        return true;
    } else {
        console.log("false");
        return false;
    }
}

// If input is a password: Hide a password with the correct number of *s
function asterix(input) {
    console.log("*".repeat(input.length));
    return "*".repeat(input.length);
}

// With any input: Make the third character uppercase
function thirdLetterCap(input) {
    console.log(
        input.substring(0, 2) + input[2].toUpperCase() + input.substring(3)
    );
    return input.substring(0, 2) + input[2].toUpperCase() + input.substring(3);
}

// With any input: Make a character uppercase, if it follows a space or a hyphen
capCharAfter(input);

function capCharAfter(input) {
    console.log();

    // if (input.includes("-")) {
    //     console.log(input.charAt(input.indexOf("-") + 1).toUpperCase())
    //     return input.charAt(input.indexOf("-") + 1).toUpperCase();
    // } else if (input.includes(" ")) {
    //     console.log(input.charAt(input.indexOf(" ") + 1).toUpperCase());
    //     return input.charAt(input.indexOf(" ") + 1).toUpperCase();
    // }

    if (input.includes("-") || input.includes(" ")) {
        console.log(input.charAt(input.indexOf("-") + 1).toUpperCase());
        console.log(input.charAt(input.indexOf(" ") + 1).toUpperCase());
        return (
            input.charAt(input.indexOf("-") + 1).toUpperCase(),
            input.charAt(input.indexOf(" ") + 1).toUpperCase()
        );
        // if (input.charAt(?) === "-"
    }
}