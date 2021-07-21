function saturdayFun (activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork (activity = 'go to the office' ) {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective (a='*') {
    let inner = function(adj='special') {
        return `You are ${a}${adj}${a}!`
    }
    return inner 
}

// wrapAdjective ("||")( "a dedicated programmer")