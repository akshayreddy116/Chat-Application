import {useChartStore} from '../stores/ChartStore'


const Sidebar = () => {
  const{getUsers, users, selectedUser, setSelectedUser, isUsersLoading} = useChartStore()

  const onlineUsers = [];
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  if(isUsersLoading) {
    return <SidebarSkeleton />
  }
  return (
    <div>
      
    </div>
  )
}

export default Sidebar




