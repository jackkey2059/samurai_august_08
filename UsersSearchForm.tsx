 



 const usersSearchFormValidate = (values: any) => {
 	const errors = {}
 	return errors
 } 

 type PropsType = {
 	 onFilterChanged: (filter: FilterType) => void
 }

 export const UsersSearchForm: React.FC<PropsType> = React.memo((props) => {

 	const submit = (values: FIlterType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void} ) => {
 		props.onFilterChanged(values);
 		setSubmitting(false);
 	}

	return <div>
		<Formik...
			initialValues={{term: '', friend: null}}
			validate={usersSearchFormValidate}
			onSubmit={submit}
		>
			{({isSubmitting})} => (
				<Form>

				)
 }
