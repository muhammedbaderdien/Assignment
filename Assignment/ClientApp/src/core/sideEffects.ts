import { Dispatch } from 'redux';

const isValidThread = (threadId: string) => async (dispatch: Dispatch) => {
    try {
        let validationRequestOptions = { method: 'GET' };
        let validationResponse = await fetch('/isValidThread/' + threadId, validationRequestOptions);
        if (validationResponse.status === 200) {
            dispatch(setThreadId(threadId));
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Failed at getting isThreadIdValid, Error: ', error);
        return false;
    }
};

const createThread = async () => {
    let threadId = await createThreadHelper();
    if (threadId !== null) {
        //window.location.href += `?threadId=${threadId}`;
        return threadId;
    } else {
        console.error('unable to generate a new chat thread');
        return threadId;
    }
};


// Thread Helper
const createThreadHelper = async () => {
    try {
        let createThreadRequestOptions = { method: 'POST' };
        let createThreadResponse = await fetch('/createThread', createThreadRequestOptions);
        let threadId = await createThreadResponse.text();
        return threadId;
    } catch (error) {
        console.error('Failed at creating thread, Error: ', error);
        return '';
    }
};


const setEmoji = async (userId: string, emoji: string) => {
    try {
        let getTokenRequestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ Emoji: emoji })
        };
        await (await fetch('/userConfig/' + userId, getTokenRequestOptions)).json;
    } catch (error) {
        console.error('Failed at setting emoji, Error: ', error);
    }
};

const getEmoji = async (userId: string) => {
    try {
        let getTokenRequestOptions = {
            headers: { 'Content-Type': 'application/json' },
            method: 'GET'
        };
        return await (await fetch('/userConfig/' + userId, getTokenRequestOptions)).json();
    } catch (error) {
        console.error('Failed at getting emoji, Error: ', error);
    }
};

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
    createThread,
    getEmoji,
    setEmoji,
    isValidThread,
    getServices,
};
