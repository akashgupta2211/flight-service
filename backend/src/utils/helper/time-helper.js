// helpers/time-helper.js
function calculateFlightDuration(departureTime, arrivalTime) {
  const dep = new Date(departureTime);
  const arr = new Date(arrivalTime);

  if (isNaN(dep) || isNaN(arr)) {
    throw new Error("Invalid date format");
  }

  let diffMs = arr - dep;
  if (diffMs < 0) {
    throw new Error("Arrival time cannot be before departure time");
  }

  const diffMinutes = Math.floor(diffMs / (1000 * 60));

  return diffMinutes;
}

module.exports = { calculateFlightDuration };
