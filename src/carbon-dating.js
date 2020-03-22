const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {

    if(typeof sampleActivity !== 'string' || Number(sampleActivity) > 15 || Number(sampleActivity) < 1 || isNaN(parseFloat(sampleActivity))){
        return false;
    }

    var a = parseFloat(sampleActivity);
    return Math.ceil(Math.log(MODERN_ACTIVITY / a) / (0.693 / HALF_LIFE_PERIOD));

};
