
import request from '@/util/request';

const getUserProfile = async (userId: number) => {
    return request('https://randomuser.me/api');
};

export default {
    getUserProfile,
};
