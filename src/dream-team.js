module.exports = function createDreamTeam(/* members */) {
  if(!Array.isArray(members)) {
    return false;
  }

  var dreamTeam = [];

  for(var i = 0; i < members.length; i++){
    if(typeof members[i] == 'string'){
      //var a = members[i].trim()[0].toUpperCase();
      dreamTeam.push(members[i].trim()[0].toUpperCase());
    }
  }
  return dreamTeam.sort().join("");
};