function weekDay() {
    return ["sunday", "tuesday", "wednesday", "thursday", "friday", "saturday"] [(new Date()).getDay()];
}
