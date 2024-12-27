
function BookClick(){
    document.getElementById("btnBooking").style.display = "none";
    document.getElementById("summaryContainer").style.display = "block";

    movieName = document.getElementById("lstMovies").value;

    document.getElementById("lblName").innerText = movieName;
    document.getElementById("lblDate").innerText = document.getElementById("lstDate").value;
    document.getElementById("lblCinema").innerText = document.getElementById("lstCinema").value;
    document.getElementById("lblTiming").innerText = document.getElementById("lstTiming").value;

    if(movieName=="DEADPOOL AND WOLVERINE"){
         document.getElementById("imgPoster").src = "../public/images/deadpool.png";
    } else {
        document.getElementById("imgPoster").src = "../public/images/ulajh.png";
    }

}

function ModifyClick(){
     document.getElementById("lblTitle").innerText = "Modify Booking";
     document.getElementById("btnBook").innerText = "Save";
     document.getElementById("btnBook").className = "btn btn-success";
}
