import React from 'react';
import { Laptop, AlertCircle } from 'lucide-react';
import { StatsCard } from '../../components/dashboard/StatsCard';
import { RecentActivity } from '../../components/dashboard/RecentActivity';

export default function EmployeeDashboard() {
  const stats = [
    { title: 'Assigned Laptops', value: 2, icon: Laptop },
    { title: 'Active Issues', value: 1, icon: AlertCircle },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">My Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stats.map((stat) => (
          <StatsCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6">
        <RecentActivity />
      </div>
    </div>
  );
}