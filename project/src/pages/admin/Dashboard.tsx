import React from 'react';
import { Laptop, Users, Wrench, AlertCircle } from 'lucide-react';
import { StatsCard } from '../../components/dashboard/StatsCard';
import { RecentActivity } from '../../components/dashboard/RecentActivity';

export default function AdminDashboard() {
  const stats = [
    { title: 'Total Laptops', value: 150, icon: Laptop },
    { title: 'Assigned Laptops', value: 120, icon: Users },
    { title: 'Under Maintenance', value: 5, icon: Wrench },
    { title: 'Reported Issues', value: 3, icon: AlertCircle },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StatsCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity />
      </div>
    </div>
  );
}