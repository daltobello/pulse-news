const getNews = async () => {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`

  // console.log("apiKey", apiKey)
  const response = await fetch(url)
  if(!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`)
  }

  let news = await response.json()
  return news
}

export default getNews
