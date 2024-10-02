function saturdayFun(activity) {
    if (activity === undefined) {
        activity = 'roller-skate';
    }
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity) {
    if (activity === undefined) {
        activity = 'go to the office';
    }
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(visualFlair = "*") {
    return function(adj = "special") {
        return `You are ${visualFlair}${adj}${visualFlair}!`;
    };
}
