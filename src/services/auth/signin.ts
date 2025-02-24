import { ApiContext, User } from '@/types/data';
import { fetcher } from '@/utils';

export type SigninParams = {
    username: string;
    password: string;
};

const signin = async (context: ApiContext, params: SigninParams): Promise<User> => {
    return await fetcher(`${context.apiRootUrl.replace(/\/$/g, '')}/auth/signin}`, {
        method: 'POST',
        headers: { accept: 'application/json', 'Content-Type': 'applicaton/json' },
        body: JSON.stringify(params),
    });
};

export default signin;
