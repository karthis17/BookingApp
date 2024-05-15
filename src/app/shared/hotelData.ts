export const hotelData = [
    // Previous hotel entries...

    {
        _id: '67565fdfs',
        hotelName: "Seaside Resort",
        location: "Miami",
        amenities: ["Beach Access", "Poolside Bar", "Beach Access", "Poolside Bar", "Beach Access", "Poolside Bar", "Beach Access", "Poolside Bar", "Beach Access", "Poolside Bar"],
        ratings: 4.3,
        rooms: [
            {
                roomName: "Ocean View Suite",
                specifications: ['Free WiFi', 'Couple friendly'],
                benefits: ["Private Balcony", "Beachfront Access"],
                price: 4050,
                amount: 3044,
                taxAndFee: 20,
                description: "An elegant suite with stunning views of the ocean",
                images: ["https://media.easemytrip.com/media/Hotel/SHL-2310261392363659/Common/CommonKci2S1.jpg", "https://pix8.agoda.net/hotelImages/199/199906/199906_18061318220066179921.jpg?ca=0&ce=1&s=312x"],
            },
            // Add more rooms as needed
        ],
        basePrice: 300,
        address: "789 Ocean Drive",
        reviews: [
            {
                name: "Michael Johnson",
                text: "Absolutely loved my stay! Will definitely be back.",
                ratings: 4.5
            },
            // Add more reviews as needed
        ],
        description: "A luxurious resort offering a perfect blend of relaxation and excitement",
        bookingPolicy: "Free cancellation up to 72 hours before check-in",
        thumbnail: "https://media.easemytrip.com/media/Hotel/SHL-2310261392363659/Common/CommonKci2S1.jpg",
        createdAt: new Date()
    },
    {
        _id: '67565fdfsjj',
        hotelName: "Mountain Lodge",
        location: "Aspen",
        amenities: ["Skiing", "Hot Tub"],
        ratings: 4.8,
        rooms: [
            {
                roomName: "Mountain View Cabin",
                specifications: ['Free WiFi', 'Couple friendly'],
                benefits: ["Fireplace", "Scenic Views"],
                price: 5999,
                amount: 4899,
                taxAndFee: 25,
                description: "A cozy cabin nestled in the mountains with breathtaking views",
                images: ["https://pix8.agoda.net/hotelImages/199906/0/a87ea07de98c4ad72d23bddb04f30023.jpg?ca=0&ce=1&s=312x", "https://img.easemytrip.com/roomimages/EMTHOTEL-244502/32/1372891/323565363_1.jpg"]
            },
            // Add more rooms as needed
        ],
        basePrice: 350,
        address: "123 Mountain Rd",
        // images: ["hotel_image7.jpg", "hotel_image8.jpg"],
        reviews: [
            {
                name: "Sarah Wilson",
                text: "Perfect getaway spot!",
                ratings: 5
            },
            // Add more reviews as needed
        ],
        description: "Escape to nature and enjoy the tranquility of the mountains",
        bookingPolicy: "Free cancellation up to 48 hours before check-in",
        thumbnail: "https://media.easemytrip.com/media/Hotel/SHL-2310261392363659/Common/CommonKci2S1.jpg",
        createdAt: new Date()
    }
];

export const PopularCities = [
    {

        name: "New Delhi",
        thumbnail: "https://www.easemytrip.com/images/hotel-img/del-sm.webp"
    }, {
        name: "Mumbai",
        thumbnail: "https://www.easemytrip.com/images/hotel-img/mumb-sm.webp"
    }, {
        name: "Bangalore",
        thumbnail: "https://www.easemytrip.com/images/hotel-img/mumb-sm.webp"
    }, {

        name: "Kolkata",
        thumbnail: "https://www.easemytrip.com/images/hotel-img/kolkata-sm.webp"
    }, {

        name: "Chennai",
        thumbnail: "https://www.easemytrip.com/images/hotel-img/chennai-sm.webp"
    }, {

        name: "Hyderabad",
        thumbnail: "https://www.easemytrip.com/images/hotel-img/hyd-sm.webp"
    }, {

        name: "Pune",
        thumbnail: "https://www.easemytrip.com/images/hotel-img/pune-sm.webp"
    }, {

        name: "Jaipur",
        thumbnail: "https://www.easemytrip.com/images/hotel-img/jaipur-sm.webp"
    }, {

        name: "Ahmedabad",
        thumbnail: "https://www.easemytrip.com/images/hotel-img/ahmd-sm.webp"
    }, {

        name: "Goa",
        thumbnail: "https://www.easemytrip.com/images/hotel-img/goa-sm.webp"
    }, {

        name: "Varanasi",
        thumbnail: "https://www.easemytrip.com/images/hotel-img/varn-sm.webp"
    }, {

        name: "Agra",
        thumbnail: "https://www.easemytrip.com/images/hotel-img/agra-sm.webp"
    }, {

        name: "Kochi (Cochin)",
        thumbnail: "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/04/Marine_Drive_Kochi_Ernakulam_Kerala.jpg"
    }, {

        name: "Udaipur",
        thumbnail: "https://www.easemytrip.com/images/hotel-img/udr-sm.webp"
    }, {

        name: "Shimla",
        thumbnail: "https://www.easemytrip.com/images/hotel-img/shimla-sm.webp"
    }
];