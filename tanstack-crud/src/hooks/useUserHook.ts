import { useMutation, useQuery, useQueryClient, type UseMutationResult, type UseQueryResult } from "@tanstack/react-query";
import { createUser, getUsers, type TUser } from "../services/userService";


// get users
export const useUsers = (): UseQueryResult<TUser[],Error> =>{
    return useQuery({
        queryKey: ['users'],
        queryFn: getUsers
    })
}

// create user
export const useCreateUser = (): UseMutationResult<TUser,Error,FormData> =>{
    const queryClient = useQueryClient();

    return useMutation({
        mutationKey: ['createuser'],
        mutationFn: createUser,
        onSuccess: () =>{
            queryClient.invalidateQueries({queryKey: ['users'],exact:true})
        }
    })
}