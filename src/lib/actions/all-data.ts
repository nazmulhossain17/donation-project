
export const allData = async() =>{
            const res = await fetch("http://localhost:5000/api/post/all-post", {
                cache: "no-cache"
            });
            const apidata = await res.json()
            return apidata.posts.userId
}