function getDays(date) {

    const followedAt = new Date(date);
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - followedAt);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(diffDays)
    return diffDays;
}

module.exports ={
    getDays
}