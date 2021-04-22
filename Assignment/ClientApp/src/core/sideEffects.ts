const getServices = async (serviceName: string) => {
    try {
        let getTokenRequestOptions = {
            headers: { 'Content-Type': 'application/json' },
            method: 'GET'
        };
        return await (await fetch('/services/' + serviceName, getTokenRequestOptions)).json();
    } catch (error) {
        console.error('Failed at getServices, Error: ', error);
    }
};

export {
    getServices
};
