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

function calculation(a){
    const b= a*550
    document.getElementById("totalSeats").innerText=a
    document.getElementById("totalValue").innerText=b
    

}


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
