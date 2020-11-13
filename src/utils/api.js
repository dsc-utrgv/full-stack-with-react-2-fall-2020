export function fetchInformation (info){
    return fetch(`https://ghibliapi.herokuapp.com/${info}`)
    .then((res) => res.json())
    .then((data) => data)
}