
// SECTION document Elements
let theatreElem = document.getElementById('location1')
let circusElem = document.getElementById('location2')
let locationElem3 = document.getElementById('location3')
let locationElem4 = document.getElementById('location4')
let locationElem5 = document.getElementById('location5')
let locationElem6 = document.getElementById('location6')
let locationElem7 = document.getElementById('location7')
let locationElem8 = document.getElementById('location8')
let locationElem9 = document.getElementById('location9')
let locationElem10 = document.getElementById('location10')
let locationElem11 = document.getElementById('location11')
let locationElem12 = document.getElementById('location12')
let locationElem13 = document.getElementById('location13')
let locationElem14 = document.getElementById('location14')
let locationElem15 = document.getElementById('location15')


const locations = [
  '🎭', '🎪', '🎢', '🏟️', '🏨',
  '🏤', '🏥', '🏭', '🏢', '🏣',
  '🏰', '🏬', '🏥', '🏦', '🏪'
]

const people = [
  {
    name: 'Jimbo',
    picture: '🤵',
    isHunter: false,
    location: ''
  },
  {
    name: 'Sammy',
    picture: '🙆‍♀️',
    isHunter: false,
    location: ''
  },
  {
    name: 'Michael',
    picture: '👷',
    isHunter: false,
    location: ''
  },
  {
    name: 'Robert',
    picture: '👷',
    isHunter: false,
    location: ''
  },
  {
    name: 'Terry',
    picture: '🤴',
    isHunter: false,
    location: '',
  },
  {
    name: 'Bill',
    picture: '🕵️',
    isHunter: false,
    location: '',
  },
  {
    name: 'Marie',
    picture: '👩‍🍳',
    isHunter: false,
    location: '',
  },
  {
    name: 'Mykeal',
    picture: '💂',
    isHunter: false,
    location: '',
  },
  {
    name: 'Phil',
    picture: '🧜‍♂️',
    isHunter: false,
    location: '',
  },
  {
    name: 'Wilson',
    picture: '🏐',
    isHunter: false,
    location: '',
  },
  {
    name: 'Wendy',
    picture: '👩‍⚕️',
    isHunter: false,
    location: '',
  },
  {
    name: 'Jeremy',
    picture: '🦹',
    isHunter: false,
    location: '',
  },
  {
    name: 'Mary',
    picture: '👩‍⚖️',
    isHunter: false,
    location: '',
  }
]
// TEST BUTTON
function test() {
  makeAHunter()
  giveHome()
  movePeople()
  drawPeople()
}

// NOTE change people to bat
function attack() {
  people.forEach(p => {
    if (p.isHunter == false) {
      theatreElem.innerText = "🦇"
    }

  });

}

// NOTE change property of random person to hunter
function makeAHunter() {
  let randomNumber = Math.floor(Math.random() * people.length);
  let randomHunter = people[randomNumber];
  randomHunter.isHunter = true
  console.log(randomHunter);
}

// NOTE randomizing location
function giveHome() {
  let randomNumber = Math.floor(Math.random() * locations.length)
  // console.log(randomNumber);
  let randomLocation = locations[randomNumber]
  return randomLocation
}
// NOTE assign a random location to each person to take up that empty string
function movePeople() {
  people.forEach(person => {
    let newHome = giveHome()
    // console.log('new Home', newHome)
    person.location = newHome
  });
}
// // NOTE this function is going to draw the people and their random location to the page
function drawPeople() {
  // Get the document element where i want to draw and assign value

  people.forEach(person => {
    if (person.location == '🎭') {
      theatreElem.innerText = person.picture
      console.log(person);
    }
  })

  people.forEach(person => {
    if (person.location == '🎪') {
      circusElem.innerText = person.picture
    }
  })

  people.forEach(person => {
    if (person.location == '🎢') {
      locationElem3.innerText = person.picture
    }
  })


  people.forEach(person => {
    if (person.location == '🏟️') {
      locationElem4.innerText = person.picture
    }
  })

  people.forEach(person => {
    if (person.location == '🏨') {
      locationElem5.innerText = person.picture
    }
  })

  people.forEach(person => {
    if (person.location == '🏤') {
      locationElem6.innerText = person.picture
    }
  })

  people.forEach(person => {
    if (person.location == '🏥') {
      locationElem7.innerText = person.picture
    }
  })

  people.forEach(person => {
    if (person.location == '🏭') {
      locationElem8.innerText = person.picture
    }
  })

  people.forEach(person => {
    if (person.location == '🏢') {
      locationElem9.innerText = person.picture
    }
  })

  people.forEach(person => {
    if (person.location == '🏣') {
      locationElem10.innerText = person.picture
    }
  })

  people.forEach(person => {
    if (person.location == '🏰') {
      locationElem11.innerText = person.picture
    }
  })

  people.forEach(person => {
    if (person.location == '🏬') {
      locationElem12.innerText = person.picture
    }
  })

  people.forEach(person => {
    if (person.location == '🏥') {
      locationElem13.innerText = person.picture
    }
  })

  people.forEach(person => {
    if (person.location == '🏦') {
      locationElem14.innerText = person.picture
    }
  })

  people.forEach(person => {
    if (person.location == '🏪') {
      locationElem15.innerText = person.picture
    }
  })
}




