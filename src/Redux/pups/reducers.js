import { ActionTypes } from './actionTypes.js'

const defaultState = {
	"id": 64,
	"status": "current",
	"title": "Pardon My Frenchie Pups",
	"description": "<p>Pardon My Frenchie Pups</p>",
	"pups": [{
		"id": 35001,
		"number": 1,
		"name": "Olive",
        "price": "$4,000",
        "sex": "Female",
        "color": "Merle",
        "age": "6 weeks",
		"images": {
			"small": "Pup-small-001.jpg",
			"large": "Pup-large-001.jpg"
        },
        "about": "Olive is a super sweet Merle girl. She is looking for a loving family to be a part of. Olive can be a bit shy, but once you get to know her she is the most loveable pup."
    },
    {
		"id": 35002,
		"number": 2,
		"name": "Peanut",
        "price": "$3,500",
        "sex": "Male",
        "color": "Fawn",
        "age": "6 weeks",
		"images": {
			"small": "Pup-small-002.jpg",
			"large": "Pup-large-002.jpg"
        },
        "about": "Peanut is the runt of his litter. Don't let his size fool you, he is also the fiestiest of the bunch."
    },
    {
		"id": 35003,
		"number": 3,
		"name": "Sterling",
        "price": "$3,500",
        "sex": "Male",
        "color": "Gray",
        "age": "5 weeks",
		"images": {
			"small": "Pup-small-003.jpg",
			"large": "Pup-large-003.jpg"
        },
        "about": "Sterling is the strong silent type. He is low energy and doesn't make much fuss, and is most typically found laying around on your favorite rug. He is also super protective and loyal when he needs to be. Mans best friend."
	}]
};

const pupsReducer = (state = defaultState, action) => {

    switch(action.type) {
        default:
            return defaultState.pups;
    }
}

export default pupsReducer;