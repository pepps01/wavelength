import React from 'react'
import DashboardLayout from '../layout'
import MoneyCard from '@/components/specific/MoneyCard'

function page() {
  return (
    <DashboardLayout title={"Send Money"}>
      <MoneyCard/>
    </DashboardLayout>
  )
}
