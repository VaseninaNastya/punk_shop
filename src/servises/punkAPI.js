const getPunkAPIRes = async () => {
    const res = await fetch(`https://api.punkapi.com/v2/beers`);
    const body = await res.json();
    return body || [];
}
getPunkAPIRes().then(res => console.log(`####:reaaasdadss`, res))
export default getPunkAPIRes;