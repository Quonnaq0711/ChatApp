import React from 'react'
import { useChatStore } from '../store/useChatStore';

export const Sidebar = () => {
    const { getUser, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();
  return (
    <div>Sidebar</div>
  )
}
export default Sidebar;