























 
		followingInProgress: Array<number>
		filter: FilterType
	}

	type MapDispatchPropsType = {
		getUsers: (currentPage: number, pagesize: number, filter:FilterType) => void
		unfollow: (userId: number) => void
		follow: (userId: number) => void
	}

	type OwnPropsType = {
		pageTitle: string
	}

	type PropsType = MapStatePropsType & OwnPropsType

	class UserContainer extends React.Component<PropsType> {
		componentDidMount() {
			const {currentPage, pageSize, filter} = this.props
			this.props.getUsers(currentPage, pageSize, filter)
		}
	
	onPageChanged = (pageNumber: number) => {
		const {pageSize, filter} = this.props
		this.props.getUsers(pageNumber, pageSize, filter)
	}

	onFilterChanged = (filter:FilterType) => {
		const {pageSize} = this.props
		this.props.getUsers(1, pageSize, filter)
	}

	render() {

		return <>
			<h2>{this.props.pageTitle}</h2>
			{this.props.isFetching ? <Preloader/> : null}
			<Users totalUsersCount={this.props.totalUsersCount}
				   pageSize={this.props.pageSize}
				   currentPage={this.props.currentPage}
				   onPageChanged={this.onPageChanged}

	}








	let mapStateToProps = (state: AppStateType): MapStatePropsType => {
		return {
			users: getUsers(state),
			pageSize: getPageSize(state),
			totalUsersCount: getTotalUsersCount(state),
			currentPage: getCurrentPage(state),
			isFetching: getIsFetching(state),
			followingInProgress: getFollowingInProgress(state),
			filter: getUsersFilter(state)
		}

	}

	export default compose(
	//
	connect<MapStatePropsType, MApDispatchPropsType, OwnPropsType, AppStateType>(
		mapStateToProps,
		{follow, unfollow, getUsers: requestUsers})
		) (UserContainer)
		)
		}
	}



















