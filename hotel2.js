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
    }
};

// Everything below this line will get executed automatically

document.getElementById("hotelName").innerText = hotel.name;

//     roomNumbersAvailable: ["101", "102", "103", "104", "105", "106" ]

var roomsListed = "<form> <select id='selectedRoom'>";
            for (var i = 0; i < hotel.roomNumbersAvailable.length; i++) {

                roomsListed += "<option value=" + hotel.roomNumbersAvailable[i] + ">" + hotel.roomNumbersAvailable[i] + "</option>";
            }
            
            roomsListed += "</select> </form>";

            document.getElementById("selectARoom").innerHTML = roomsListed;