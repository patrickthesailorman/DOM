var hotel = {
    name: "CareerDevs Mega Hotel",
    rating: 5.0,
    roomRate: 325.00,
    roomNumbersAvailable: ["101", "102", "103", "104", "105", "106"],
    roomNumbersBooked: [],
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

    //     roomNumbersAvailable: ["101", "102", "103", "104", "105", "106" ],
    //      roomNumbersBooked: [ ],
    bookRoom: function() {
        // only book a room if one or more is available

        if (this.numberOfRoomsAvailable() > 0) {

            // var randomRoom = this.roomNumbersAvailable[Math.floor(Math.random()*this.roomNumbersAvailable.length)];
            var selectedRoomDD = document.getElementById("selectedRoom").value;
            // alert("Room "+selectedRoomDD+" has been booked.");

            this.roomNumbersBooked = this.roomNumbersBooked.concat(this.roomNumbersAvailable.splice(this.roomNumbersAvailable.indexOf(selectedRoomDD), 1));

            // update the available rooms dropdown list

            var roomsListed = "<form> <select id='selectedRoom'>";
            for (var i = 0; i < this.roomNumbersAvailable.length; i++) {

                roomsListed += "<option value=" + this.roomNumbersAvailable[i] + ">" + this.roomNumbersAvailable[i] + "</option>";
            }

            roomsListed += "</select>";
            roomsListed += "</form>";

            document.getElementById("selectARoom").innerHTML = roomsListed;

            // update the booked rooms dropdown list
            
            var roomsBooked = "<form> <select id='bookedRoom'>";
            for (var i = 0; i < this.roomNumbersBooked.length; i++) {
            
                roomsBooked += "<option value=" +this.roomNumbersBooked[i] + ">" + this.roomNumbersBooked[i] + "</option>";
            }
            
            roomsBooked += "</select>";
            roomsBooked += "</form>";
            
            document.getElementById("roomsBooked").innerHTML = roomsBooked;

        }

    }, // eobookRoom()

};

document.getElementById("hotelName").innerText = hotel.name;


// ===== begin Available rooms select/dropdown 
var roomsListed = "<form> <select id='selectedRoom'>";
for (var i = 0; i < hotel.roomNumbersAvailable.length; i++) {

    roomsListed += "<option value=" + hotel.roomNumbersAvailable[i] + ">" + hotel.roomNumbersAvailable[i] + "</option>";
}

roomsListed += "</select>";
roomsListed += "</form>";

document.getElementById("selectARoom").innerHTML = roomsListed;

// ===== End of Available rooms select/dropdown 

// ===== begin Booked rooms select/dropdown 

var roomsBooked = "<form> <select id='bookedRoom'>";
for (var i = 0; i < hotel.roomNumbersBooked.length; i++) {

    roomsBooked += "<option value=" + hotel.roomNumbersBooked[i] + ">" + hotel.roomNumbersBooked[i] + "</option>";
}

roomsBooked += "</select>";
roomsBooked += "</form>";

document.getElementById("roomsBooked").innerHTML = roomsBooked;

// ===== End Booked rooms select/dropdown 





// EOF
