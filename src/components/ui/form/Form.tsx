import React, { FC, useState } from 'react'
import { Message, Path, UseFormRegister, ValidationRule } from 'react-hook-form'

import styles from './Form.module.scss'
import { IFormFields } from '@/interfaces/auth.interface/auth.interface'

interface IFormProps {
	placeholder: string
	type?: string
	register?: UseFormRegister<IFormFields>
	name?: Path<IFormFields>
	required?: Message | ValidationRule<boolean>
	pattern?: ValidationRule<RegExp>
	error?: string
	value: string
	onChange: any
	onSubmit?: any
}

const Form: FC<IFormProps> = ({
	register,
	name,
	required,
	placeholder,
	type,
	pattern,
	value,
	onChange,
	onSubmit
}) => {
	const [error, setError] = useState<boolean>(false)

	const onSubmitHandler = (event: any) => {
		if (!value) {
			event.preventDefault()
			setError(true)
		} else {
			setError(false)
		}
	}

	return (
		<form className={styles.form}>
			<input
				className={styles.input}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>

			{error && <div className={styles.error}>Email is a required field</div>}

			<button className={styles.btn} onClick={onSubmitHandler}>
				Free Trial
			</button>
		</form>
	)
}

export default Form
