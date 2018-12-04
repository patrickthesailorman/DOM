var hotel = {
    name: "CareerDevs Mega Hotel",
    rating: 5.0,
    roomRate: 325.00,
    roomNumbersAvailable: ["101", "102", "103", "104", "105", "106" ],
    roomNumbersBooked: [ ],
    roomType: "Queen",
    
    numberOfRoomsAvailable: function() { 
        // length of the number of rooms available, returned as an integer (1, 5, 20, etc)
        return this.roomNumbersAvailable.length;
    },
    
    numberOfRoomsBooked: function() {
        return this.roomNumbersBooked.length;
    },
    
    numberOfRooms: function() {
        // avail rooms plus booked rooms
        return this.roomNumbersAvailable.length + this.roomNumbersBooked.length;
    },
    
    bookRoom: function() {
        // only book a room if one or more is available
        
        if (this.numberOfRoomsAvailable() > 0 ) { 
            
            // var randomRoom = this.roomNumbersAvailable[Math.floor(Math.random()*this.roomNumbersAvailable.length)];
            var randomRoom = document.getElementById("selectedRoom").value;
            // alert("Room "+randomRoom+" has been booked.");
            
            this.roomNumbersBooked = this.roomNumbersBooked.concat(this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(randomRoom), 1));
            
        }
        
    },  // eobookRoom()
    
};

document.getElementById("hotelName").innerText = hotel.name;

//     roomNumbersAvailable: ["101", "102", "103", "104", "105", "106" ],

// // ul list begins here
// var roomList = "<ul>";
// for (var i = 0; i < hotel.roomNumbersAvailable.length; i++ ) {
    
//     roomList += "<li>"+hotel.roomNumbersAvailable[i]+"</li>";
// }

// roomList += "</ul>";
// document.getElementById("rmsAvail").innerHTML = roomList;
// // =================== UL ENDS

// ===== SELECT begins --- beginning of a select a room method
var roomsListed = "<form> <select id='selectedRoom'>";
for (var i = 0; i < hotel.roomNumbersAvailable.length; i++ ) {
    
    roomsListed += "<option value="+hotel.roomNumbersAvailable[i]+">"+hotel.roomNumbersAvailable[i]+"</option>";
}

roomsListed += "</select>";
roomsListed += "</form>";

document.getElementById("selectARoom").innerHTML = roomsListed;

// EOF
