const getPost = async (id) => {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json()
    const ans = data.map(async (item) => {

        const comment = await getComments(item.id)
        return { title: item.title, comment }
    })
    const newResponse = await Promise.all(ans)
    console.log(newResponse)
}



const getComments = async (id) => {

    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    let data = await res.json()
    const ans = data.map((item) => item.body)
    return ans
}


getPost()