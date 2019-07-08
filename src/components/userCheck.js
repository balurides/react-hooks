async function usercheck({ username , password }){

    return new Promise((resolve,rejeect) => {
        setTimeout(()=> {
            if(username === 'balu' && password === 'hanuma') {
                resolve();
            } else {
                rejeect();
            }
        },1000);
    });
}

export default usercheck;