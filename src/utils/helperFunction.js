export function getFormattedDate(string) {
    const date = new Date(string)
    return (MonthName(parseInt(date.getMonth() + 1)) + ' ' + date.getFullYear() + ', ' + date.getDate());
}

function MonthName(month) {
    switch (month) {
        case 1: return 'Jan'
        case 2: return 'Feb'
        case 3: return 'Mar'
        case 4: return 'Apr'
        case 5: return 'May'
        case 6: return 'Jun'
        case 7: return 'Jul'
        case 8: return 'Aug'
        case 9: return 'Sep'
        case 10: return 'Oct'
        case 11: return 'Nov'
        case 12: return 'Dec'
    }
}

export function getPastCampaigns(apiData) {
    let filteredCamp = []
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    apiData ?.forEach(camp => {
        if (Date.parse(camp.date) < now) {
            filteredCamp.push(camp)
        } else null;
    });
    return filteredCamp;
}

export function getLiveCampaigns(apiData) {
    let filteredCamp = []
    const now = new Date();
    apiData ?.forEach(camp => {
        if (new Date(camp.date) ?.setHours(0, 0, 0, 0) === now.setHours(0, 0, 0, 0)) {
            filteredCamp.push(camp)
        } else null;
    });
    return filteredCamp;
}

export function getFutureCampaigns(apiData) {
    let filteredCamp = []
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    apiData ?.forEach(camp => {
        if (new Date(camp.date).setHours(0, 0, 0, 0) > now) {
            filteredCamp.push(camp)
        } else null;
    });
    return filteredCamp;
}

export function getDateDifference(compaignDate, firstDateInFormat) {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(firstDateInFormat)
    const secondDate = new Date(compaignDate);

    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    return diffDays
}