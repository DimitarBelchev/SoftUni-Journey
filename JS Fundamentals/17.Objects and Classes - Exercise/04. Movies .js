movies = (arr) => {
 
    let result = [];
    arr.forEach(element => {
        if (element.includes('addMovie')) {
            const name = element.split(' ').slice(1).join(' ');
            result.push({
                name: name
            })
        } else if (element.includes('directedBy')) {
            const name = element.slice(0, element.indexOf('directedBy') - 1)
            const director = element.slice(element.indexOf('directedBy') + 11)
            result.forEach((el, index) => {
                if (el.name === name) {
                    el.director = director;
                }
            })
        } else if (element.includes('onDate')) {
            const name = element.slice(0, element.indexOf('onDate') - 1)
            const date = element.slice(element.indexOf('onDate') + 7)
            result.forEach((el, index) => {
                if (el.name === name) {
                    el.date = date;
                }
            })
        }
 
    });
    result.forEach(e => {
        if (e.hasOwnProperty("name") && e.hasOwnProperty("date") && e.hasOwnProperty("director")) {
            console.log(JSON.stringify(e));
        }
    })
}