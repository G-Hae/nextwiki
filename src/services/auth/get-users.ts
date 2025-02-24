import { ApiContext, User } from '@/types/data';
import { fetcher } from '@/utils';

export type GetUsersParams = {
    id: number;
};

const getUser = async (context: ApiContext, { id }: GetUsersParams): Promise<User> => {
    return await fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`, {
        headers: {
            Accept: 'applicaton/json',
            'Content-Type': 'application/json',
        },
    });
};

export default getUser;
