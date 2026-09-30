const fetchdata = () => {
    const promise = new Promise((resolve , reject) =>{
        setTimeout(() => {
            const success = Math.random() ;
            if (success > 0.5) {
                resolve(`Lấy dữ liệu thành công ${success}`)
            }
            else {
                reject(`Chúc bạn may mắn lần sau ${success}`)
            }
        } , 1500)
    });
    return promise;
};

setTimeout(() => {
    console.log("Timer is done")
    fetchdata()
                .then(result => {
                    console.log(result);
                })
                .catch(error => {
                    console.error(error);
                });
} , 2000);

console.log("Gacha time")
