import Image from 'next/image'
import React, { FC, useEffect, useState } from 'react'
import { Message, Path, UseFormRegister, ValidationRule } from 'react-hook-form'

import errorIcon from '../../../../public/images/error.svg'
import successIcon from '../../../../public/images/success.svg'

import styles from './Form.module.scss'
import { IFormFields } from '@/interfaces/form.interface'

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
	// const [error, setError] = useState<boolean>(false)

	// useEffect(() => {
	// 	if (!value.includes('@')) {
	// 		setError(true)
	// 	} else {
	// 		setError(false)
	// 	}
	// }, [value])

	return (
		<form className={styles.form}>
			<input
				className={styles.input}
				type={type}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>

			<button className={styles.btn}>Free Trial</button>

			{/* {!error && value && (
				<div className={styles.icon}>
					<Image src={successIcon} width={48} height={48} alt='success icon' />
				</div>
			)}

			{error && value && (
				<div className={styles.icon}>
					<Image src={errorIcon} width={48} height={48} alt='error icon' />
				</div>
			)} */}
		</form>
	)
}

export default Form
