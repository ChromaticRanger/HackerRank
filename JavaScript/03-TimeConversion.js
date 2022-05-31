
// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

function timeConversion(s) {

  // Are we working with AM or PM
  const format = s.slice(-2)
  const time = s.slice(0, s.length - 2)

  // AM or PM
  let hours = time.slice(0, 2)
  // The rest of the time
  let rest  = time.slice(2, s.length)

  if (format === 'AM') {
    if (hours === '12') {
      hours = '00'
    } 
  } else {
    if (hours !== '12') {
      // Add 12 hours to the time
      let newHours = parseInt(hours) + 12
      hours = newHours
    }
  }

  process.stdout.write(`${hours}${rest}`)

}

// timeConversion('12:05:45AM')  // 00:05:45
// timeConversion('12:05:45PM')  // 12:05:45
// timeConversion('01:05:45AM')  // 01:05:45
// timeConversion('01:05:45PM')  // 13:05:45
timeConversion('07:05:45PM')  // 19:05:45

