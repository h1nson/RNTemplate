/*
 * api request util
*/
import Toast from 'react-native-root-toast';
// const codeMessage = {
//     200: 'Service has successfully returned data.',
//     201: 'Service has successfully created or edited data.',
//     202: 'A request has been added to execution queue.',
//     204: 'Data has been deleted.',
//     400: 'Request error, service did not edit or create data.',
//     401: 'Unauthorized.',
//     403: 'Authorized user but the request or operation is forbidden.',
//     404: 'Requested record not found, service will not do anything.',
//     406: 'Request format unaccessable.',
//     410: 'Requested resource had been permanently removed and will not restore.',
//     422: 'When creating a data, a validation error happened.',
//     500: 'Service internal error.',
//     502: 'Gateway issue.',
//     503: 'Service unavailable, maybe overload or in maintenance.',
//     504: 'Gateway time out.',
// };

interface RequestOption {
    method: 'POST' | 'GET',
    body: any
}

const request = async (uri: string, option?: RequestOption) => {
    try {
        let response = await fetch(uri, option);
        var json = await response.json();
        return json;
    } catch (error) {
        console.log('Request Failed', error);
        Toast.show('Request Failed', {
            duration: Toast.durations.LONG,
            position: Toast.positions.TOP,
            shadow: true,
            animation: true,
            hideOnPress: true,
        });
    }
};

export default request;
