import * as yup from 'yup'

import { AppErrors } from '@/common/errors/errors'

export const loginSchema = yup.object().shape({
	email: yup
		.string()
		.email(AppErrors.invalidEmail)
		.required(AppErrors.requiredField),
	password: yup
		.string()
		.min(6, AppErrors.minLength)
		.required(AppErrors.requiredField)
		.matches(
			/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/,
			AppErrors.invalidPassword
		)
})

export const registerSchema = yup.object().shape({
	email: yup
		.string()
		.email(AppErrors.invalidEmail)
		.required(AppErrors.requiredField),
	password: yup
		.string()
		.min(6, AppErrors.minLength)
		.required(AppErrors.requiredField)
		.matches(
			/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/,
			AppErrors.invalidPassword
		),
	repeatPassword: yup
		.string()
		.min(6, AppErrors.minLength)
		.required(AppErrors.requiredField)
		.matches(
			/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/,
			AppErrors.invalidPassword
		),
	firstName: yup.string().required(AppErrors.requiredField),
	username: yup.string().required(AppErrors.requiredField)
})
