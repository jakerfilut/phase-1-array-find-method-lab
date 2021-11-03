// const record = [
//     { year: "2018", result: "N/A"},
//     { year: "2017", result: "N/A"},
//     { year: "1961", result: "N/A"},
//     { year: "1960", result: "N/A"}
//   ]






function superbowlWin(array){
    let score = array.find(record => record.result === "W");
    if (!score){
        return undefined;
    }else{
        return score.year;
    }
}   
