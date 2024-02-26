function coupon(couponCode) {
    console.log(couponCode);
}
function addInTable(buttonId) {
    const newElement = document.createElement('tr');
    newElement.id = buttonId + 1;

    const td1 = document.createElement('td');
    td1.id = 'nameSeat';
    td1.textContent = buttonId;

    const td2 = document.createElement('td');
    td2.id = 'seatClass';
    td2.textContent = 'Economy';

    const td3 = document.createElement('td');
    td3.id = 'seatPrice';
    td3.textContent = '550';

    newElement.appendChild(td1);
    newElement.appendChild(td2);
    newElement.appendChild(td3);

    const table = document.getElementById('myTable');
    const lastChild = table.lastElementChild;

    // Insert the new row before the last child
    table.insertBefore(newElement, lastChild);
}

function removeInTable(buttonId) {
    const rowToRemove = document.getElementById(buttonId + '1'); // Assuming your row id is buttonId + 1

    if (rowToRemove) {
        rowToRemove.remove();
    }
}





function coupons(coupon) {
    let a = parseInt(document.getElementById("totalValue").innerText)
    if (coupon === "non") {
        return b;
    }
    else if (coupon === "NEW15") {
        b = a * .85
        return b;
    }
    else if (coupon === "Couple 20") {
        b = a * .80
        return b;
    }
    else if (coupon === "Free") {
        return 0;
    }
    else {
        return a
    }

}


document.getElementById("input").addEventListener("keyup", function (event) {
    const newEvent = event.target.value.toLowerCase(); // Convert to lowercase for case-insensitive matching
    console.log(newEvent);

    const couponCodes = ["free", "new15", "couple 20"];
    const Button = document.getElementById("inputButton");

    // Check if the input includes any of the coupon codes
    if (couponCodes.some(code => newEvent.includes(code))) {
        // Enable the button
        Button.disabled = false;
    } else {
        // Disable the button
        Button.disabled = true;
    }
});



function calculation(a) {
    const b = a * 550;
    document.getElementById("totalSeats").innerText = a;
    document.getElementById("totalValue").innerText = b;
    document.getElementById("grandTotal").innerText = b;

}

const Button = document.getElementById("inputButton");

// Disable the button
Button.disabled = true;

document.getElementById("inputButton").addEventListener("click", function () {
    coupon = document.getElementById("input").value
    console.log(coupon)
    a = parseInt(document.getElementById("totalValue").innerText)
    console.log(a)
    document.getElementById("grandTotal").innerText = coupons(coupon);



})


let userSitTakes = 0;
function buttonFun(button) {
    const buttonId = button.id
    totalSeatsCont = document.getElementById("seats")
    totalSeatsText = document.getElementById("seats").innerText
    totalSeats = parseInt(totalSeatsText)



    const buttonClassList = button.classList;

    if (userSitTakes < 4) {
        if (buttonClassList.contains('bg-[#F7F8F8]')) {
            buttonClassList.remove('bg-[#F7F8F8]');
            buttonClassList.add("bg-[#1DD100]");

            buttonClassList.remove("hover:bg-[#1DD100]");
            nowTotalSeats = totalSeats - 1;

            addInTable(buttonId)
            userSitTakes++
        }
        else {
            buttonClassList.add('bg-[#F7F8F8]');
            buttonClassList.remove("bg-[#1DD100]");

            buttonClassList.add("hover:bg-[#1DD100]");
            nowTotalSeats = totalSeats + 1;

            removeInTable(buttonId)
            userSitTakes--
        }
    }
    else {
        if (buttonClassList.contains('bg-[#1DD100]')) {
            buttonClassList.remove('bg-[#1DD100]');
            buttonClassList.add("bg-[#F7F8F8]");

            buttonClassList.add("hover:bg-[#1DD100]");
            nowTotalSeats = totalSeats - 1;


            removeInTable(buttonId)
            userSitTakes--
        }
        else {
            console.log('This is limite')
        }

    }
    totalSeatsCont.innerText = nowTotalSeats


    calculation(userSitTakes)


}

const nextButton = document.getElementById("nextButton");

// Disable the button
nextButton.disabled = true;


function inputFil() {
    const nameInput = document.getElementById("Name").value;
    const phoneInput = document.getElementById("phNu").value;
    const nextButton = document.getElementById("nextButton");

    if (nameInput.trim() !== "" && phoneInput.trim() !== "") {
        // Enable the button if both Name and Phone Number are not empty
        nextButton.disabled = false;
    } else {
        // Disable the button if either Name or Phone Number is empty
        nextButton.disabled = true;
    }
}

