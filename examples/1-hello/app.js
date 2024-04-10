const result = document.querySelector('.result')

const fetchData = async () => {
  try {
    const { data } = await axios.get('/.netlify/functions/1-hello')
    console.log(data)
    result.innerText = data
  } catch (error) {
    console.log(error.response.data)
    result.innerText = error.response.data
  }
}

fetchData()
