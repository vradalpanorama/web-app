const weatherDescriptionList = [
    {
        en: "Glorious sun",
        no: "Strålende sol",
    },
    {
        en: "Mostly sun",
        no: "For det meste sol",
    },
    {
        en: "Cloudy",
        no: "Overskyet",
    },
    {
        en: "Snow is reported here",
        no: "Her er det meldt snø",
    },
    {
        en: "It's snowing!",
        no: "Det snør!",
    },
    {
        en: "Danger of rain",
        no: "Fare for regn",
    },
    {
        en: "It's raining",
        no: "Det regne",
    },
    {
        en: "Danger of slush",
        no: "Fare for sludd",
    },
    {
        en: "It's slush...",
        no: "Det sludder..",
    },
];

const windDescriptionList = [
    {
        en: "there is calm in the air",
        no: "Det er ro i luften",
    },

    {
        en: "light air",
        no: "flau vind",
    },

    {
        en: "light breeze",
        no: "svak vind",
    },

    {
        en: "gentle breeze",
        no: "lett bris",
    },

    {
        en: "moderate breeze",
        no: "laber bris",
    },

    {
        en: "fresh breeze",
        no: "frisk bris",
    },

    {
        en: "strong breeze",
        no: "liten kuling",
    },

    {
        en: "high wind,",
        no: "stiv kuling",
    },

    {
        en: "gale",
        no: "sterk kuling",
    },

    {
        en: "strong/severe gale",
        no: "liten storm",
    },

    {
        en: "storm",
        no: "full storm",
    },

    {
        en: "violent storm",
        no: "sterk storm",
    },

    {
        en: "hurricane-force",
        no: "orkan",
    },
];

const beaufortScale = (windSpeedMPS) => {
    const beaufortNumber =
        windSpeedMPS < 0.3
            ? 0
            : 0.3 <= windSpeed && windSpeed < 1.6
            ? 1
            : 1.6 <= windSpeed && windSpeed < 3.4
            ? 2
            : 3.4 <= windSpeed && windSpeed < 5.5
            ? 3
            : 5.5 <= windSpeed && windSpeed < 8.0
            ? 4
            : 8.0 <= windSpeed && windSpeed < 10.8
            ? 5
            : 10.8 <= windSpeed && windSpeed < 13.9
            ? 6
            : 13.9 <= windSpeed && windSpeed < 17.2
            ? 7
            : 17.2 <= windSpeed && windSpeed < 20.8
            ? 8
            : 20.8 <= windSpeed && windSpeed < 24.5
            ? 9
            : 24.5 <= windSpeed && windSpeed < 28.5
            ? 10
            : 28.5 <= windSpeed && windSpeed < 32.6
            ? 11
            : 12;

    return beaufortNumber;
};

const weatherTypeDescription = (weatherType) => {
    return weatherDescriptionList[weatherType - 1];
};

const windSpeedDescription = (windSpeed) => {
    return windDescriptionList[beaufortScale(windSpeed)];
};

const weatherDescription = (weatherType, windSpeed) => {
    const weatherDescription = weatherTypeDescription(weatherType);
    const windDescription = windSpeedDescription(windSpeed);

    return {
        en: [weatherDescription.en, windDescription.en],
        no: [weatherDescription.no, windDescription.no],
    };
};

const weatherConditions = (weatherDataType) => {
    const weaterObj = {};
    weaterObj.period = {
        date: weatherDataType["period"]["from"],
        dayOfWeek: weatherDataType["period"]["day_of_week"],
    };

    weaterObj.typeIcon = weatherDataType["symbol"]["fnugg_id"];
    weaterObj.temperature = weatherDataType["temperature"]["value"];
    weaterObj.wind = {
        mps: weatherDataType["wind"]["mps"],
        name: weatherDataType["wind"]["name"],
        degree: weatherDataType["wind"]["degree"],
    };

    if (weatherDataType["snow"]) {
        weaterObj.snow = weatherDataType["snow"]["today"]
            ? weatherDataType["snow"]["today"]
            : 0;
    }

    weaterObj.description = weatherDescription(
        weatherDataType["symbol"]["fnugg_id"],
        weatherDataType["wind"]["mps"]
    );

    return weaterObj;
};

const queryWeather = ({ weatherData }) => {
    const response = {};

    response.lastUpdated = weatherData["forecast"]["last_updated"];
    response.top = weatherConditions(weatherData["combined"]["top"]);
    response.bottom = weatherConditions(weatherData["combined"]["bottom"]);
    response.forecast = weatherData["forecast"]["long_term"].map((item) =>
        weatherConditions(item)
    );

    return response;
};

export default queryWeather ;
