function coupon(couponCode){
    console.log(couponCode);
}



function buttonFun(button){
    buttonId=button.id
    totalSeatsCont= document.getElementById("seats")
    totalSeatsText= document.getElementById("seats").innerText
    totalSeats= parseInt(totalSeatsText)

    const buttonClassList = button.classList;

    if (buttonClassList.contains('bg-[#F7F8F8]')  ) {
        buttonClassList.remove('bg-[#F7F8F8]');
        buttonClassList.add("bg-[#1DD100]");
        nowTotalSeats = totalSeats -1;
    }
    else{
        buttonClassList.add('bg-[#F7F8F8]');
        buttonClassList.remove("bg-[#1DD100]");
        nowTotalSeats = totalSeats +1;
    }
    totalSeatsCont.innerText = nowTotalSeats
    
    

}
