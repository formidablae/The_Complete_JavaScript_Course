let day = 'monday';

switch (day) {
    case 'monday':  // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':  // day === 'tuesday'
        console.log('Prepare theory videos');
        break;
    case 'wednesday':  // day === 'wednesday'
    case 'thursday':  // day === 'thursday'
        console.log('Write code examples');
        break;
    case 'friday':  // day === 'friday'
        console.log('Record videos');
        break;
    case 'saturday':  // day === 'saturday'
    case 'sunday':  // day === 'sunday'
        console.log('Enjoy the weekend :D');
    default:  // not a valid day
        console.log('Not a valid day!');
}

day = 'wednesday';

switch (day) {
    case 'monday':  // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':  // day === 'tuesday'
        console.log('Prepare theory videos');
        break;
    case 'wednesday':  // day === 'wednesday'
    case 'thursday':  // day === 'thursday'
        console.log('Write code examples');
    // break;
    case 'friday':  // day === 'friday'
        console.log('Record videos');
        break;
    case 'saturday':  // day === 'saturday'
    case 'sunday':  // day === 'sunday'
        console.log('Enjoy the weekend :D');
        break;
    default:  // not a valid day
        console.log('Not a valid day!');
}

day = 'holiday';

switch (day) {
    case 'monday':  // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':  // day === 'tuesday'
        console.log('Prepare theory videos');
        break;
    case 'wednesday':  // day === 'wednesday'
    case 'thursday':  // day === 'thursday'
        console.log('Write code examples');
        break;
    case 'friday':  // day === 'friday'
        console.log('Record videos');
        break;
    case 'saturday':  // day === 'saturday'
    case 'sunday':  // day === 'sunday'
        console.log('Enjoy the weekend :D');
        break;
    default:  // not a valid day
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}