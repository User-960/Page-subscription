// import { useMutation } from '@tanstack/react-query'
// import { useRouter } from 'next/router'
// import { useMemo, useState } from 'react'
// import { SubmitHandler, useForm } from 'react-hook-form'

// import { IFormFields } from '@/interfaces/form.interface'
// import SubscriptionService from '@/services/subscription.service'

// export const useFormPage = () => {
// 	const [type, setType] = useState('login')

// 	const {
// 		register,
// 		handleSubmit,
// 		formState: { errors }
// 	} = useForm<IFormFields>({
// 		mode: 'onChange'
// 	})

// 	const { mutateAsync, isLoading } = useMutation(
// 		['subscription'],
// 		({ email }: IFormFields) => SubscriptionService.main(email),
// 		{
// 			onSuccess: data => {
// 				console.log(data)
// 			}
// 		}
// 	)

// 	const onSubmit: SubmitHandler<IFormFields> = async data => {
// 		await mutateAsync(data)
// 	}

// 	return useMemo(
// 		() => ({
// 			setType,
// 			register,
// 			handleSubmit,
// 			errors,
// 			isLoading,
// 			onSubmit
// 		}),
// 		[errors, isLoading]
// 	)
// }
