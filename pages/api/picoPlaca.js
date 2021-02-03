import moment from "moment";

export default async function handler(req, res) {
  let { data } = await req.body,
    { plateNumber, date, time } = data,
    lastValue;

  switch (req.method) {
    case "POST":
      let day = moment(date).format("dddd");

      lastValue = plateNumber.substr(plateNumber.length - 1);

      if (isNaN(lastValue)) {
        lastValue = plateNumber.substr(plateNumber.length - 2);
        lastValue = lastValue.substr(0, 1);

        validateDayPlate(day, lastValue, time, res);
      } else {
        validateDayPlate(day, lastValue, time, res);
      }
      break;

    default:
      break;
  }
}

const validateDayPlate = (dayValue, plateNumberValue, timeValue, res) => {
  switch (dayValue) {
    case "Monday":
      if (plateNumberValue == 1 || plateNumberValue == 2) {
        if (validateTime(timeValue)) {
          return res.status(401).json({
            circulate: false,
            data: null,
            msm: "Can't circulate.",
          });
        } else {
          return res.status(200).json({
            circulate: true,
            data: `Day: ${dayValue}, Time: ${timeValue}, Your Last Plate Digit: ${plateNumberValue}.`,
            msm: "Can circulate",
          });
        }
      }

    case "Tuesday":
      if (plateNumberValue == 3 || plateNumberValue == 4) {
        if (validateTime(timeValue)) {
          return res.status(401).json({
            circulate: false,
            data: null,
            msm: "Can't circulate.",
          });
        } else {
          return res.status(200).json({
            circulate: true,
            data: `Day: ${dayValue}, Time: ${timeValue}, Your Last Plate Digit: ${plateNumberValue}.`,
            msm: "Can circulate",
          });
        }
      }

    case "Wednesday":
      if (plateNumberValue == 5 || plateNumberValue == 6) {
        if (validateTime(timeValue)) {
          return res.status(401).json({
            circulate: false,
            data: null,
            msm: "Can't circulate.",
          });
        } else {
          return res.status(200).json({
            circulate: true,
            data: `Day: ${dayValue}, Time: ${timeValue}, Your Last Plate Digit: ${plateNumberValue}.`,
            msm: "Can circulate",
          });
        }
      }

    case "Thursday":
      if (plateNumberValue == 7 || plateNumberValue == 8) {
        if (validateTime(timeValue)) {
          return res.status(401).json({
            circulate: false,
            data: null,
            msm: "Can't circulate.",
          });
        } else {
          return res.status(200).json({
            circulate: true,
            data: `Day: ${dayValue}, Time: ${timeValue}, Your Last Plate Digit: ${plateNumberValue}.`,
            msm: "Can circulate",
          });
        }
      }

    case "Friday":
      if (plateNumberValue == 9 || plateNumberValue == 0) {
        if (validateTime(timeValue)) {
          return res.status(401).json({
            circulate: false,
            data: null,
            msm: "Can't circulate.",
          });
        } else {
          return res.status(200).json({
            circulate: true,
            data: `Day: ${dayValue}, Time: ${timeValue}, Your Last Plate Digit: ${plateNumberValue}.`,
            msm: "Can circulate",
          });
        }
      }

    default:
      return res.status(200).json({
        circulate: true,
        data: `Day: ${dayValue}, Time: ${timeValue}, Your Last Plate Digit: ${plateNumberValue}.`,
        msm: "Can circulate",
      });
  }
};

const validateTime = (timeValue) => {
  if (timeValue >= "07:00" && timeValue <= "09:30") {
    return true;
  } else if (timeValue >= "16:00" && timeValue <= "19:30") {
    return true;
  } else {
    return false;
  }
};
