
async function checkUser1({ username, password }) {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(username === 'balu' && password==='hanuma') {
                resolve();
            } else {
                reject();
            }
        }, 1000);
    });
}

export default checkUser1;